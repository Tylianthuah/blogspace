import mysql from "mysql";

export const db = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"Tylian#123",
        database:"blogspace" 
    }
)