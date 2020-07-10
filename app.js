const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'demo'
  });

  connection.connect();

  app.get('/addPost', (req, res) =>{
      const post = {
          message : 'Hello World2'
      }
    connection.query('INSERT INTO posts SET ?', post, (err, rows) =>{
        if(err){
            res.sendStatus(500);
        }else{
            res.end("Insert succesfully");
        }
    });
  });

  app.get('/', (req, res)=>{
    connection.query('SELECT * FROM posts', (err, rows)=>{
        if(err){
            res.sendStatus(500);
        }else{
            res.send(rows);
        }
    });
  });
  
  app.listen(3000, () => console.log("app is running at port 3000"));