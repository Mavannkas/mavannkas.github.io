const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer_year');
const links = document.querySelectorAll('.nav-mobile > .nav__link');

const handleNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');
}

const handleCurrentYear = () => 
(footerYear.innerText = new Date().getFullYear());





handleCurrentYear();
[navBtn, ...links].forEach(el => el.addEventListener('click', handleNav));