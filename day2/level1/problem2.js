let inps = document.querySelector("input");
let p = document.querySelector("p");

inps.addEventListener("keyup",(dets)=>{
     p.textContent = inps.value;
})