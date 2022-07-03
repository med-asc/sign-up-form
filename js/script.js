const submit = document.querySelector("button")
const helpText = document.querySelector(".help");
const pwd = document.querySelector('#password');
const cpwd = document.querySelector('#confirm-password');

function confirmPassword() {
    if (pwd.value != cpwd.value) {
        helpText.textContent = "* Passwords do not match.";
        pwd.classList.add("error");
        cpwd.classList.add("error");
    } else {
        helpText.textContent = "";
        pwd.classList.remove("error");
        cpwd.classList.remove("error");
    }
}

function validateForm(e) {
    if (pwd.value != cpwd.value) {
        e.preventDefault();
    }
}

submit.addEventListener("click", validateForm);
cpwd.addEventListener("keyup", confirmPassword);
pwd.addEventListener("keyup", confirmPassword);