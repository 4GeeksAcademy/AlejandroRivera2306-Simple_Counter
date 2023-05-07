//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import ButtomOne from "./component/buttomOne.jsx";
import ButtomTwo from "./component/buttomTwo.jsx";
import ButtomThree from "./component/buttomThree.jsx";

let numero1 = 0;
let numero2 = 0;
let numero3 = 0;
let numero4 = 0;
let numero5 = 0;
let numero6 = 0;

function actualizarNumeros() {
  if (numero1 < 9) {
    numero1++;
  } else {
    numero1 = 0;
    if (numero2 < 9) {
      numero2++;
    } else {
      numero2 = 0;
      if (numero3 < 9) {
        numero3++;
      } else {
        numero3 = 0;
        if (numero4 < 9) {
          numero4++;
        } else {
          numero4 = 0;
          if (numero5 < 9) {
            numero5++;
          } else {
            numero5 = 0;
            if (numero6 < 9) {
              numero6++;
            } else {
              numero6 = 0;
            }
          }
        }
      }
    }
  }
     
    
  
    ReactDOM.render(
      <Home
        numero1={numero1}
        numero2={numero2}
        numero3={numero3}
        numero4={numero4}
        numero5={numero5}
        numero6={numero6}
      />,
      document.querySelector("#app")
    );
  }


let timeOut;
let reanudar;
  const ButtomContainer = () => {
    return (
      <div className="main">
        <ButtomOne timeOut={timeOut}/>,
        <ButtomTwo reanudar={reanudar}/>
        <ButtomThree reiniciar={reiniciar}/>

      </div>
    );
  };



 timeOut = function detenerFuncion() {
    console.log("Deteniendo función");
    clearInterval(intervalId);
  }
  
 
  let intervalId = setInterval(actualizarNumeros, 1000);
 
  reanudar = function reanudarFuncion() {
    console.log("Reanudando función");
    intervalId = setInterval(actualizarNumeros, 1000);
  }

 let reiniciar;
  reiniciar = function reiniciarNumeros() {
    numero1 = 0-1;
    numero2 = 0;
    numero3 = 0;
    numero4 = 0;
    numero5 = 0;
    numero6 = 0;
    

  }

  ReactDOM.render(<ButtomContainer />, document.querySelector("#buttoms"));


 