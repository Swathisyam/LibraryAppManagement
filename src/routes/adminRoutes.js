const express = require('express');
const adminRouter = express.Router();
const BookData = require('../model/BookData');

function routerAdmin(nav){
    
    adminRouter.get('/',function(req,res){
        res.render('admin',{
            nav,
            title: 'Add Book',
            
        });
    });
    
    adminRouter.post('/',function(req,res){

        // res.send("hey I am added");
        var item = {
            title : req.body.title,
            author: req.body.author,
            onyear: req.body.onyear,
            genre : req.body.genre,
            image : req.body.image
        }
            
        var book = BookData(item);
        book.save();    //saving to database
        res.redirect('/books');
        
    });
    

    return adminRouter;
}

module.exports = routerAdmin;