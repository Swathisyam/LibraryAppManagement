const express = require('express');
const loginRouter = express.Router();
// const LoginData = require('../model/LoginData');


function routerLogin(navAdmin){
    
    loginRouter.get('/',function(req,res){
        res.render("login",{
            navAdmin,
            // nav,
            title: 'Library',
            
        });
    });
    
    // loginRouter.post('/login',function(req,res){
        
    //     // var item3 = {
    //     //     username : req.body.username,
    //     //     password : req.body.password,
            
    //     // }
            
    //     var login = LoginData(item3);
    //     login.save();    //saving to database
    //     res.redirect('/index');
        
    // });
    return loginRouter;
}

module.exports = routerLogin;