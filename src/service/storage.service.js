const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLICKEY,
    privateKey: process.env.IMAGEKIT_PRIVATEKEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadFile(file, filename) {
    try {
        const response = await imagekit.upload({
            file, 
            fileName: filename,
            folder: "caption-Generator",
        });

        console.log("Image uploaded:", response.url);
        return response;

    } catch (error) {
        console.error("Image upload failed:", error.message);
        throw new Error("Failed to upload image to storage service");
    }
}

module.exports = uploadFile;
