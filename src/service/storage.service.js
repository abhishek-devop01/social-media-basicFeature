const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLICKEY,
    privateKey : process.env.IMAGEKIT_PRIVATEKEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadFile(file, filename){
     const response = await imagekit.upload({
          file: file,
          filename: filename,
          folder: "caption-Generator"
     })
     return response
}



module.exports = uploadFile