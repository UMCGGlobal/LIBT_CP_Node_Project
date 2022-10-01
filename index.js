const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');

require('dotenv').config();

const mongoString = process.env.DATABASE_URL
const app = express();
app.use(cors());

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const routes = require('./routes/routes');

app.use('/api', routes)
