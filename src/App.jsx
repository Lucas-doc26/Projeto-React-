import "./App.css"; // Importa os estilos da aplicação
import DataList from "./DataList";
import Crud from "./crud.jsx"; 
import { useState } from "react";

function App() {

  function clicked(pessoa){
    console.log("Pessoa clicou:", pessoa);
  }

  return (
    <>
      <div>
        <DataList clicked={clicked}></DataList>
      </div>
      <div>
        <Crud></Crud>
      </div>
    </>
  );
}

export default App;
