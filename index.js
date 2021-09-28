// const sum = (num1, num2) => {

//     return num1 + num2
// }

// const result = sum(2, 3);
// console.log(result)

// //write a file:
// const fs = require('fs')

// const generateFile = () => {
//     try {
//         fs.writeFileSync('Data.txt', 'Hi, this file was generated with node')
//     } catch (err) {
//         console.error(err);
//     }
// }

// generateFile();


// //Server creation 
// const http = require('http');

// http.createServer(function(req, res) {
//     res.write('Server started!');
//     res.end();
// }).listen(8080);

// //reusable module
// const myModule = require('./my-module')

// const date = myModule();

// console.log(date);

//Server created with Express
const express = require('express');

const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello There')
})

app.get('/api/cats', (req, res) => {
    res.send(["British Shorthair", "Ragdoll", "Russian Blue"])
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost: ${port}`)
})