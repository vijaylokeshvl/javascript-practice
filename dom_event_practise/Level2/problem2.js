let ul = document.querySelector("ul");
let btn = document.querySelector("button");
i = 4;
btn.addEventListener("click",function(){
const li = document.createElement("li");
i++;
li.textContent = `point ${i}`;
ul.appendChild(li);
})
