const Image = require('../models/image');
exports.getImages = (req, res, next) =>{
    Image.find().then(images =>{
        res.render('image-list', {
            title:'Gallery',
            images:images
        })
    }).catch(err=> console.log(err))
   
}

exports.getImage = (req, res, next) =>{
    res.render('addImage', {
        title:'Gallery'
    })
}

exports.postImage = (req, res, next) =>{
    const image = new Image({name:req.body.name, image:req.body.image});
    image.save((err, result)=>{
        if(err){
            throw new Error(err);
        }
        res.redirect('/')        
    })
    
}