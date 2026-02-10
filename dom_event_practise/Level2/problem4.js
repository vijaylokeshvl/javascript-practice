let inps = document.querySelectorAll("input");
let form =  document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
   

    inps.forEach(input => {
        if(!input.value){
            alert("Fill all fields!");
        }
    });
});
