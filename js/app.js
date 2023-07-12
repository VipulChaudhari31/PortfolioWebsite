$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });
    
    
    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    
    hamberger.addEventListener('click', function(){
      mobileNav.classList.add('open');  
    });
    
    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');  
    });
    
    });
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

      let progressBar = document.querySelector(".circular-progress");
      let valueContainer = document.querySelector(".value-container");
      
      let progressValue = 0;
      let progressEndValue = 90;
      let speed = 50;
      
      let progress = setInterval(() => {
        progressValue++;
        valueContainer.textContent = `${progressValue}%`;
        progressBar.style.background = `conic-gradient(
            #03010a ${progressValue * 3.6}deg,
            #cadcff ${progressValue * 3.6}deg
        )`;
        if (progressValue == progressEndValue) {
          clearInterval(progress);
        }
      }, speed);

      let progressBar2 = document.querySelector(".circular-progress2");
      let valueContainer2 = document.querySelector(".value-container2");
      
      let progressValue2 = 0;
      let progressEndValue2 = 70;
      let speed2 = 50;
      
      let progress2 = setInterval(() => {
        progressValue2++;
        valueContainer2.textContent = `${progressValue2}%`;
        progressBar2.style.background = `conic-gradient(
            #03010a ${progressValue2 * 3.6}deg,
            #cadcff ${progressValue2 * 3.6}deg
        )`;
        if (progressValue2 == progressEndValue2) {
          clearInterval(progress2);
        }
      }, speed2);

      let progressBar3 = document.querySelector(".circular-progress3");
      let valueContainer3 = document.querySelector(".value-container3");
      
      let progressValue3 = 0;
      let progressEndValue3 = 40;
      let speed3 = 50;
      
      let progress3 = setInterval(() => {
        progressValue3++;
        valueContainer3.textContent = `${progressValue3}%`;
        progressBar3.style.background = `conic-gradient(
            #03010a ${progressValue3 * 3.6}deg,
            #cadcff ${progressValue3 * 3.6}deg
        )`;
        if (progressValue3 == progressEndValue3) {
          clearInterval(progress3);
        }
      }, speed3);

      let progressBar4 = document.querySelector(".circular-progress4");
      let valueContainer4 = document.querySelector(".value-container4");
      
      let progressValue4 = 0;
      let progressEndValue4 = 50;
      let speed4 = 50;
      
      let progress4 = setInterval(() => {
        progressValue4++;
        valueContainer4.textContent = `${progressValue4}%`;
        progressBar4.style.background = `conic-gradient(
            #03010a ${progressValue4 * 3.6}deg,
            #cadcff ${progressValue4 * 3.6}deg
        )`;
        if (progressValue4 == progressEndValue4) {
          clearInterval(progress4);
        }
      }, speed4);
      
