
const main=()=>{
    const navBtn=document.querySelector(".burger-btn");
    const nav=document.querySelector(".nav");
    const navLinks=document.querySelectorAll('.nav a');

    const toggleNav=function(){
        nav.classList.toggle("nav--active")
    };
    const handleNavItemsAnimation=()=>{
            let delayTime=0;

            navLinks.forEach(item => {
                item.classList.toggle('nav-items-animation');
                item.style.animationDelay=`.${delayTime++}s`;
            })
    };

    navBtn.addEventListener('click',()=>{
        toggleNav();
        handleNavItemsAnimation();
    });
    navLinks.forEach(a=>a.addEventListener('click',toggleNav));

}




window.addEventListener('load',main);