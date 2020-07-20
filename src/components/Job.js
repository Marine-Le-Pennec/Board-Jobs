import React from "react";

function Job(props) {
  return (
    <div className={props.className}>
      <h2>{props.title}</h2>
      <div>
        <span>{props.contractType}&nbsp;&ndash;&nbsp;</span>
        <span>{props.country}&nbsp;&ndash;&nbsp;</span>
        <span>{props.city}</span>
      </div>
    </div>
  );
}

export default Job;
