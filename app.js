const express = require('express');
const app = express();
const promisify = require('es6-promisify');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const routes = require('./routes');
const variables = require('./helpers/variables');
require('./handlers/passport');

// Dot Env
require('dotenv').config({ path: 'variables.env' });

// Mongoose
const LOCAL_DB = process.env.DATABASE;
const REMOTE_DB = require('./helpers/temp');

mongoose.connect(LOCAL_DB);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.log('We have an error with the database: ' + err);
});

// Express session
app.use(session({ secret: process.env.SECRET }));

// Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Setting up views
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// Public folder
app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static(__dirname + '/public'));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Express validator
app.use(expressValidator());

// Locals
app.use((req, res, next) => {
  res.locals.variables = variables;
  res.locals.user = req.user || null;
  next();
});

// Setting up the routes
app.use('/', routes);

const PORT = process.env.PORT || 5000;

// Starting the server
app.listen(PORT, () =>
  console.log('We have a server running on PORT: ' + PORT)
);
