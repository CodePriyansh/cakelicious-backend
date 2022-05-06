var express = require('express');
var path = require('path');
const mongoose = require('mongoose');
const cors = require('cors')
mongoose.connect("mongodb+srv://CodePriyanshu786:pathak123@mucluster.utw9l.mongodb.net/test-cakelicious?retryWrites=true&w=majority");
const port = process.env.PORT || 3000
// const helmet = require('helmet');
// const hpp = require('hpp');
var app = express();
app.use(cors());
// admin's routerse import 
var adminRouter = require('./routes/admin/admin.route');
var categoryRouter = require('./routes/admin/category.route');
var customerListRouter = require('./routes/admin/customerList.route');
var adminProductRouter = require('./routes/admin/product.route');
var feedbackRouter = require('./routes/admin/feedback.route');
var occassionRouter = require('./routes/admin/occassion.route');
var orderHistoryRouter = require('./routes/admin/orderHistory.route');
var supportRouter = require('./routes/admin/support.route');

// customer side routes import
var userRouter = require('./routes/customer/customer.route');
var cartRouter = require('./routes/customer/cart.route');
var productRouter = require('./routes/customer/product.route');
var orderController = require('./routes/customer/order.route');
var wishlistRouter = require('./routes/customer/wishlist.route');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// admin side routes
app.use('/admin', adminRouter);
app.use('/category', categoryRouter);
app.use('/customerList', customerListRouter);
app.use('/feedback', feedbackRouter);
app.use('/occassion', occassionRouter);
app.use('/order-admin', orderHistoryRouter);
app.use('/admin-product', adminProductRouter);
app.use('/support-admin', supportRouter);

// user side Routes
app.use('/customer', userRouter);
app.use('/cart', cartRouter);
app.use('/order', orderController);
app.use('/product', productRouter);
app.use('/wishlist', wishlistRouter);

app.listen(port, () => {
    console.log("Server is running on port: ", port)
})


