const div = document.querySelector("div");

document.addEventListener("mousemove", (e) => {
  
  div.style.left = e.clientX + "px";
  div.style.top = e.clientY + "px";
});
