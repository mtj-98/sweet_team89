const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    // slidesPerView: 1,

    loop: true,
    
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 18,
        },
        768: {
            slidesPerView: 2.6,
        },
        1200: {
            slidesPerView: 4,
        }
    },
  });