const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = require('./database/db');
var cors = require('cors');
const article = require('./routes/article');
const infographics = require('./routes/infographics');
// Database connection
db();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/', article);
app.use('/infographics', infographics);

// app.get('/', (req, res) => {
//   res.status(200).json('welcome to sri community');
// });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App is running on port ${port}`));
