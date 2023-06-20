// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },

    
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },


//     // slidesPerView: 1,

//     loop: false,

//     // ДЛЯ ЗМІНИ КУРСОРУ ПРИ ПЕРЕТАСКУВАННІ СЛАЙДУ
//     grabCursor: true,
//     // ПЕРЕКЛЮЧЕННЯ НА СЛАЙД ПРИ КЛІКУ НА НЬОГО
//     slideToClickedSlide: true,
//     // УПРАВЛІННЯ КЛАВІАТУРОЮ
//     keyboard: {
//         enabled: true,
//         onlyInViewport: true,
//         pageUpDown: true,
//     },
    
//     breakpoints: {
//         320: {
//             slidesPerView: 1,
//             spaceBetween: 18,
//         },
//         768: {
//             slidesPerView: 2.6,
//             spaceBetween: 18,
//         },
//         1200: {
//             slidesPerView: 4,
//             spaceBetween: 18,
//         }
//     },
//   });








const reviewsSwiper = new Swiper('.slide-container', {
    slidesPerView: 1,
    // slidesPerGroup: 2,
    spaceBetween: 28,
    // centerInsufficientSlides: true,
    // centeredSlides: true,
    // centeredSlidesBounds: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 28,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });





  
//   var swiper = new Swiper('.mySwiper', {
//     slidesPerView: 1,
//     spaceBetween: 18,
//     width: 335,
//     loop: false,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     breakpoints: {
//       768: {
//         slidesPerView: 2,
//         spaceBetween: 18,
//         width: 559,
//       },
//       1200: {
//         slidesPerView: 4,
//         spaceBetween: 18,
//         width: 1136,
//       },
//     },
//   });