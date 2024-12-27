const forma = document.forms.formur;
const testic = document.forms.test;
let rezult = 0;
/*index */
    let test = true;
    forma.addEventListener("submit", (event) => {
    event.preventDefault();
    forma.names.labels[1].innerText = "";
    forma.date.labels[1].innerText = "";
    
    
    let res = "";
    test = true;
    if (forma.names.validity.valid) {
        res += "Логин: " + forma.names.value + `\n`
    }else {
        forma.names.labels[1].innerText = "Неверный ввод.";
        test = false;
    }
    if (forma.date.validity.valid) {
        res += "Дата рождения: " + forma.date.value + `\n`
    }else {
        forma.date.labels[1].innerText = "Неверный ввод.";
       
        
        test = false;
        document.getElementById("names").focus();
        
                 
    }
    res += "Пол: " + forma.pol.value
    if (test) {
        localStorage.setItem("names", forma.names.value);
        localStorage.setItem("date", forma.date.value);
        localStorage.setItem("pol", forma.pol.value);

        window.location.href = "home.html";
        document.getElementById("print").innerText = res

    }
});

