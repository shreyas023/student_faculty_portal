// const a = document.querySelector(".a")

// console.log(a.textContent)

// projectName = a.textContent

// const heading = document.querySelector(".heading")

// heading.textContent = "hkjh"




var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

function register() {

    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)"
    Indicator.style.transform = "translateX(110px)"
}
function login() {

    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)"
    Indicator.style.transform = "translateX(0px)"
}




