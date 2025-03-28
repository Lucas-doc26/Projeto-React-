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

  const deleteUser = (id) => {
    if (!window.confirm("Tem certeza que deseja excluir este usuário?")) return;
    fetch(`http://localhost:8800/usuarios/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      if (!res.ok) {
        return res.json().then((error) => {
          throw new Error(error.message);
        });
      }
      return res.json();
    })
    .then((response) => {
      console.log("Usuário deletado:", response);
      setData((prevData) => prevData.filter((pessoa) => pessoa.id !== id));
    })
    .catch((err) => console.error("Erro ao excluir usuário:", err));
  };


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
            <div className="div-btn">
            <button
              className="btn-delete"
              onClick={() => deleteUser(pessoa.idusuarios)}
            >
              Excluir
            </button>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList
