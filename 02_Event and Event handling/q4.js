let p = document.querySelector("p");

function dbclick(){
    p.style.color = "yellow";
}
p.addEventListener("dblclick",dbclick);
p.removeEventListener("dblclick",dbclick);