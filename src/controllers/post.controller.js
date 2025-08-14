const postModel = require('../models/post.model')


async function createPostController(req, res){
     const file = req.file;
     console.log('file recieved', file);
     
}

module.exports = {
     createPostController
}