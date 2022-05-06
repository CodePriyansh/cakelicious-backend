const path = require("path");
const Product = require("../../models/admin-models/product.model");
const {Storage} = require("@google-cloud/storage");
const request = require('request')
const Gstorage = new Storage({
    keyFilename : "cake-licious-firebase-adminsdk-tce6e-3c049fc93d.json"
})
let bucketName = "gs://cake-licious.appspot.com"

const uploadFile = async (filename) => {

    await Gstorage.bucket(bucketName).upload(filename, {
   
      gzip: true,
     
      metadata: {
        metadata: {
          firebaseStorageDownloadTokens: "hello"
        }
      },
    });
    console.log(`${filename} uploaded to ${bucketName}.`);
  }
exports.addProduct = (request, response, next) => {

  for(let i=0;i<4;i++){
    console.log(request.files[i].filename)
    uploadFile(path.join("public/images/") + request.files[i].filename); 
  }
     prodImage1="";
     prodImage2="";
     prodImage3="";
     prodImage4="";
    console.log(request.body);
    console.log(request.files);
    Product.create({
        categoryId: request.body.categoryId,
        OccassionId: request.body.occassionId,
        prodName: request.body.prodName,
            prodImage1:  "https://firebasestorage.googleapis.com/v0/b/storeimges.appspot.com/o/"+ request.files[0].filename+"?alt=media&token=hello",
            prodImage2:  "https://firebasestorage.googleapis.com/v0/b/storeimges.appspot.com/o/"+ request.files[1].filename+"?alt=media&token=hello",
            prodImage3:  "https://firebasestorage.googleapis.com/v0/b/storeimges.appspot.com/o/"+ request.files[2].filename+"?alt=media&token=hello",
            prodImage4:  "https://firebasestorage.googleapis.com/v0/b/storeimges.appspot.com/o/"+ request.files[3].filename+"?alt=media&token=hello",
            prodPrice: request.body.prodPrice,
            prodDescription: request.body.prodDescription,
            flavour:request.body.flavour,
            discount:request.body.discount
        })
        .then(result => {
            return response.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            return response.status(403).json({ message: "Oops! Something went wrong.." });
        });
}
exports.getProduct = (request, response) => {
    Product.find().
    then(results => {
            return response.status(200).json(results);
        })
        .catch(err => {
            return response.status(500).json({ message: 'Sever Error' });
        });
}
exports.deleteProduct = (request, response) => {

    Product.deleteOne({ _id: request.body.id })
        .then(result => {
            console.log(result)
            if (result.deletedCount)
                return response.status(200).json({ message: 'success' });
            else
                return response.status(204).json({ message: 'not deleted' });
        })
        .catch(err => {
            console.log(err)
            return response.status(500).json({ message: 'Something went wrong' });
        });
}
exports.searchProduct = (request,response)=>{
    let regex = new RegExp(request.params.text,"i");
    Product.find().or([
      {
        prodName: regex,
      },
      {
        prodDescription: regex
      },
      {
        prodDescription: regex
      }
    
    ]).then(result=>{
      return response.status(200).json(result);
    })
    .catch(err=>{
      console.log(err);
      return response.status(500).json({message: 'Error..'});
    })
  };


  exports.getProductByCategory = (request,response)=>{
    Product.find({categoryId: request.params.categoryId})
    .then(result=>{
       return response.status(200).json(result);
    }).catch(err=>{
       return response.status(500).json({message: 'internal server error'});
    })
 };
