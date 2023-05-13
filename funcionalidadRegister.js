const button = document.getElementById("darkMode");
const register = document.getElementById("register");
const form = document.getElementById("form");
const btnRegister = document.getElementById("btnRegister");
const btnReset = document.getElementById("btnReset");

var oscuro = true;

button.addEventListener("click", function () {
    register.classList.toggle("bg-gradient-light");
    form.classList.toggle("bg-light-custom");
    form.classList.toggle("text-dark");
    btnRegister.classList.toggle("btn-outline-danger")
    btnReset.classList.toggle("btn-outline-info")
    btnRegister.classList.toggle("btn-danger")
    btnReset.classList.toggle("btn-info")
    if (oscuro) {
        button.innerHTML = "Dark"
    } else {
        button.innerHTML = "Light"
    };
    oscuro = !oscuro;
}
);

