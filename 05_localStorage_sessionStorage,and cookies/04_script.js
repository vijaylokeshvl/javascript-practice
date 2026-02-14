// ============================
// 1️⃣ Apply theme ASAP (no flash)
// ============================
(function() {
  const savedTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  document.body.classList.add(savedTheme || systemTheme);
})();

// ============================
// 2️⃣ Function to toggle theme
// ============================
function toggleTheme() {
  const body = document.body;
  const currentTheme = body.classList.contains("dark") ? "dark" : "light";
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  body.classList.replace(currentTheme, nextTheme);   // change class
  localStorage.setItem("theme", nextTheme);          // save to localStorage
}

// ============================
// 3️⃣ Event listener for button
// ============================
document.getElementById("toggleTheme")
        .addEventListener("click", toggleTheme);

// ============================
// 4️⃣ Auto update if system theme changes
// ============================
window.matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", e => {
        // Only apply system theme if user has NOT set a preference
        if (!localStorage.getItem("theme")) {
          document.body.classList.remove("dark", "light");
          const newSystemTheme = e.matches ? "dark" : "light";
          document.body.classList.add(newSystemTheme);
        }
      });
