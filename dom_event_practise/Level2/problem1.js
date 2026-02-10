let btns = document.querySelectorAll(".btn");
let inp = document.querySelector("input")
let i = 0;
btns.forEach(btn=>{
    btn.addEventListener("click",function(){
        const action = this.dataset.action;
        if(action==="+"){
           i = i+1;
           inp.value = i;

        }
        else if(action==="-"){
            i = i-1;
              inp.value = i;
        }
        else if(action==="0"){
             i =0
              inp.value = i;
        }
    })
});