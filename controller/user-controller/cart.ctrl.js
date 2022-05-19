const Cart = require("../../models/customer-model/cart.model");
exports.AddToCart = async (request, response) => {
  console.log(request.body);

  var cart = await Cart.findOne({ customerId: request.body.userId });

  if (!cart) {
    cart = new Cart({
      customerId: request.body.userId,
    });
  }

  cart.cartItems.push(request.body.id);

  cart
    .save()
    .then((result) => {
      console.log(result);
      return response.status(200).json({ status: "ok", current_user: result });
    })
    .catch((err) => {
      return response.status(500).json(err);
    });
};

exports.DeleteCartItem = (request, response) => {
  Cart.updateOne(
    { customerId: request.body.userId },
    {
      $pullAll: {
        cartItems: [request.body.id],
      },
    }
  )
    .then((result) => {
      return response.status(200).json({status:'ok',
      current_user:result});
    })
    .catch((err) => {
      return response.status(500).json(err);
    });
};

exports.ViewCart = (request, response) => {
  Cart.findOne({ customerId: request.body.userId })
    .populate("cartItems")
    .then((result) => {
      return response.status(200).json({status:'ok',
      current_user:result});
    })
    .catch((err) => {
      return response.status(500).json(err);
    });
};

exports.DeleteCart = (request, response) => {
  Cart.deleteOne({ customerId: request.body.userId })
    .then((result) => {
      return response.status(200).json({status:'ok',
    current_user:result});
    })
    .catch((err) => {
      return response.status(500).json(err);
    });
};
