import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import logger from 'morgan';
const app = express();
import { errors } from 'celebrate';


import routes from './routes.js';

const corsOptions = {
    origin: 'http://localhost'
};
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, '../log/access.log'), { flags: 'a' });

app.use(logger('dev', {stream: accessLogStream}));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(routes);
app.use(errors());

import database from './Models/Conn/dbconn.js';
(async () => {
    await database.sync();
})();

app.listen(3333);