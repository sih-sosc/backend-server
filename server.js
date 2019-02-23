require('rootpath')();
import express from 'express';
const app = express();
import cors from 'cors';
import { urlencoded, json } from 'body-parser';
import jwt from '_helpers/jwt';
import errorHandler from '_helpers/error-handler';

app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./users/users.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});