const paginate = require('express-paginate');
const Image = require('../models/image');
exports.getImages = async(req, res, next) =>{
    const [ results, itemCount ] = await Promise.all([
            Image.find({}).limit(req.query.limit).skip(req.skip).lean().exec(),
            Image.count({})
        ]);
    const pageCount = Math.ceil(itemCount / req.query.limit);
      
    res.render('image-list', {
        title:'Gallery',
        images: results,
        pageCount,
        itemCount,
        pages: paginate.getArrayPages(req)(3, pageCount, req.query.page),
        currentPage : req.query.page,
        hasPrevPage: paginate.hasPreviousPages,
        hasNextPage:paginate.hasNextPages(pageCount),
    })  
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