const Order = require('../../models/customer-model/order.model')

exports.orderDetail = (request, response) => {
    Order.find().populate('customer').populate('orderedItem.ProductId').exec().
    then(results => {
            return response.status(200).json(results);
        })
        .catch(err => {
            return response.status(500).json(err);
        });
}