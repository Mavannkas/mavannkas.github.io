const main=()=>{
    const navBtn=document.querySelector(".burger-btn");
    const nav=document.querySelector(".nav");
    const navLinks=document.querySelectorAll('.nav a');
    const navBtnBars=document.querySelector('.burger-btn__bars')
    const allSections=document.querySelectorAll('.section')
    const footerYear=document.querySelector('.footer__year')

    const toggleNav=function(){
        nav.classList.toggle("nav--active")
        navBtnBars.classList.remove("black-bars-color")
    };

    const handleNavItemsAnimation=()=>{
            let delayTime=0;

            navLinks.forEach(item => {
                item.classList.toggle('nav-items-animation');
                item.style.animationDelay=`.${delayTime++}s`;
            })
    };

    const handleObserver = () => {
        const currentSection = window.scrollY;
        allSections.forEach(section => {
            console.log(currentSection)
            if(section.classList.contains('white-section') && section.offsetTop <= currentSection + 60){
                console.log(1)
                navBtnBars.classList.add('black-bars-color');
                
            }else if(!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60){
                navBtnBars.classList.remove('black-bars-color');

            }
        });
    };

    (()=>{
        const year=(new Date()).getFullYear();
        footerYear.innerText=year;
    })();

    window.addEventListener('scroll',handleObserver);

    navBtn.addEventListener('click',()=>{
        toggleNav();
        handleNavItemsAnimation();
    });
    navLinks.forEach(a=>a.addEventListener('click',toggleNav));

    $('.reviews__boxes').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        mobileFirst: true,
        responsive: [{
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }],

    });

}




window.addEventListener('load',main);