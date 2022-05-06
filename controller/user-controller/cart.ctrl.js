
const Cart = require('../../models/customer-model/cart.model')
exports.AddToCart = async (request, response) => {

    console.log(request.body)

    var cart = await Cart.findOne({ customerId: request.body.cusId })

    if (!cart) {
        cart = new Cart({
            customerId: request.body.cusId
        })
    }

    cart.cartItems.push(request.body.pId)

    cart.save().then((result) => {
        return response.status(200).json(result)
    }).catch((err) => {
        return response.status(500).json(err)

    })

}


exports.DeleteCartItem = (request, response) => {

    Cart.updateOne({ customerId: request.body.cusId }, {

        $pullAll: {
            cartItems: [request.body.pId]
        }
    }).then((result) => {
        return response.status(200).json(result)
    }).catch((err) => {
        return response.status(500).json(err)
    })
}

exports.ViewCart = (request, response) => {

    Cart.find({ customerId: request.body.cusId }).populate("cartItems").then((result) => {
        return response.status(200).json(result)
    }).catch((err) => {
        return response.status(500).json(err)

    })
}


exports.DeleteCart = (request, response) => {

    Cart.deleteOne({ customerId: request.body.cusId }).then((result) => {
        return response.status(200).json(result)
    }).catch((err) => {
        return response.status(500).json(err);

    })
}