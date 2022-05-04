const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
        
    },
    OccassionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'occassion'
    },
    prodName: {
        type: String,
        required: true
    },
    prodImage1: {
        type: String,
        required: true
    },
    prodImage2: {
        type: String,
        required: true
    },
    prodImage3: {
        type: String,
        required: true
    },
    prodImage4: {
        type: String,
        required: true
    },
    prodPrice: {
        type: Number,
        required: true
    },
    prodDescription: {
        type: String
    },
    flavour: {
        type: String
    },
    prodReview: [
        {
            userId: {
                type: String
            }, review: {
                type: String
            }
        }],
    discount: {
        type: String
    }
    
})

module.exports = mongoose.model('product', productSchema)