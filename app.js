var express = require('express');
var path = require('path');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Mohit_MongoDB:Mongo%40143214@cluster0.1m47d.mongodb.net/cakelisious?retryWrites=true&w=majority")
// mongoose.connect('mongodb+srv://root:vVevJky93l9yzQEL@neha.rvvto.mongodb.net/information?retryWrites=true&w=majority', () => {
//     console.log("Database Connection Stablished")
// });

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
app.listen(port,() =>{
    console.log("Server is running on port: ", port)
})


