require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../back-end/database.js');
const client = require('../front-end/client.js');

const app = express();
// const PORT = 3000;

// var corsOptions = {
//     origin:'https//localhost:3000'
// } 
// app.use(cors(corsOptions));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}))



// app.listen(PORT, () => {
//     console.log(`from app The Server listening on ${PORT}`);
// });

module.exports = app