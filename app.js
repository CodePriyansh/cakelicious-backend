var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
mmongoose.connect('mongodb+srv://root:vVevJky93l9yzQEL@neha.rvvto.mongodb.net/information?retryWrites=true&w=majority', () => {
    console.log("Database Connection Stablished")
});

var indexRouter = require('./routes/index.route');
var adminRouter = require('./routes/admin.route');
var usersRouter = require('./routes/users.route');
const helmet = require('helmet');
const hpp = require('hpp');
var app = express();
 
const port = process.env.PORT || 8080


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
app.use(helmet())
//HPP puts array parameters in req.query and/or req.body aside and just selects the last parameter value. You add the middleware and you are done.
app.use(hpp())
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/admin', adminRouter);



app.listen(port,() =>{
    console.log("Server is running on port: ", port)
})
