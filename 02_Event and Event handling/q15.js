let ul = document.querySelector("ul");

ul.addEventListener("click", function(dets){         //dets.target.classList.add("lt");
      dets.target.classList.toggle("lt");           // dets.target.style.textDecoration = "line-through"
});