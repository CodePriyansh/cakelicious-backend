const { response } = require("express");
const Occassion = require("../../models/admin-models/occassion.model")
const {Storage} = require("@google-cloud/storage");
const path = require("path");
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

  exports.addOccassion = (request, response, next) => {
  
    for(let i=0;i<2;i++){
      console.log(request.files[i].filename)
      uploadFile(path.join("public/images/") + request.files[i].filename);
    }
  Occassion.create({
           
    occDescription: request.body.occDescription,
            occName: request.body.occName,
            occImage:
            "https://firebasestorage.googleapis.com/v0/b/cake-licious.appspot.com/o/" +
            request.files[0].filename +
            "?alt=media&token=hello",
            occBanner:"https://firebasestorage.googleapis.com/v0/b/cake-licious.appspot.com/o/" +
           request.files[1].filename +
           "?alt=media&token=hello",
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


exports.deleteOccassion = (request, response) => {


  Occassion.deleteMany({ _id: request.body.id })
      .then(result => {
          Occassion.deleteMany({ occassionId: request.body.id }).then((result) => {
              console.log(result)
              if (result.deletedCount)
                  return response.status(200).json({ message: 'success' });
              else
                  return response.status(200).json({ message: 'product not deleted' });
          }).catch((err) => {
              return response.status(500).json({ message: 'Something went wrong products not deleted' });
          })

      })
      .catch(err => {
          console.log(err)
          return response.status(500).json({ message: 'Something went wrong products not deleted' });
      });
}