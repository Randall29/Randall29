import React from 'react';
import Agent from "./agent";
function Agents(props) {
  
  return (
    <div className="info-agents-container">
      {props.dataAgents.map((agent) => (
        <Agent key={agent.name} agentData={agent}></Agent>
      ))}
    </div>
  );
}

export default Agents;
