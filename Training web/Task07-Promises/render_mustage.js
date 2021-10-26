let getCompaniesData = new Promise(async function (resolve, reject) {
  let url = "https://my-json-server.typicode.com/Randall29/Randall29/companies";
  const res = await fetch(url);
  const companies = await res.json();
  if (companies !== null) {
    resolve(companies);
  } else {
    let reason = new Error("Problem obtain data");
    reject(reason);
  }
});

const renderCompaniesData = (nameFilter) => {
  getCompaniesData
    .then(function (companies) {
      $(".info-agents-container__item").remove();
      $.each(companies, function (index, item) {
        if(item.name.includes(nameFilter)){
          let template = document.getElementById("template").innerHTML;
        $(".info-agents-container").append(Mustache.render(template, item));
        }
      });
    })
    .catch(function (error) {
      console.log(error.message);
    });
};

renderCompaniesData("");

let searchBarText = () => {
  $("#search-bar-text").keyup(function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      // Trigger the button element with a click
      $("#search-bar-button").click();
    }
  });
};

searchBarText();

const filterSearchData = () => {
  debugger;
  let filter = $("#search-bar-text").val();
  renderCompaniesData(filter);
};
