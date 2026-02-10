let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // basic validation
    if (inputs[0].value === "" || inputs[1].value === "") {
        alert("Fill all fields");
        return;
    }

    // card
    let card = document.createElement("div");
    card.classList.add("card");

    // name
    let h4 = document.createElement("h4");
    h4.textContent = inputs[0].value;

    // comment
    let p = document.createElement("p");
    p.textContent = inputs[1].value;

    // delete button
    let btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.classList.add("btn");

    btn.addEventListener("click", function () {
        card.remove();
    });

    // append
    card.appendChild(h4);
    card.appendChild(p);
    card.appendChild(btn);
    main.appendChild(card);

    // clear inputs
    inputs.forEach(function (inp) {
        if (inp.type !== "submit") {
            inp.value = "";
        }
    });
});
