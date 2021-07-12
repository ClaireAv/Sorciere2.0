

// CAROUSEL
$('.slider').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

// Burger  croix
const burger = document.querySelector('.burger');
const rond = document.querySelector('.rond');
const menu = document.querySelector('.menu');

burger.addEventListener ('click', ()=>{
    burger.classList.toggle('active');
});

burger.addEventListener ('click', ()=>{
    rond.classList.toggle('active');
});
burger.addEventListener ('click', ()=>{
    menu.classList.toggle('active');
});

          

// Burger  croix
const burgerf = document.querySelector('.burgerfin');
const rondf = document.querySelector('.rondfin');
const menuf = document.querySelector('.menufin');

burgerf.addEventListener ('click', ()=>{
    burgerf.classList.toggle('active');
});

burgerf.addEventListener ('click', ()=>{
    rondf.classList.toggle('active');
});
burgerf.addEventListener ('click', ()=>{
    menuf.classList.toggle('active');
});