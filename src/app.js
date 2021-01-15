// eslint-disable-next-line no-unused-vars
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const middlewares = require('./middlewares');

// routes
// const auth = require('./routes/auth');
const routes = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

// MULTER (not working yet)
app.use('/uploads', express.static(`${process.cwd()}/uploads`));

app.use('/api/v1', routes);
// app.use('/auth', auth);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
