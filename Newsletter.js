const form = document.querySelector('form');
const successBox = document.getElementById('successBox');

const handleSubmit = (e) => {
    e.preventDefault(e);

    const errors = [];

    const formData = new FormData(e.target);
    const email = formData.get("email").trim();
    const data = Object.fromEntries(formData);
    console.log(data);

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Enter a valid email.");

const errorBox = document.getElementById('errorBox');
  if (errors.length > 0) {
    errorBox.innerHTML = errors;
  } else {
    errorBox.innerHTML = "";
    successBox.classList.remove('hidden');// Show the success box
  }


    const userEmail = document.getElementById('userEmail');
    userEmail.textContent = email; // Display the email in the confirmation messag


};
form.addEventListener("submit", handleSubmit);