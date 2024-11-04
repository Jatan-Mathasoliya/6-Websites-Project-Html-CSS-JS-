let scrollPosition = 0; // Scroll position for sliderRow
let scrollPosition2 = 0; // Scroll position for sliderRow2
let scrollPosition3 = 0; // Scroll position for sliderRow3
let scrollPosition4 = 0;
let scrollPosition5 = 0;
let scrollPosition6 = 0;

const imagesPerSlide = 4; // Number of images per slide for sliderRow and sliderRow2
const singleSlideWidth = 270; // Width of one slide (image + margin)
const slideWidth = singleSlideWidth * imagesPerSlide; // Width of four slides

const sliderRow = document.getElementById("sliderRow");
const sliderRow2 = document.getElementById("sliderRow2");
const sliderRow3 = document.getElementById("sliderRow3");
const sliderRow4 = document.getElementById("sliderRow4");
const sliderRow5 = document.getElementById("sliderRow5");
const sliderRow6 = document.getElementById("sliderRow6");

// Slider for row 1
function slide(direction) {
    const maxScroll = sliderRow.scrollWidth - sliderRow.clientWidth;
    scrollPosition += direction * slideWidth;
    if (scrollPosition < 0) scrollPosition = 0;
    if (scrollPosition > maxScroll) scrollPosition = maxScroll;
    sliderRow.style.transform = `translateX(-${scrollPosition}px)`;
}

// Slider for row 2
function slide2(direction) { 
    const maxScroll2 = sliderRow2.scrollWidth - sliderRow2.clientWidth;
    scrollPosition2 += direction * slideWidth;
    if (scrollPosition2 < 0) scrollPosition2 = 0;
    if (scrollPosition2 > maxScroll2) scrollPosition2 = maxScroll2;
    sliderRow2.style.transform = `translateX(-${scrollPosition2}px)`;
}

function slide3(direction){
    const maxScroll3 = sliderRow3.scrollWidth - sliderRow3.clientWidth;
    scrollPosition3 += direction *  slideWidth;
    if (scrollPosition3 < 0) scrollPosition3 = 0;
    if (scrollPosition3 > maxScroll3) scrollPosition3 = maxScroll3;
    sliderRow3.style.transform = `translateX(-${scrollPosition3}px)`;
}
function slide5(direction){
    const maxScroll5 = sliderRow5.scrollWidth - sliderRow5.clientWidth;
    scrollPosition5 += direction *  slideWidth;
    if (scrollPosition5 < 0) scrollPosition5 = 0;
    if (scrollPosition5 > maxScroll5) scrollPosition5 = maxScroll5;
    sliderRow5.style.transform = `translateX(-${scrollPosition5}px)`;
}
function slide6(direction){
    const maxScroll6 = sliderRow5.scrollWidth - sliderRow6.clientWidth;
    scrollPosition6 += direction *  slideWidth;
    if (scrollPosition6 < 0) scrollPosition6 = 0;
    if (scrollPosition6 > maxScroll6) scrollPosition6 = maxScroll6;
    sliderRow6.style.transform = `translateX(-${scrollPosition6}px)`;
}
let imagesPerSlide4 = 1
let singleSlideWidth4 = 1450
let slideWidth4 = imagesPerSlide4 * singleSlideWidth4;

function  slide4(direction){
    const maxScroll4 = sliderRow4.scrollWidth - sliderRow4.clientWidth;
    scrollPosition4 += direction * slideWidth4;
    if (scrollPosition4 < 0) scrollPosition4 = 0;
    if (scrollPosition4 > maxScroll4) scrollPosition4 = maxScroll4;
    sliderRow4.style.transform = `translateX(-${scrollPosition4}px)`;
}