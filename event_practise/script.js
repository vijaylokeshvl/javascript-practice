let main = document.querySelector("#main");
let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");

form.addEventListener("submit",function(dets){
    dets.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");
    
    let Image = document.createElement("div");
    Image.classList.add("Image");

    let img = document.createElement("img");
    img.setAttribute("src",inputs[0].value);

    let h4 = document.createElement("h4")
    h4.textContent = inputs[1].value;

    let p = document.createElement("p")
    p.textContent = inputs[2].value;

    Image.appendChild(img);
    card.appendChild(Image);
    card.appendChild(h4);
    card.appendChild(p);
    main.appendChild(card);
    
    inputs.forEach(function (e) {
        if(e.type!="submit"){
            e.value="";
        }
    })
})