import React, { useState } from "react";
import Header from "./header";
import SearchBar from "./search-bar";
import Footer from "./footer";
import Agents from "./agents";
function App(props) {
  const [agents, setAgents] = useState([]);
  const [filterCompanie, setFilterCompanie] = useState("");
  let filteredDataAgents = [];

  let filteredAgents = () => {
    if (filterCompanie.length < 3) {
      filteredDataAgents = agents;
    } else {
      filteredDataAgents = agents.filter(
        (agent) =>
          agent.name.includes(filterCompanie) ||
          agent.description.includes(filterCompanie)
      );
    }
  };
  let getCompaniesData = new Promise(async function (resolve, reject) {
    let url =
      "https://my-json-server.typicode.com/Randall29/Randall29/companies";
    const res = await fetch(url);
    const companies = await res.json();
    if (companies !== null) {
      resolve(companies);
    } else {
      let reason = new Error("Problem obtain data");
      reject(reason);
    }
  });

  let handleCompaniesData = () => {
    getCompaniesData
      .then(function (companies) {
        setAgents(companies);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  handleCompaniesData();
  filteredAgents();

  return (
    <div>
      <Header></Header>
      <SearchBar
        setFilterCompanie={setFilterCompanie}
        filterCompanie={filterCompanie}
      ></SearchBar>
      <Agents dataAgents={filteredDataAgents}></Agents>
      <Footer></Footer>
    </div>
  );
}

export default App;
