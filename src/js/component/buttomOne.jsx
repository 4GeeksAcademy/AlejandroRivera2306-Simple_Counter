import PropTypes from "prop-types";
import React from "react";

const ButtomOne = (props) => {
  return (
   
    <button type="button" className="btn btn-primary btn-lg botones-varios" onClick={props.timeOut}> PAUSA </button>
   
  
  );
};


export default ButtomOne;