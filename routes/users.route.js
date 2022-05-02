var express = require('express');
var router = express.Router();
const cartController = require('../controller/user-controller/cart.ctrl')
const orderController = require('../controller/user-controller/order.ctrl')
const customerController = require('../controller/user-controller/user.ctrl')
const wishlistController = require('../controller/user-controller/wishlist.ctrl')

// router.post('/sign-up', customerController.Signup)

// router.post('/sign-in', customerController.Signin)

// router.get('/verify-email/:id', customerController.verifyEmail)

// router.post('/login-with-google', customerController.loginWithGoogle)

// router.get('/getProduct', customerController.getProduct)

// router.post('/getProductById', customerController.getProductById)

// // router.post('/verify-email-resend', customerController.resendVerifyEmail)

// router.post('/reset-password', customerController.resetPassword)

// router.post('/verify-otp/:id', customerController.verifyOTP)

// router.post('/search-product', customerController.searchProduct);

// router.post('/profile-update', auth.verifytoken, upload.single("profilePic"), customerController.Profile)

// router.post('/add-to-cart', auth.verifytoken, cartController.AddToCart)

// router.post('/view-cart', auth.verifytoken, cartController.ViewCart)

// router.post('/delete-cart-item', auth.verifytoken, cartController.DeleteCartItem)

// router.post('/delete-cart', auth.verifytoken, cartController.DeleteCart)

// router.post('/add-to-wishlist', auth.verifytoken, wishlistController.AddToWishlist)

// router.post('/view-wishlist', auth.verifytoken, wishlistController.ViewWishlist)

// router.post('/delete-wishlist-item/:itemId', auth.verifytoken, wishlistController.DeleteWishlistItem)

// router.post('/delete-wishlist', auth.verifytoken, wishlistController.DeleteWishlist)

// router.post('/order', auth.verifytoken, orderController.createOrder)

// router.post('/place-order', auth.verifytoken, orderController.PlaceOrder)

// router.post('/place-order-single', auth.verifytoken, orderController.PlaceOrderSingle)

// router.post('/ViewProductByCategory', customerController.getProductByCategory)

module.exports = router;