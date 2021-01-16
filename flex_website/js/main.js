
const main=()=>{
    const navBtn=document.querySelector(".burger-btn");
    const nav=document.querySelector(".nav");
    const navLinks=document.querySelectorAll('.nav a');

    const toggleNav=function(){
        nav.classList.toggle("nav--active")
    };

    navBtn.addEventListener('click',toggleNav);
    
    navLinks.forEach(a=>a.addEventListener('click',toggleNav))

}




window.addEventListener('load',main);