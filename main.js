let loader  = document.querySelector ('.lds-ring')
    window.onload = () => {
      loader.style.display = 'none'
    }
      
      
      document.getElementById("cont1").style.display = "block"; // Show the first card by default

function changeLang(cardNumber) {
  // Hide all cards
  document.querySelectorAll(".cont").forEach(function(cont) {
    cont.style.display = "none";
  });

  // Show the selected card
  document.getElementById("cont" + cardNumber).style.display = "block";
}


// for menu 

let menu = document.querySelector('.menu')
let menuList = document.querySelector('.menu-list')

menu.onClick = function()  {
}
menu.addEventListener('click',()=>{
    menuList.classList.toggle('menu-plus')
    menu.classList.toggle('menuIcon')
})