import "./App.css"; // Importa os estilos da aplicação
import DataList from "./DataList";
import Crud from "./crud.jsx"; 
import Update from "./update.jsx";
import { useState } from "react";

function App(){

  function clicked(pessoa){
    console.log("Pessoa cliclou:", pessoa)
  }
  return (
    <div className="container">
      <div className="left">
        <DataList clicked={clicked} />
      </div>
      <div className="right">
        <div className="right">
          <Crud />
        </div>
        <div className="right">
          <Update />
        </div>
      </div>
      
    </div>
  );
}
export default App