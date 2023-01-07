const menuBtn = document.querySelector('.hamburger-icon');
const mobileNav = document.querySelector('.mobile-nav');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen){
    menuBtn.classList.add('menu-btn--opened');
    mobileNav.classList.toggle('mobile-nav--opened');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('menu-btn--opened');
    mobileNav.classList.toggle('mobile-nav--opened');
    menuOpen = false;
  }
});
