let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");
let resultMessage = document.querySelector("#resultMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let emailans = emailRegex.test(email.value);
  let passwordans = passwordRegex.test(password.value);

  // ✅ THIS WAS MISSING
  let isValid = true;

  // reset UI
  document.querySelector("#emailError").style.display = "none";
  document.querySelector("#passwordError").style.display = "none";
  resultMessage.textContent = "";

  if (!emailans) {
    document.querySelector("#emailError").textContent = "Email is incorrect";
    document.querySelector("#emailError").style.display = "block";
    isValid = false;
  }

  if (!passwordans) {
    document.querySelector("#passwordError").textContent =
      "Password is incorrect";
    document.querySelector("#passwordError").style.display = "block";
    isValid = false;
  }

  if (isValid) {
    resultMessage.textContent = "Everything is correct ✅";
  }
});
