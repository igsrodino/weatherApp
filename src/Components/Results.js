import React from 'react';
import './Results.css';

function Results(props) {
  return (
      <div className="Results">
          <span>{props.title}</span>
          <span>{props.value}</span>
      </div>
  );
}

export default Results;
