require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

const MSG = process.env.GREET_MESSAGE || "Hola Crayola";

app.get('/', (req, res) => {
    console.log(`MSG Constant: ${MSG}`)
    res.send(`MSG Constant: ${MSG}`);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})