'use strict';

let str = 'DOCKLANDS ЛОНДОН, ВЕЛИКОБРИТАНИЯ'.toLowerCase();
// alert(str);

/* 
// Swiper-slider
 new Swiper('.top-slider', {

   pagination: {
      el: 'swiper-pagination',
      // Буллеты
      clickable: true
   },

   // Бесконечный слайдер
   loop:true,

   // Автопрокрутка
   // autoplay: {
   //    delay: 3000
   // }
});

new Swiper('.footer-slider', {
   loop: false,
   slidesPerView: 6
});
 */
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const menuLinks = document.querySelectorAll('.header__link');

burger.addEventListener('click', () => {
   menu.classList.toggle('active');
   burger.classList.toggle('active');
});

menuLinks.forEach(link => {
   link.addEventListener('click', () => {
      menu.classList.remove('active');
      burger.classList.remove('active');
   });
});




