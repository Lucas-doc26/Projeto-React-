import React, { useEffect, useState } from "react";

const DataList = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8800/usuarios")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="container-datalist">
      <div>
        <h1>Lista de Usuários</h1>
      </div>
      <ul className="list">
        {data.map((pessoa) => (
          <li key={pessoa.idusuarios} className="li-list">
            Nome: {pessoa.nome}<br />
            Idade: {pessoa.idade}<br />
            CPF: {pessoa.cpf}<br />
            <button className="btn-list" 
            onClick={() => props.clicked(pessoa)}>
            Mais detalhes
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList
