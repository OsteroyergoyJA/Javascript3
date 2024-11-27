/*

let slideIndex = 1;



showSlides(slideIndex);

let prevButton = document.getElementById("prev"); // assuming you have a previous button with id="prev"
let nextButton = document.getElementById("next"); // assuming you have a next button with id="next"

prevButton.addEventListener("click", function() {
    plusSlides(-1);
});

nextButton.addEventListener("click", function() {
    plusSlides(1);
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
    }

    console.log(slideIndex)

    */
   
    let slideIndex = 1;
showSlides(slideIndex);

// Previous and next buttons
document.getElementById("prev").addEventListener("click", function() {
    plusSlides(-1);
});

document.getElementById("next").addEventListener("click", function() {
    plusSlides(1);
});

// Dot navigation
let dots = document.getElementsByClassName("dot");
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
        currentSlide(i + 1);
    });
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
