let button = document.querySelector("button");
let ul = document.querySelector("ul");
let i = 5
button.addEventListener("click",()=>{
    let li = document.createElement("li");
    li.textContent = `list ${i}`;
    i++;
    ul.appendChild(li);
})