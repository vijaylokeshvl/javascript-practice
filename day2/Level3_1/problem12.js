let btn = document.getElementById("openBtn");
let model = document.querySelector(".model");
let  closebBtn = document.querySelector(".close");

btn.addEventListener("click",function(){
    model.style.display = "block";
})

closebBtn.addEventListener("click",function(){
    model.style.display = "none";
})

window.addEventListener("click",function(e){
    if(e.target===model){
            model.style.display = "none";
    }
})