const toggle = document.querySelector("#dark-light-toggle"); 
toggle.addEventListener("click",darkMode); 

function darkMode(){ 
    var rootElement = document.body;
  rootElement.classList.toggle("dark-mode");

}
