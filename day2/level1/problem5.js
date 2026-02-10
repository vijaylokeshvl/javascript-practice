let p = document.querySelector("p");

window.addEventListener("keyup",function(dets){
    p.textContent = dets.key;
})