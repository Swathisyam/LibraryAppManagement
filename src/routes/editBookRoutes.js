const express = require('express');
const editBookRouter = express.Router();
const BookData = require('../model/BookData');

function routerBookEdit(nav){
    
    editBookRouter.get('/',function(req,res){
        res.render('editBook',{
            nav,
            title: 'Edit Book Details',
            
        });
    });

    editBookRouter.post('/:id',function(req,res){
        // const id = req.params.id;
        BookData.findByIdAndUpdate(req.params.id,
            // {_id},
            {$set:{

                title : req.body.title,
                author: req.body.author,
                onyear: req.body.onyear,
                genre : req.body.genre,
                image : req.body.image 
                    
                }
           })
        .then(function(editBook){
            res.render("editBook",{
                nav,
                title: "Edit Book Details",
                editBook
            });
        });
    });
    
    editBookRouter.post('/',function(req,res){

        
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
    

    return editBookRouter;
}

module.exports = routerBookEdit;