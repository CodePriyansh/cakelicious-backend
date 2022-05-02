const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    mobile: {
        type: String,
        trim: true,
        min: 10,
        max: 10
    },
    address: {
        type: String,
    },
    paymentMethod: {
        type: String,
        default: "cash on delivery"
    },

    paymentId: {
        type: String
    },
    orderId: {
        type: String
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer'
    },
    orderedItem: [
        {
            ProductId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'product'
            }
            ,
            Qty: {
                type: String,
                default: 1
            },
            size: {
                type: String,
                default: "1"
            }
        }
    ],
    orderedAt: {
        type: Date,
        default: new Date().getDate()
    },
    orderStatus: {
        type: String,
        default: "pending"
    },
    total: {
        type: String
    }
})

module.exports = mongoose.model("orders", orderSchema)