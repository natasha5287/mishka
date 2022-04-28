var navMain = document.querySelector('.nav');
var navToggle = document.querySelector('.nav__toggle');



navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
  }
})

let buttonCart = document.querySelector('.promo__button');
let catalogCart = document.querySelector('.product__button');
let modalCart = document.querySelector('.modal');

buttonCart.addEventListener('click', function() {
  if(modalCart.classList.contains('modal__closed')) {
    modalCart.classList.remove('modal__closed');
    modalCart.classList.add('modal__opened');
  }
})

catalogCart.addEventListener('click', function() {
  if(modalCart.classList.contains('modal__closed')) {
    modalCart.classList.remove('modal__closed');
    modalCart.classList.add('modal__opened');
  }
})
