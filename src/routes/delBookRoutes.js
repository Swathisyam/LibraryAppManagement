const express = require('express');
const delBookRouter = express.Router();
const BookData = require('../model/BookData');

function routerBookDel(nav){
    
    delBookRouter.get('/',function(req,res){
        res.render('delBook',{
            nav,
            title: 'Delete Book Details',
            
        });
    });

    delBookRouter.post('/:id',function(req,res){
        const id = req.params.id;
        BookData.findOneAndRemove({_id:id})
        .then(function(del){
            res.render("delBook",{
                nav,
                title: "Delete Book Details",
                del
            });
            res.redirect('/books');
        });
    });
    
      

    return delBookRouter;
}

module.exports = routerBookDel;