let form = document.querySelector("form");
let input = document.querySelectorAll("input");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name = input[0].value;
    let password = input[1].value;
    if(name===""){
        alert("name is required");
    }
    if(password.length<6){
        alert("password must be at least 6 characters");
    }
})