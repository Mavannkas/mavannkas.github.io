const hamburgerButton = document.querySelector('.hamburger');
const navClose = document.querySelector('.nav__list-close');
const mobileMenu = document.querySelector('.nav__list--mobile');

const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('show');
}

[hamburgerButton, navClose].forEach( el => el.addEventListener('click', toggleMobileMenu));