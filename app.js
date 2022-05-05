var express = require('express');
var path = require('path');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://CodePriyanshu786:pathak123@mucluster.utw9l.mongodb.net/test-cakelicious?retryWrites=true&w=majority")

var indexRouter = require('./routes/index.route');
var adminRouter = require('./routes/admin.route');
var usersRouter = require('./routes/users.route');
const port = process.env.PORT || 8080
const helmet = require('helmet');
const hpp = require('hpp');
var app = express();
var indexRouter = require('./routes/index.route');
var adminRouter = require('./routes/admin.route');
var usersRouter = require('./routes/users.route');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/admin', adminRouter);
app.listen(port, () => {
    console.log("Server is running on port: ", port)
})


