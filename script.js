var button_left = document.getElementById("buttonleft");
var button_right = document.getElementById("buttonright");


var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;

 


button_left.addEventListener("click", function() {
    slides[currentSlide].className = 'slide';
    alert(slides);
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
})