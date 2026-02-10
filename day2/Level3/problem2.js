const modal = document.getElementById("myModal");
const btn = document.getElementById("openBtn");
const closeBtn = document.querySelector(".close");

// Open modal when button clicked
btn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal when clicking the ×
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the modal box
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
