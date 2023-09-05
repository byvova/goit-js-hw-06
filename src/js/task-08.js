const loginForm = document.querySelector(".login-form");
const submitButton = loginForm.querySelector("button[type='submit']");


loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
    alert("Будь ласка, заповніть всі поля форми.");
    return;
    }

const formData = {
    email: emailInput.value,
    password: passwordInput.value,
};


    console.log(formData);

    loginForm.reset();
});
