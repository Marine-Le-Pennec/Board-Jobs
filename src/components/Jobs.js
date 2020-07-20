import React from "react";

function Jobs(props) {
  const { title, contractType, country, city } = props;
  return (
    <>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{contractType}&nbsp;&#8211;&nbsp;</span>

          <span>{country}&nbsp;&#8211;&nbsp;</span>
          <span>{city}</span>
        </p>
      </div>
    </>
  );
}
export default Jobs;
