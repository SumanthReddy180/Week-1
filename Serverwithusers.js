

const express = require('express');
const app = express();
const fs = require('fs');

// Defining  the path for  the JSON file
const usersFilePath = `${__dirname}/Users_file-1.json`;

const users={
    
        "user1" : {
           "first_name" : "Sumanth",
           "last_name":"Reddy",
           "email":"sumanthreddy@gmail.com"
           
           
        },
        
        "user2" : {
           "first_name" : "Rajesh",
           "last_name":"Reddy",
           "email":"Rajeshreddy@gmail.com"
           
         
        },
        
        "user3" : {
           "first_name" : "Suresh",
           "last_name":"Reddy",
           "email":"sureshreddy@gmail.com"
      
        }
     
 }

// Defining a route to list users
app.get('/listUsers', (req, res) => {
    res.send(users);

});



app.get('/', (req, res) => {
  res.send(`<a href="/listUsers" >Get Users</a>`);
});
// Starting the Express server
const port = 8081;
const server = app.listen(port, () => {
  const { address, port } = server.address();
  console.log(`Server listening at http://${address}:${port}`);
});
