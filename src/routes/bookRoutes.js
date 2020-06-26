const express = require('express');
const booksRouter = express.Router();
const BookData = require('../model/BookData');

function routerBooks(nav){
    
    booksRouter.get('/',function(req,res){
        BookData.find()
            .then(function(books){
                res.render("books",{
                    nav,
                    title: 'Books',
                    books
            });
           
        });
    });
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        BookData.findOne({_id: id})
        .then(function(book){
            res.render("book",{
                nav,
                title: 'Books',
                book
                
            });
        });
            
    });

    return booksRouter;
}

module.exports = routerBooks;