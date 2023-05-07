import PropTypes from "prop-types";
import React from "react";

const Home = (props) => {
  return (
    <div className="p-3 mb-2 bg-dark text-white contenedor">
      <div className="numeros">
        <i className="far fa-clock "></i>
      </div>
      <div className="numeros">{props.numero6}</div>
      <div className="numeros">{props.numero5}</div>
      <div className="numeros">{props.numero4}</div>
      <div className="numeros">{props.numero3}</div>
      <div className="numeros">{props.numero2}</div>
      <div className="numeros">{props.numero1}</div>
    </div>
  );
};


export default Home;