let abcd = document.querySelector("#abcd");

window.addEventListener("mousemove", function (dets) {
    abcd.style.left = dets.clientX -200+ "px";
    abcd.style.top = dets.clientY -200+ "px";
});
