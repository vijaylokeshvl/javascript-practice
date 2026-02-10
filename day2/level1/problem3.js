let div = document.querySelector("div");

div.addEventListener("mouseover",()=>{
    div.style.backgroundColor = "aqua";
})

div.addEventListener("mouseout",()=>{
    div.style.backgroundColor = "red";
})