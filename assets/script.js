// ------------ DOM ELEMENTS SELECTION ------------
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const inputs = document.querySelectorAll('input');
const agreementCheckbox = document.getElementById('agree');
const submitButton = document.getElementById('submit-btn');

// -------------- VARIABLES ----------------

let username = usernameInput.value;
let password = passwordInput.value;
let isUsernameValid = !username.includes(' ') && username.length >= 4;
let isPasswordValid = !password.includes(username) && password.length >= 8;
let isAgreed = agreementCheckbox.checked;
let isFormValid = isUsernameValid && isPasswordValid && isAgreed;

// -------------- FUNCTIONS ----------------

inputs.forEach(input => {
    input.addEventListener('input', () => {
        username = usernameInput.value;
        password = passwordInput.value;
        isUsernameValid = !username.includes(' ') && username.length >= 4;
        isPasswordValid = !password.includes(username) && password.length >= 8;
        isAgreed = agreementCheckbox.checked;
        isFormValid = isUsernameValid && isPasswordValid && isAgreed;

        if (isFormValid) {
            submitButton.disabled = false;
            submitButton.classList.add('enabled');
            submitButton.classList.remove('disabled');
            console.log("form valid");
                // Reset button position when form becomes valid
                submitButton.style.position = "relative";
                submitButton.style.left = "50%";
                submitButton.style.transform = "translateX(-50%)";
                submitButton.style.top = "0";
        } else {
            submitButton.disabled = true;
            submitButton.classList.add('disabled');
            submitButton.classList.remove('enabled');
            console.log("form invalid");
        }
    });
});

submitButton.addEventListener('mouseover', () => {
    if (isFormValid) {
        submitButton.style.position = "relative";
        submitButton.style.left = "50%";
        submitButton.style.transform = "translateX(-50%)";
        submitButton.style.top = "0";
    } else {
        submitButton.style.position = "absolute";
        submitButton.style.left =
          Math.random() * (window.innerWidth - submitButton.offsetWidth) + "px";
        submitButton.style.top =
          Math.random() * (window.innerHeight - submitButton.offsetHeight) +
          "px";
    }
})