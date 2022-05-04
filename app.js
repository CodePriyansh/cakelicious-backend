var express = require('express');
var path = require('path');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Mohit_MongoDB:Mongo%40143214@cluster0.1m47d.mongodb.net/cakelisious?retryWrites=true&w=majority")
var indexRouter = require('./routes/index.route');
var adminRouter = require('./routes/admin.route');
var usersRouter = require('./routes/users.route');
var app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/admin', adminRouter);



const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log("server")
})

module.exports = app;
