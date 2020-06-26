// const express = require('express');
// const editAuthorRouter = express.Router();
// const AuthorData = require('../model/AuthorData');

// function routerAuthorEdit(nav){
    
//     editAuthorRouter.get('/',function(req,res){
//         res.render('editAuthor',{
//             nav,
//             title: 'Edit Author Details',
            
//         });
//     });

//     editAuthorRouter.post('/:id',function(req,res){
//         // const id = req.params.id;
//         BookData.findByIdAndUpdate(req.params.id,
//             // {_id:id},
//            { $set:{

//             name : req.body.name,
//             title : req.body.title,
//             awards : req.body.awards,
//             timeline: req.body.timeline,
//             works : req.body.works,
//             image : req.body.image
                    
//                 }
//            })
//         .then(function(editAuthor){
//             res.render("editAuthor",{
//                 nav,
//                 title: "Edit Author Details",
//                 editAuthor
//             });
//         });
//     });
    
//     editAuthorRouter.post('/',function(req,res){

        
//         var item1 = {
//             name : req.body.name,
//             title : req.body.title,
//             awards : req.body.awards,
//             timeline: req.body.timeline,
//             works : req.body.works,
//             image : req.body.image
//         }
            
//         var author = AuthorData(item1);
//         author.save();    //saving to database
//         res.redirect('/authors');
        
//     });
    

//     return editAuthorRouter;
// }

// module.exports = routerAuthorEdit;