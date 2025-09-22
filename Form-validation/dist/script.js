function validateForm() {
  // clear error and success
  let errors = ["nameError", "emailError", "passwordError", "confirmPasswordError"];
  errors.forEach(id => document.getElementById(id).innerText = "");
  document.getElementById("successMessage").innerText = "";

  // reset borders
  ["name", "email", "password", "confirmPassword"].forEach(id => {
    document.getElementById(id).classList.remove("border-red-500", "border-green-500");
  });

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  let valid = true;

  // Name
  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required.";
    document.getElementById("name").classList.add("border-red-500");
    valid = false;
  } else {
    document.getElementById("name").classList.add("border-green-500");
  }

  // Email
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerText = "Enter a valid email.";
    document.getElementById("email").classList.add("border-red-500");
    valid = false;
  } else {
    document.getElementById("email").classList.add("border-green-500");
  }

  // Password
  if (password.length < 6) {
    document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
    document.getElementById("password").classList.add("border-red-500");
    valid = false;
  } else {
    document.getElementById("password").classList.add("border-green-500");
  }

  // Confirm Password
  if (confirmPassword !== password || confirmPassword === "") {
    document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
    document.getElementById("confirmPassword").classList.add("border-red-500");
    valid = false;
  } else {
    document.getElementById("confirmPassword").classList.add("border-green-500");
  }

  // Success
  if (valid) {
    document.getElementById("successMessage").innerText = "Submit success";
  }

  return false; 
}
