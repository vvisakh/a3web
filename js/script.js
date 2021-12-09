// Group 15: Sneha Mohan, Janelli Powell, Praveen Mohan, Visakh Vijayan, Lindsay Aldous
// Last modified 5 December 2021 by L. Aldous

// We decided to use an image slideshow as our JS component - the examples of our cartography
// work are very visual products, so this seemed like an appropriate and less overwhelming 
// way to display the images. The idea and original JS was sourced from:
// https://www.w3schools.com/howto/howto_js_slideshow.asp

// Code "author" (comment author) is Lindsay

// *********************************************************************************************

// This JS provides the navigation controls for the images in the Cartography page slideshow
// Declaring the variable that stores the index position of the slides and facilitates easier
// movement between slides by the next/previous/dot controls
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
// Allows the user to click the left or right arrow to move through the slide deck in sequence
function plusSlides(n) {
showSlides(slideIndex += n);
}

// The function that controls the dot-navigation between images
// Allows the user to click a dot to switch to a different slide (image)
function currentSlide(n) {
showSlides(slideIndex = n);
}

// The function that controls the actual image display
function showSlides(n) {
var i;
// Declaring variables to store the reference to the HTML elements on our page with the 
// corresponding class
var slides = document.getElementsByClassName("ourSlides");
var dots = document.getElementsByClassName("dot");

// Permits the next arrow to cycle back to the beginning from the last slide
if (n > slides.length) {slideIndex = 1}

// Permits the prev arrow to cycle to the last slide from the beginning
if (n < 1) {slideIndex = slides.length}

// Keeps the images in the slidedeck from all showing at once
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

// Reverts the style of a dot from the "active" style to the default when a new dot is clicked
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}

// Displays the current image as a block element
slides[slideIndex-1].style.display = "block";

// Holds the "active" style of the dot for as long as its corresponding image is being displayed
dots[slideIndex-1].className += " active";
}