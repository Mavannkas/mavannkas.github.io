const main=()=>{
    const nav=document.querySelector('.navbar');

    const addShadow=()=>{
        if(window.scrollY>=300){
            console.log(window.scrollY)
            nav.classList.add('shadow-bg');
        }else{
            nav.classList.remove('shadow-bg');
        }
    };

    window.addEventListener('scroll',addShadow);

        $('.team-carousel').slick({
            autoplay: true,
            autoplaySpeed: 3500,
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 4
                    }
                }
            ],
        });

};



document.addEventListener('DOMContentLoaded',()=>{
    document.addEventListener('click',ev=>{
        const navToggler=document.querySelector('.navbar-toggler');
        if(navToggler && !navToggler.classList.contains('collapsed')){
            navToggler.click();
        }
    });
})


document.addEventListener('DOMContentLoaded', main);

