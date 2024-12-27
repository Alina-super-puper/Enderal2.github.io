
function funR() {
   
    if (x < car.length-1) {
      x += 1;}
    document.documentElement.style.setProperty("--el", x*(-1000)+"px");
    document.getElementById("nomber").innerText=x+1 + " слайд из 13";
   }
   function funL() {
    if (x > 0) {
        x -= 1;
      }
      document.documentElement.style.setProperty("--el", x*(-1000)+"px");
      document.getElementById("nomber").innerText=x+1 + " слайд из 13";
   }
    
    
let car = document.getElementsByClassName("def");

let x=0;

const btn = document.getElementById("btn")
btn.addEventListener("click", funL)

const ntb = document.getElementById("ntb")
ntb.addEventListener("click", funR)

const name = localStorage.getItem("names");
const userInfo = document.getElementById("user");
userInfo.textContent = ` ${name}`;
const knopka = document.getElementById("knopka");
knopka.addEventListener("click", vihod);

function vihod() {
    localStorage.clear(); // Очистка localStorage
    window.location.href = "index.html"; // Перенаправление на страницу авторизации
}
        