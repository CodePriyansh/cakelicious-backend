const Razorpay = require('razorpay');
const Order = require('../../models/customer-model/order.model')
let instance = new Razorpay({ key_id: "rzp_test_Wp8VeLBusO80zT", key_secret: "dSqGhFplITE1YB14GewtVqOM" })
exports.createOrderId = (request, response) => {

    instance.orders.create({
        amount: request.body.amount,
        currency: "INR"
    }, (order, err) => {
        if (err) {
            return response.status(500).json(err)
        }
        response.status(200).json(order)
    })
}
exports.placeOrder = (request, response) => {

    console.log(request.body);

    let order = new Order({
        mobile: request.body.mobile,
        address: request.body.address,
        paymentMethod: request.body.paymentMethod,
        paymentId: request.body.paymentId,
        orderId: request.body.orderId,
        customer: request.body.customer
    })

    for (let i = 0; i < orderedItem.length; i++) {
        order.orderedItem.push({ ProductId: request.body.orderedItem[i].pId, Qty: request.body.orderedItem[i].qty, size: request.body.orderedItem[i].size })
    }

    order.save().then((result) => {
        return response.status(200).json(result)
    }).catch((err) => {
        return response.status(500).json(err)

    })
}

exports.buyNow=(request,response)=>{

    console.log(request.body);

   let order = new Order({
        mobile:request.body.mobile,
        address:request.body.address,
        paymentMethod:request.body.paymentMethod,
        paymentId:request.body.paymentId,
        orderId:request.body.orderId,
        customer:request.body.customer,
        total:request.body.total
    })

    order.orderedItem.push({ProductId:request.body.pId,Qty:request.body.qty,size:request.body.size})
    order.save().then((result)=>{
     return response.status(200).json(result)
    }).catch((err)=>{
        return response.status(500).json(err)
    })


}