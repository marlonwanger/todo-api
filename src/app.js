import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

import database from './config/database';

const app = express();

app.database = database();

app.use(bodyParser.json());
app.use('/', routes);

export default app;