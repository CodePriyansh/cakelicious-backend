const express = require('express');
const router = express.Router()

const Product = require("../../models/admin-models/product.model");


exports.addReview = async (request, response) => {
    console.log(request.body);
  
    var product = await Product.findOne({ _id: request.body.pId });
    console.log(product);
  
    product.prodReview.push({
      userId: request.body.userId,
      review: request.body.review,
    });
  
    product.save()
      .then((result) => {
        return response.status(200).json(result);
      })
      .catch((err) => {
        return response.status(500).json(err);
      });
  };


  exports.searchProduct = (request, response) => {
    let regex = new RegExp(request.params.text, "i");
    Product.find()
      .or([
        {
          prodName: regex,
        },
        {
          prodDescription: regex,
        },
        {
          prodDescription: regex,
        },
      ])
      .then((result) => {
        return response.status(200).json(result);
      })
      .catch((err) => {
        console.log(err);
        return response.status(500).json({ message: "Error.." });
      });
  };
  
  exports.getProductByCategory = (request, response) => {
    Product.find({ categoryId: request.params.categoryId })
      .then((result) => {
        return response.status(200).json(result);
      })
      .catch((err) => {
        return response.status(500).json({ message: "internal server error" });
      });
  };
  exports.getProductById = (request, response) => {
    Product.find({ _id: request.params.pId })
      .then((result) => {
        return response.status(200).json(result);
      })
      .catch((err) => {
        return response.status(500).json({ message: "internal server error" });
      });
  };