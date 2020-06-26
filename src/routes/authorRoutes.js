const express = require('express');
const authorsRouter = express.Router();
const Authordata = require('../model/Authordata');

function routerAuthors(nav){
    
    authorsRouter.get('/',function(req,res){
        Authordata.find()
            .then(function(authors){
                res.render("authors",{
                    nav,
                    title: 'Authors',
                    authors
            });
           
        });
    });
    
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id: id})
        .then(function(author){
            res.render("author",{
                nav,
                title: 'Authors',
                author
            });
        });
    });

    return  authorsRouter;
}


module.exports = routerAuthors;