const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const Joi = require('joi');
const app = express();


const routes = require('./routes');

const corsOptions = {
    origin: 'http://localhost'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(routes);

app.listen(3333);