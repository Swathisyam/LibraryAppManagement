
// var mobile = document.getElementById("mobile");
 
// var phnerror = document.getElementById("phnerror");

// var email = document.getElementById("email");
// var mailerror = document.getElementById("mailerror");
var paswrd = document.getElementById("paswrd");
var paswderror = document.getElementById("paswderror");
var confirmPwd = document.getElementById("confirmPwd");
var confirmPawd = document.getElementById("confirmPawd");
var msg = document.getElementById("msg");


    function signup(){

    var regexpmail = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    var regexpmobile = /^([0-9]{3}?)[\ .-]?([0-9]{3})[\ .-]?([0-9]{4})$/;
    
    // Rgeular expression for password
    var regexp1 = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]{3,}$/; 
    var regexp2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}$/;
    var regexp3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%&])[a-zA-Z0-9@#$%&]{8,}$/;


    if (regexpmobile.test(mobile.value)){
        document.getElementById("phnerror").innerHTML= "valid";
        document.getElementById("phnerror").style.color="green"
    
            if (regexpmail.test(email.value)){   
                
                document.getElementById("mailerror").innerHTML= "valid";
                document.getElementById("mailerror").style.color="green";
      
                if(regexp1.test(paswrd.value)){
                    document.getElementById("paswderror").innerHTML = "Weak!! include numbers and special characters";
                    document.getElementById("paswderror").style.color = "black";
                    document.getElementById("msg").style.backgroundColor = " orange";
                    return false;
                }
    
                    if(regexp2.test(paswrd.value)){
                        document.getElementById("paswderror").innerHTML = " Good!!! include special characters";
                        document.getElementById("paswderror").style.color = "black";
                        document.getElementById("msg").style.backgroundColor = " yellow";
                        return false;
                    }

                        if(regexp3.test(paswrd.value)){
                            document.getElementById("paswderror").innerHTML = "Strong password";
                            document.getElementById("paswderror").style.color = "black";
                            document.getElementById("msg").style.backgroundColor = " green";

                            if(paswrd.value == confirmPwd.value){
                                document.getElementById("confirmPawd").innerHTML = "";
                                document.getElementById("confirmPawd").innerHTML = "";
                                return true;
                            }
                            else{
                                document.getElementById("confirmPawd").innerHTML = "Both password should be same";                        
                                return false;
                            }
                        }
                        else{
                            return false;
                        }
                } 
                else{
                    document.getElementById("mailerror").innerHTML="Enter a valid mail address";
                    document.getElementById("mailerror").style.color="red";
                    return false;
                    }
    } 
    else{
            document.getElementById("phnerror").innerHTML="Please enter a valid number";
            document.getElementById("phnerror").style.color="red";
            return false;
    }
}


