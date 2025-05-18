emailjs.init("b5fimnsFG6GN7r1tv"); // ← PUBLIC KEY

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  const templateParams = {
    firstName,
    lastName,
    phone,
    email,
  }: