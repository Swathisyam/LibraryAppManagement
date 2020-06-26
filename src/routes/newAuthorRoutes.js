const express = require('express');
const newAuthorRouter = express.Router();
const Authordata = require('../model/Authordata');

function routerNewAuthor(nav){
    
    newAuthorRouter.get('/',function(req,res){
        res.render('newAuthor',{
            nav,
            title: 'Add Author',
            
        });
    });
    
    newAuthorRouter.post('/',function(req,res){

        // res.send("hey I am added");
        var item1 = {
            name : req.body.name,
            title : req.body.title,
            awards : req.body.awards,
            timeline: req.body.timeline,
            works : req.body.works,
            image : req.body.image
        }
            
        var author = Authordata(item1);
        author.save();    //saving to database
        res.redirect('/authors');
        
    });
    

    return newAuthorRouter;
}

module.exports = routerNewAuthor;