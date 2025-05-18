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
  };

  emailjs.send("service_5se6cfm", "template_35sz2h7", templateParams)
    .then((response) => {
      alert("Амжилттай илгээгдлээ!");
      document.getElementById("registerForm").reset();
    })
    .catch((error) => {
      alert("Алдаа гарлаа: " + error.text);
    });
});
