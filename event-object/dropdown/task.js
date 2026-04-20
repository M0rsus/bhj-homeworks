const listValue = document.querySelector(".dropdown__value");
const list = document.querySelector(".dropdown__list");
const linkArray = Array.from(document.querySelectorAll(".dropdown__link"));

listValue.addEventListener("click", listClick);

for (let i = 0; i < linkArray.length; i++) {
    linkArray[i].addEventListener("click", function(event) {
        event.preventDefault();
        list.classList.remove("dropdown__list_active");
        listValue.textContent = this.textContent;
    });
}

function listClick() {
    list.classList.toggle("dropdown__list_active")
}