import React from "react";

const Spinner = ({ data }) => {
  return <>{data ? null : <div className="loader">Loading...</div>}</>;
};

export default Spinner;
