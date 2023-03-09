const navMain = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
  }
})

const modalCard = document.querySelector('.modal');
const buttonClose = document.querySelector('.modal__close-btn');
const btnCard = document.querySelectorAll('.add-good');

const closeModal = () => {
  buttonClose.addEventListener('click', function () {
    modalCard.classList.remove('modal__opened');
    modalCard.classList.add('modal__closed');
  });
}

const openModal = () => {
  if (modalCard.classList.contains('modal__closed')) {
    modalCard.classList.remove('modal__closed');
    modalCard.classList.add('modal__opened');
  }
  closeModal();
}

btnCard.forEach((btn) => btn.addEventListener('click', openModal))





