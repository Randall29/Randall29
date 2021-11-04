import React from "react";
import certifiedLogo from "../assets/certified.png";

function Agent(props) {
  let agentData = props.agentData;
  return (
    <div className="info-agents-container__item">
      <div className="info-agents-container__item__head">
        <span className="info-agents-container__item__title">
          {agentData.name}
        </span>
        <img
          className="info-agents-container_certified-image"
          alt="represents certified"
          src={certifiedLogo}
          certified={agentData.certified}
        />
      </div>
      <div className="info-agents-container__item__body">
        <img
          src={agentData.image}
          alt="show the agent"
          className="info-agents-container__item__bodyguard-image"
        />
        <span className="info-agents-container__item__bodyguard-text">
          {agentData.description}
        </span>
      </div>
      <div className="info-agents-container__item__footer">
      <span className="info-agents-container__item__bodyguard-text-price">
        Desde: ${agentData.rate} / {agentData.hours} horas
      </span>
      <button className="info-agents-container__item__button">Contratar</button>
      </div>
    </div>
  );
}

export default Agent;
