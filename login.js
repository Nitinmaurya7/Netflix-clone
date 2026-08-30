const btn = document.querySelector(".input-btn");
let error = document.querySelector(".error");
let input = document.querySelector(".input");

btn.addEventListener("click", ()=>{

const value = input.value.trim();
const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const isNumber = /^[0-9]{10}$/.test(value); 

    if(!value){
    error.innerHTML="Email or mobile number is required";
    }
    else if( !isEmail &&  !isNumber){
    error.innerHTML="Enter a valid email or mobile number";
    }
    else {
        error.innerHTML="";
        input.value = "";
        localStorage.setItem("isLoggedin","true");
        localStorage.setItem("userData", value);
        window.location.href="index.html";

    }
})

