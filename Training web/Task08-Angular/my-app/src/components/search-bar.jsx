import React from "react";

function SearchBar(props) {
  const {setFilterCompanie } = props;

  const agentsFilter = (event) => {
    let filter = event.target.value;
    if (filter.length > 3) {
      setFilterCompanie(filter);
    }else{
      setFilterCompanie("");
    }
  };
  return (
    <div className="image-hero">
      <div className="search-bar">
        <h1 className="search-bar__title">Los mejores agentes de seguridad</h1>
        <div className="search-bar__element">
          <input
            type="text"
            placeholder="Buscar por Ubicación"
            className="search-bar__element__text"
            id="search-bar-text"
            onChange={agentsFilter}
          />
          <button className="btn search-bar__element__button">
            <i className="icon-glass"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
