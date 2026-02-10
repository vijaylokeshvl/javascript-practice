let btns = document.querySelectorAll(".btn");
let inps = document.querySelector("input");
let i = 0;
btns.forEach(btn=>{
    btn.addEventListener("click",()=>{
        const action = btn.dataset.action;
        if(action==="inc")i++;
        else if(action==="dec")i--;
        else if(action==="reset")i =0;
        inps.value =i;
    })
})