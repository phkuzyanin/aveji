const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.header__links')
const menuIcon = document.querySelector('.menu-icon');

navBtn.onclick = function(){
	nav.classList.toggle('nav--mobile');
    menuIcon.classList.toggle('menu-icon-active');

}