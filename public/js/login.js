var paswdmsg = document.getElementById("paswdmsg");


function login(){
    var regexppaswd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%&])[a-zA-Z0-9@#$%&]{8,}$/;

    if (regexppaswd.test(passwrd.value)){
        // document.getElementById("paswdmsg").innerHTML= "Password is Correct";
        // document.getElementById("paswdmsg").style.color="Green";
        return true;
        } 
    else{
        document.getElementById("paswdmsg").innerHTML="Incorrect Password";
        document.getElementById("paswdmsg").style.color="red";
        
        return false;
        }


}