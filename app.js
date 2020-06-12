// APP CONFIG
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');

// DATABASE
const config = require('./config/database');

mongoose.connect(config.database, {
    promiseLibrary: require('bluebird'),
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to ' + config.database))
.catch((err) => console.log('Database error: ' + err));

// APP CONFIG
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

// TODO: Remove later once the front end is implemented (or SSR ... ?)
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// ROUTES
const indexRoute = require('./routes/index');
const adminRoute = require('./routes/admin');
const blogRoute = require('./routes/blog');
const profileRoute = require('./routes/profile');
const projectRoute = require('./routes/project');

app.use('/api', indexRoute);
app.use('/api/admin', adminRoute);
app.use('/api/blog', blogRoute);
app.use('/api/profiles', profileRoute);
app.use('/api/projects', projectRoute);

// EXPORT
module.exports = app;