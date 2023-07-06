const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

///////////////////////////////////////
// Tabbed component

tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');
  
    // Guard clause
    if (!clicked) return;
  
    // Remove active classes
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  
    // Activate tab
    clicked.classList.add('operations__tab--active');
  
    // Activate content area
    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add('operations__content--active');
  });

///////////////////////////////////////////
// Project Slides

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if(n > slides.length) {
    slideIndex = 1
  }
  if(n < 1) {
    slideIndex = slides.length
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var slideIndex2 = 1;
showSlides2(slideIndex2);
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}
function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot2");
  if(n > slides.length) {
    slideIndex2 = 1
  }
  if(n < 1) {
    slideIndex2 = slides.length
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2 - 1].style.display = "block";
  dots[slideIndex2 - 1].className += " active";
}

var slideIndex3 = 1;
showSlides3(slideIndex3);
function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}
function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}
function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("dot3");
  if(n > slides.length) {
    slideIndex3 = 1
  }
  if(n < 1) {
    slideIndex3 = slides.length
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex3 - 1].style.display = "block";
  dots[slideIndex3 - 1].className += " active";
}


var slideIndex4 = 1;
showSlides4(slideIndex4);
function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}
function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}
function showSlides4(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides4");
  var dots = document.getElementsByClassName("dot4");
  if(n > slides.length) {
    slideIndex4 = 1
  }
  if(n < 1) {
    slideIndex4 = slides.length
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex4 - 1].style.display = "block";
  dots[slideIndex4 - 1].className += " active";
}


var slideIndex5 = 1;
showSlides5(slideIndex5);
function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}
function currentSlide5(n) {
  showSlides5(slideIndex5 = n);
}
function showSlides5(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides5");
  var dots = document.getElementsByClassName("dot5");
  if(n > slides.length) {
    slideIndex5 = 1
  }
  if(n < 1) {
    slideIndex5 = slides.length
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex5 - 1].style.display = "block";
  dots[slideIndex5 - 1].className += " active";
}


var slideIndex6 = 1;
showSlides6(slideIndex6);
function plusSlides6(n) {
  showSlides6(slideIndex6 += n);
}
function currentSlide6(n) {
  showSlides6(slideIndex6 = n);
}
function showSlides6(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides6");
  var dots = document.getElementsByClassName("dot6");
  if(n > slides.length) {
    slideIndex6 = 1
  }
  if(n < 1) {
    slideIndex6 = slides.length
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex6 - 1].style.display = "block";
  dots[slideIndex6 - 1].className += " active";
}

var slideIndex7 = 1;
showSlides7(slideIndex7);
function plusSlides7(n) {
  showSlides7(slideIndex7 += n);
}
function currentSlide7(n) {
  showSlides7(slideIndex7 = n);
}
function showSlides7(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides7");
  var dots = document.getElementsByClassName("dot7");
  if(n > slides.length) {
    slideIndex7 = 1
  }
  if(n < 1) {
    slideIndex7 = slides.length
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex7 - 1].style.display = "block";
  dots[slideIndex7 - 1].className += " active";
}


var slideIndex8 = 1;
showSlides8(slideIndex8);
function plusSlides8(n) {
  showSlides8(slideIndex8 += n);
}
function currentSlide8(n) {
  showSlides8(slideIndex8 = n);
}
function showSlides8(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides8");
  var dots = document.getElementsByClassName("dot8");
  if(n > slides.length) {
    slideIndex8 = 1
  }
  if(n < 1) {
    slideIndex8 = slides.length
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex8 - 1].style.display = "block";
  dots[slideIndex8 - 1].className += " active";
}


var slideIndex9 = 1;
showSlides9(slideIndex9);
function plusSlides9(n) {
  showSlides9(slideIndex9 += n);
}
function currentSlide9(n) {
  showSlides9(slideIndex9 = n);
}
function showSlides9(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides9");
  var dots = document.getElementsByClassName("dot9");
  if(n > slides.length) {
    slideIndex9 = 1
  }
  if(n < 1) {
    slideIndex9 = slides.length
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex9 - 1].style.display = "block";
  dots[slideIndex9 - 1].className += " active";
}

var slideIndex10 = 1;
showSlides10(slideIndex10);
function plusSlides10(n) {
  showSlides10(slideIndex10 += n);
}
function currentSlide10(n) {
  showSlides10(slideIndex10 = n);
}
function showSlides10(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides10");
  var dots = document.getElementsByClassName("dot10");
  if(n > slides.length) {
    slideIndex10 = 1
  }
  if(n < 1) {
    slideIndex10 = slides.length
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex10 - 1].style.display = "block";
  dots[slideIndex10 - 1].className += " active";
}
