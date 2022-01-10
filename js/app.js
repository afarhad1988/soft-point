const btn = document.querySelector(".dark-modeBtn");
const beforeElement = document.querySelector(".switch-save")

btn.addEventListener("click", function () {
	beforeElement.classList.toggle("switch-save:after");
});