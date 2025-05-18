  emailjs.init("b5fimnsFG6GN7r1tv");

    document.getElementById("registerForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const templateParams = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
      };

      emailjs.send("service_5se6cfm", "template_2ksog6f", templateParams)
        .then((response) => {
          alert("Амжилттай илгээгдлээ!");
          document.getElementById("registerForm").reset();
        })
        .catch((error) => {
          alert("Алдаа гарлаа: " + error.text);
        });
    });