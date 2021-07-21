import Swiper from 'swiper';
//import LocomotiveScroll from 'locomotive-scroll';
//import {gsap} from 'gsap';



// const scroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true,
//   getDirection: true
// });
// console.log(scroll);

// Intersection observer code
// const config = { threshold: 0.4 };
// let observer = new IntersectionObserver(function (entries, self) {
//   let targets = entries.map((entry) => {
//     if (entry.isIntersecting) {
//       self.unobserve(entry.target);
//       return entry.target;
//     }
// });

//   // Call our animation function
//   fadeIn(targets);
// }, config);
// document.querySelectorAll(".box").forEach((box) => {
//   observer.observe(box);
// });
// // Fades in the targets given
// function fadeIn(targets) {
//   // Using GSAP's staggers!
//   gsap.to(targets, {
//       y: -40,
//       opacity: 1,
//       stagger: 0.2
//   });
// }
const swiper = new Swiper('.three-column-swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 50,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.tc-swiper-button-prev',
      prevEl: '.tc-swiper-button-next',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
        768: {
          slidesPerView: 3,
        },
      }
});
const swiper2 = new Swiper('.favorite-swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.fp-swiper-button-next',
    prevEl: '.fp-swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    }
});


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 200) {
      $("header").addClass("sticky");
  } else {
      $("header").removeClass("sticky");
  }
});


// DIRTY Responsive pricing table JS

$( "ul" ).on( "click", "li", function() {
      var pos = $(this).index()+2;
      $("tr").find('td:not(:eq(0))').hide();
      $('td:nth-child('+pos+')').css('display','table-cell');
      $("tr").find('th:not(:eq(0))').hide();
      $('li').removeClass('active');
      $(this).addClass('active');
});

$('.promo-close').click(function() {
    $('.promo').slideUp();
});


$('.filter-start').click(function() {
  $('.filter-holder').toggleClass('show');
});

$('.filter').click(function() {
  let klass= $(this).data('filter');
  if(klass == "all") {
    $('.collection-cards').fadeIn();
    console.log(klass);
  } else {
    let filterKlass = '.' + klass;
    $('.collection-cards').fadeOut();
    $(filterKlass).fadeIn();
    $('.filter').toggleClass('active');
    console.log(filterKlass);
  }
  $('.filter-holder').removeClass('show');
});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);


window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


$('.video').click(function() {
    $('.video-holder').hide().addClass('show').fadeIn();
    console.log($("#video")[0].src)
    $("#video")[0].src += "&autoplay=1";
});

// $('.video').click(function () {
//   //$("#content").hide();
//   $('.video-holder').hide().addClass('show').fadeIn();
//   $("#yt")[0].src += "?autoplay=1";
//   $("#yt").show();
// });
// $('.close-video').click(function () {
//   //$("#content").hide();
//   $('.video-holder').removeClass('show');
// });