import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "9775",
    database: "crud"
});