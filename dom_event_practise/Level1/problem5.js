let h4 = document.querySelector("h4");

window.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    h4.textContent = "You pressed: Space";
  } else {
    h4.textContent = `You pressed: ${e.key}`;
  }
});
