

// CAROUSEL
$('.slider').slick({
    arrows: false,
    // centerMode: true,
    // centerPadding: '50px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
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

          

// Burger  croix fin
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




// TEST API

let observer = new IntersectionObserver(function (observables) {
  observables.forEach(function (observable) {
    // L'élément devient visible
    if (observable.intersectionRatio > 0.5) {
      observable.target.classList.remove('not-visible')
      observer.unobserve(observable.target)
      console.log(observables)
    }
  })
}, {
  threshold: [0.5]
});

// On observe nos éléments
let items = document.querySelectorAll('.yeah')
items.forEach(function (item) {
  item.classList.add('not-visible')
  observer.observe(item)
});