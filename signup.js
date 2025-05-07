function validate(){
    const username = document.getElementById("username").value
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
    const country=document.getElementById("country").value
    const agreement = document.getElementById("terms")
    console.log(username)
    if(!username){
        alert("Please input your username")
    }else if(username.length < 5){
        alert("Username must be at least 5 characters long")
    }else if(!country){
        alert("You must select at least one country")
    }else if(!email){
        alert("Please input your email")
    }else if(!email.endsWith("@gmail.com")){
        alert("Email mush end with @gmail.com")
    }else if(!password){
        alert("Please input your password")
    }else if(isAlphaNum(password)==false){
        alert("Password must contain 1 alphabet and 1 number")
    }else if(password.length < 8){
        alert("Password must be at least 8 characters long")
    }else if(!agreement.checked){
        alert("You must agree with our terms and conditions")
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