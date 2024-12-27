const name = localStorage.getItem("names");
const date = localStorage.getItem("date");
const pol = localStorage.getItem("pol");
const res= localStorage.getItem("result2")
const userInfo = document.getElementById("user");
userInfo.textContent = ` ${name}`;
const knopka = document.getElementById("knopka");
knopka.addEventListener("click", vihod);
document.getElementById("print").innerText = "Логин: " + name
document.getElementById("print2").innerText = "Дата рождения: " + date
document.getElementById("print3").innerText = "Пол: " + pol

if (res !== null) {
    document.getElementById("print3").innerText = "В последнем тесте вы набрали: " + res
} else {
    document.getElementById("print3").innerText =  "Вы ещё не проходили тест.";
}

function vihod() {
    localStorage.clear(); 
    window.location.href = "index.html"; 
}