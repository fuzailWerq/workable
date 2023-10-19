function validation(event) {
  event.preventDefault();
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log(fname);
  console.log(lname);
  console.log(email);
  console.log(password);
  if (
    fname.trim() === "" ||
    lname.trim() === "" ||
    email.trim() === "" ||
    password.trim() === ""
  ) {
    console.log("plss fill the form");
    alert("plss fill all the value");
  } else {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      alert("Invalid email address");
    } else {
      document.getElementById("success").style.display = "block";
      setTimeout(() => {
        document.getElementById("success").style.display = "none";
      }, 3000);
    }
  }

  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}
