let btns = document.querySelectorAll(".btn");

btns.forEach(btn=>{
    btn.addEventListener("click",function(){
        const action = this.dataset.action;
        if(action==="saved") console.log("saved...")
       else if(action==="delete") console.log("deleted...")
        if(action==="opened") console.log("opening...")
    })
})