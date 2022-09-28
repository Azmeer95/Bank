document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  if (email === "alif@azmeer.com" && password === "0171") {
    // Upon clicking this btn - user will be redirected to the page/location specified
    window.location.href = "bank.html";
  } else {
    alert("Invalid user.");
  }
});
