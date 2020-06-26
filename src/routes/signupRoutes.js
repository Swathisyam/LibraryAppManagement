const express = require('express');
const signupRouter = express.Router();
const SignupData = require('../model/SignupData');

function routerSignup(navAdmin){
    
    signupRouter.get('/',function(req,res){
        res.render("signup",{
            navAdmin,
            title: 'Library',
        });
    });        

            
    signupRouter.post('/',function(req,res){
        SignupData.find()
        .then(function(signup){
            res.render("addsignup",{
                navAdmin,
                title: "li",
                signup
            });
        });
    });
            
    signupRouter.post("/addsignup",function(req,res){
                        
        var item2 = {
            firstname : req.body.firstname,
            lastname: req.body.lastname,
            mobile : req.body.mobile,
            email : req.body.email,
            passwrd : req.body.passwrd,
            cnfpasswrd : req.body.cnfpasswrd
        }
        
        var signup = SignupData(item2);
            signup.save();    //saving to database
            res.redirect('/login');
           
                
        });
         
    
    return signupRouter;
}

module.exports = routerSignup;