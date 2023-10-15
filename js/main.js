const owl = $('.owl-carousel');
owl.owlCarousel({
  	center: false,
  	loop: true,
  	startPosition: 0,
  	margin: 10,
  	items: 1,
  	responsive : {
	    600: {
	    	items: 3,
	    },
	    800:{
	  		items: 3,
	    },
	    1000:{
	    	items:4,
	    },
	}
  });







const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.header__links')
const menuIcon = document.querySelector('.menu-icon');

navBtn.onclick = function(){
	nav.classList.toggle('nav--mobile');
    menuIcon.classList.toggle('menu-icon-active');

}