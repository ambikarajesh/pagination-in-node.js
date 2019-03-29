const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const paginate = require('express-paginate');

const ejs = require('ejs');
const mongoDB_key = require('./keys');
const imageRouter = require('./routes/images');
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(paginate.middleware(2,50));
app.use('/', imageRouter)
mongoose.connect(encodeURI(mongoDB_key)).then(result =>{
    app.listen(3000);
}).catch(err => {
    console.log(err)
})

