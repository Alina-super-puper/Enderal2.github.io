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



function showDescription(term, description) {
    document.getElementById("description").innerHTML = 
        "<h2>" + term + "</h2>" + 
        "<p>" + description + "</p>";
}
  
 
  function filterTerms() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const termItems = document.getElementsByClassName("term-item");
  
    for (let i = 0; i < termItems.length; i++) {
        const termText = termItems[i].textContent.toLowerCase();
        if (termText.includes(searchInput)) {
            termItems[i].style.display = "block";
        } else {
            termItems[i].style.display = "none";
        }
    }
  }
  function resetPage() {
      document.getElementById("search").value = ""; 
      const termItems = document.getElementsByClassName("term-item");
      
      for (let i = 0; i < termItems.length; i++) {
          termItems[i].style.display = "block";
      }
  
      document.getElementById("description").innerHTML = "";
  }
  
  const poka3=document.getElementById('out2');
  poka3.addEventListener('click', resetPage)
  const poka34=document.getElementById('out3');
  poka34.addEventListener('click', resetPage)