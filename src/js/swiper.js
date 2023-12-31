const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    // slidesPerView: 1,

    loop: false,

    // ДЛЯ ЗМІНИ КУРСОРУ ПРИ ПЕРЕТАСКУВАННІ СЛАЙДУ
    grabCursor: true,
    // ПЕРЕКЛЮЧЕННЯ НА СЛАЙД ПРИ КЛІКУ НА НЬОГО
    slideToClickedSlide: true,
    // УПРАВЛІННЯ КЛАВІАТУРОЮ
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
            slidesPerView: 1,
            spaceBetween: 18,    
    
            breakpoints: {
  
        768: {
            slidesPerView: 2.6,
            spaceBetween: 18,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 18,
        }
    },
  });





