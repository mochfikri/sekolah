const burgerNav   = document.getElementById('burger-nav');
const menuMobile  = document.getElementById("menu-mobile");
burgerNav.onclick = function(){
  (this).classList.toggle("change");
  menuMobile.classList.toggle("menu-muncul")
}
