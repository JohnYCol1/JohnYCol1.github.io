

(function () {
    "use strict";
  
    // define variables
    var items = document.querySelectorAll(".timeline li");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  })();




let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}

// let next = document.querySelector('.next');
// let prev = document.querySelector('.prev');
// let slider = document.querySelector('.slider');

// next.addEventListener('click', function(){
//     let slides = document.querySelectorAll('.slides');
//     slider.appendChild(slides[0]);
// })
// prev.addEventListener('click', function(){
//     let slides = document.querySelectorAll('.slides');
//     slider.prepend(slides[slides.length-1]);
// })

// let slides = document.querySelectorAll(".slides2 img");
// let slideIndex = 0;
// let intervalId = null;

// document.addEventListener("DOMContentLoaded", initializeSlider);

// function initializeSlider(){
//   if(slides.length>0){
//     slides[slideIndex].classList.add("displaySlide");
//   }
// }

// function showSlide(index){

//   if(index >= slides.length){
//     slideIndex = 0;
//   }

//   else if(index < 0){
//     slideIndex = slides.length - 1;
//   }

//   slides.forEach(slide => {
//     slide.classList.remove("displaySlide")
//   });
//   slides[slideIndex].classList.add("displaySlide");
// }

// function prevSlide() {
//   clearInterval(intervalId);
//   slideIndex--;
//   showSlide(slideIndex)

// }
// function nextSlide(){
//   slideIndex++;
//   showSlide(slideIndex)
// }

// (function () {
//     "use strict";
  
//     // define variables
//     var items = document.querySelectorAll(".timeline li");
  
//     // check if an element is in viewport
//     // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
//     function isElementInViewport(el) {
//       var rect = el.getBoundingClientRect();
//       return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <=
//           (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//       );
//     }
  
//     function callbackFunc() {
//       for (var i = 0; i < items.length; i++) {
//         if (isElementInViewport(items[i])) {
//           items[i].classList.add("in-view");
//         }
//       }
//     }
  
//     // listen for events
//     window.addEventListener("load", callbackFunc);
//     window.addEventListener("resize", callbackFunc);
//     window.addEventListener("scroll", callbackFunc);
//   })();
  
let sidemenu = document.getElementById("sidemenu")

function openmenu(){
  sidemenu.style.right = "0";
}
function closemenu(){
  sidemenu.style.right = "-200px";
}

var typed = new Typed(".text", {
  strings: ["Finance" , "Commerce" , "Web Development"],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});

const  contactForm = document.getElementById("contact-form"),
       contactMessage = document.getElementById("email")

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publickey
    emailjs.sendForm('service_f5x7ahq','template_qz38kjz','#contact-form','XDCy-wm-zgAxUN44K').then(() => {
        // Show sent message
        contactMessage.textContent =  "Message sent successfully ✅"

        // Clear input fields
        contactForm.reset()
    }, () => {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })  
}

contactForm.addEventListener("submit", sendEmail)

// Progress Bar

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add(`progress`)
    }
  })
})

let progressline = document.querySelectorAll(".bar .progress-line")
progressline.forEach((el) => observer.observe(el))

const observer_path = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('_90')){
        entry.target.classList.add(`path-${1}`)
      } else if (entry.target.classList.contains('_40')){
        entry.target.classList.add(`path-${2}`)
      } else if (entry.target.classList.contains('_70')){
        entry.target.classList.add(`path-${3}`)
      } else {
        entry.target.classList.add(`path-${4}`)
      }
    }
  })
});

// lundev

let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    
    let active = 3;
    function loadShow(){
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        for(var i = active + 1; i < items.length; i++){
            stt++;
            items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(var i = active - 1; i >= 0; i--){
            stt++;
            items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
    loadShow();
    next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    }

let slides = document.querySelectorAll(".slides2 img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
  if(slides.length>0){
    slides[slideIndex].classList.add("displaySlide");
  }
}

function showSlide(index){

  if(index >= slides.length){
    slideIndex = 0;
  }

  else if(index < 0){
    slideIndex = slides.length - 1;
  }

  slides.forEach(slide => {
    slide.classList.remove("displaySlide")
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex)

}
function nextSlide(){
  slideIndex++;
  showSlide(slideIndex)
}