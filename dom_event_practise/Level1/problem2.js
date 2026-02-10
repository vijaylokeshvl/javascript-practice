let box = document.getElementById("box");
let output   = document.getElementById("output");

box.addEventListener("keyup",function(){
    output.textContent = box.value;
})