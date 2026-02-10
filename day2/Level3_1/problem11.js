let ul = document.querySelector("ul");

ul.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.remove();
    }
})