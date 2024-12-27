const name = localStorage.getItem("names");
const date = localStorage.getItem("date");
const pol = localStorage.getItem("pol");
const userInfo = document.getElementById("user");
userInfo.textContent = ` ${name}`;
const knopka = document.getElementById("knopka");
knopka.addEventListener("click", vihod);

function vihod() {
    localStorage.clear(); // Очистка localStorage
    window.location.href = "index.html"; // Перенаправление на страницу авторизации
}
        