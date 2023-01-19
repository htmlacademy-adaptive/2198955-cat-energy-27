let mainNav = document.querySelector('.main-nav');
let mainButtonToggle = document.querySelector('.main-nav__button-toggle');

mainNav.classList.remove('main-nav--nojs');

mainButtonToggle.addEventListener('click', function () {
  if (mainNav.classList.contains('main-nav--closed')){
  mainNav.classList.remove('main-nav--closed');
  mainNav.classList.add('main-nav--opened');
}
else {
  mainNav.classList.add('main-nav--closed');
  mainNav.classList.remove('main-nav--opened');
}
});
