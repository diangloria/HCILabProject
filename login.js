function validate(){
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    if(!email){
        alert("Please input your email")
    }else if(!email.endsWith("@gmail.com")){
        alert("Email invalid, make sure it ends with @gmail.com")
    }else if(!password){
        alert("Please input your password")
    }else if(isAlphaNum(password)==false){
        alert("Wrong password, make sure it contains 1 alphabet and 1 number")
    }else if(password.length < 8){
        alert("Wrong password, make sure it is at least 8 characters long")
    }else window.location.href = "homepage-afterlogin.html"
}
function isAlphaNum(password){
    var isAlpha = false
    var isNum = false
    for(let i = 0; i < password.length; i++){
        if(isNaN(password[i])){
            isAlpha = true
        }
        else isNum = true
    }
    if(isAlpha == false || isNum == false){
        return false
    }
    return true
}