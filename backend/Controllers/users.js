import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM Pessoa";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const createUsers = (req, res) => {
  const {nome, idade, cpf} = req.body;
  if (!nome || !idade || !cpf) {
    return res.status(400).json({ message: "Nome, idade e CPF são obrigatórios." });
  }

  const q = "INSERT INTO Pessoa (nome, idade, cpf) VALUES (?, ?, ?)"

  db.query(q, [nome, idade, cpf], (err, data) => {
    if (err){
      console.log("Erro ao criar o usuário");
      return res.json(err);
    } 
    res.status(200).send("Usuário criado com sucesso!")
  })
}

export const updateUser = (req, res) => {
  const {id} = req.body; 
  const {nome, idade, cpf} = req.body;
  

  const q = 'UPDATE Pessoa SET nome = ?, idade = ?, cpf = ? WHERE idusuarios = ?';

  db.query(q, [nome, idade, cpf, id], (err, data) => {
    if (err){
      console.log("Erro ao atualizar o usuário");
      return res.json(err);
    } 
    res.status(200).send("Usuário atualizado com sucesso!")
  })
}

export const deleteUser = (req, res) => {
  const {id} = req.body; 

  const q = 'DELETE FROM Pessoa WHERE idusuarios = ?';

  db.query(q, [id], (err, data) => {
    if (err){
      console.log("Erro ao deletar o usuário");
      return res.json(err);
    } 
    res.status(200).send("Usuário deletado com sucesso!")
  })
}