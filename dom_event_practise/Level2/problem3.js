let lists = document.querySelectorAll("li");
lists.forEach(li=>{
    li.addEventListener("click",()=>{
        li.remove();
    })
})