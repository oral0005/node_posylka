// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const itemRoutes = require('./routes/itemRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Allow cross-origin requests

// Routes
app.use('/api/items', itemRoutes);

module.exports = app;


