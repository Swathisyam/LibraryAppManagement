// const express = require('express');
// const signRouter = express.Router();
// const SignupData = require('../model/SignupData');


// function routerSign(nav){
    
//     signRouter.get('/',function(req,res){
//         SignupData.find()
//             .then(function(signup){
//                 res.render("signup",{
//                     nav,
//                     // title: 'Books',
//                     signup
//             });
           
//         });
//     });
    
//     // signRouter.get('/:id',function(req,res){
//     //     const id = req.params.id;
//     //     SignData.findOne({_id: id})
//     //     .then(function(book){
//     //         res.render("book",{
//     //             nav,
//     //             title: 'Books',
//     //             book
                
//     //         });
//     //     });
            
//     // });

//     return signRouter;
// }

// module.exports = routerSign;