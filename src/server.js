const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var fs = require('fs');
var path = require('path');
const logger = require('morgan');
const app = express();
const { errors } = require('celebrate');


const routes = require('./routes');

const corsOptions = {
    origin: 'http://localhost'
};

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, '../log/access.log'), { flags: 'a' });

app.use(logger('dev', {stream: accessLogStream}));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(routes);
app.use(errors());

app.listen(3333);