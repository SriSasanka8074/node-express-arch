const config = require('../config/config');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const appRoutes = require('../src/routes/app.route');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(cors());
// API router
app.use('/api/app', appRoutes);

app.use('/', (req, res, next) => {
    res.send('<h1> Welcome to Express </h1>');
}).listen(config.port, () => {
    console.log(`Server running on port : ${config.port}`);
});

module.exports = app;