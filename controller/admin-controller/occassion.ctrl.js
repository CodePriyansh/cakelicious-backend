const { response } = require("express");
const Occassion = require("../../models/admin-models/occassion.model")
const {Storage} = require("@google-cloud/storage");
const path = require("path");
const request = require('request')
const Gstorage = new Storage({
    keyFilename : "storeimges-firebase-adminsdk-9t7gc-1e1f2e9b45.json"
})
let bucketName = "gs://storeimges.appspot.com"

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

  exports.addOccassion = (request, response, next) => {
  
  uploadFile(path.join("public/images/") + request.file.filename) 

  Occassion.create({
            occName: request.body.occName,
            occImage: "https://firebasestorage.googleapis.com/v0/b/storeimges.appspot.com/o/"+ request.file.filename+"?alt=media&token=hello"
        })
        .then(result => {
            return response.status(201).json(result);
        })
        .catch(err => {
            return response.status(403).json({ message: "Oops! Something went wrong.." });
        });
}

exports.getOccassion = (request, response) => {
    Occassion.find().
    then(results => {
        console.log(results)
            return response.status(200).json(results);
        })
        .catch(err => {
            return response.status(500).json({ message: 'Sever Error' });
        });
}


