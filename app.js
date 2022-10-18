const express = require('express');
const helmet = require('helmet');
const path = require('path');
const allRouter = require('./routes');

const app = express();

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'pug');

app.use('/', allRouter);

module.exports = app;


