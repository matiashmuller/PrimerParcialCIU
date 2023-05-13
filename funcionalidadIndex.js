
const button = document.getElementById("darkMode");
const body = document.body;
const titulo = document.getElementById("titulo");
const topic = document.getElementById("topicArt")
const details = document.getElementById("detailsArt")

var oscuro = true;

button.addEventListener("click", function() {
     body.classList.toggle("bg-light");
     titulo.classList.toggle("bg-gradient-light");
     topic.classList.toggle("bg-gradient-light");
     details.classList.toggle("bg-gradient-light");
     if (oscuro){
          button.innerHTML = "Dark"
     } else {
          button.innerHTML = "Light"
     };
     oscuro = !oscuro;
}
);