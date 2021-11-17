import React from 'react';
import Agent from "./agent";
function Agents(props) {
  
  return (
    <ul className="info-agents-container">
      {props.dataAgents.map((agent) => (
        <Agent key={agent.name} agentData={agent}></Agent>
      ))}
    </ul>
  );
}

export default Agents;
