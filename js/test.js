const name = localStorage.getItem("names");
const date = localStorage.getItem("date");
const pol = localStorage.getItem("pol");
const userInfo = document.getElementById("user");
userInfo.textContent = ` ${name}`;
const knopka = document.getElementById("knopka");
knopka.addEventListener("click", vihod);

function vihod() {
    localStorage.clear(); 
    window.location.href = "index.html"; 
}

/*Для теста*/
const testic = document.forms.test;
const otvet=document.getElementById("e");
const error1=document.getElementById("er1");
const error2=document.getElementById("er2");
const error3=document.getElementById("er3");
const error4=document.getElementById("er4");
const error5=document.getElementById("er5");
const error6=document.getElementById("er6");
const rezultat = testic.querySelector('[type="submit"]');
testic.addEventListener("submit", (event) =>{
    event.preventDefault();
    let result2=0;
  
  
  if(Number(testusik.vopros1.value)==1){
    result2+=1
    error1.innerText="Правильный ответ"
    error1.classList.add("plus")
  
  }else{
    error1.classList.add("minus")
    error1.innerText = "Неверно. Правильный ответ - Чародейская лихорадка"; 
}
if(Number(testusik.vopros2.value)==1){
    result2+=1
    error2.innerText="Правильный ответ"
    error2.classList.add("plus")
    
  }else{
    error2.classList.add("minus")
    error2.innerText = "Неверно. Правильный ответ - Нерим "; 
}
if(Number(testusik.vopros3.value)==1){
    result2+=1
    error3.innerText="Правильный ответ"
    error3.classList.add("plus")
    
  }else{
    error3.classList.add("minus")
    error3.innerText = "Неверно. Правильный ответ - Арк "; 
}
if(Number(testusik.vopros4.value)==1){
    result2+=1
    error4.innerText="Правильный ответ"
    error4.classList.add("plus")
    
  }else{
    error4.classList.add("minus")
    error4.innerText = "Неверно. Правильный ответ - Чёрные камни "; 
}

if(testic.papa.validity.valid){
    result2+=1
    error5.innerText="Правильный ответ"
    error5.classList.add("plus")
   
  }else{
    error5.classList.add("minus")
    error5.innerText = "Неверно. Правильный ответ - Отец "; 
  }
  if(testic.numinus.validity.valid){
    result2+=1
    error6.innerText="Правильный ответ"
    error6.classList.add("plus")
    
  }else{
    error6.classList.add("minus")
    error6.innerText = "Неверно. Правильный ответ - Нуминос "; 
  }
  testic.papa.disabled = true
testic.numinus.disabled = true
let radioButtons = testic.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.disabled = true;
    });
document.getElementById("zanovo").classList.remove("no");
otvet.innerText= "Вы набрали: "+result2+" из 6"
localStorage.setItem("result2", result2);
document.getElementById("print4").innerText="В последнем тесте вы набрали: "+ result2;
rezultat.disabled = true;
}
)
function ubiraem(){
    testic.papa.disabled = false
    testic.numinus.disabled = false
    let radioButtons = testic.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.disabled = false;
        });
    testusik.reset()
    error1.innerText=""
    error2.innerText=""
    error3.innerText=""
    error4.innerText=""
    error5.innerText=""
    error6.innerText=""
    
    otvet.innerText=""
    
}
const clean=document.getElementById("zanovo");
clean.addEventListener("click", ubiraem)
