const totalSlides = 5;
if(window.innerWidth > 768){
let currentLastSlide = 4;
let currentOption = 1;

document.querySelector('#sliderRightArrow').addEventListener('click', ()=>{
    if(currentLastSlide < totalSlides){
    currentLastSlide += 1;}
    else{
        currentLastSlide = 4;
    }
    MoveSlider();
});

document.querySelector('#sliderLeftArrow').addEventListener('click', ()=>{
    if(currentLastSlide > 4){
        currentLastSlide -=1;
    }else{
        currentLastSlide = totalSlides;
    }
    MoveSlider();
});
function MoveSlider(){
    const slider  = document.querySelector('.sec5slider');
    slider.style.marginLeft = `${-((currentLastSlide-4) * 25)}%`;
}}
else{
let currentLastSlide = 1;
let currentOption = 1;

document.querySelector('#sliderRightArrow').addEventListener('click', ()=>{
    if(currentLastSlide < totalSlides){
    currentLastSlide += 1;}
    else{
        currentLastSlide = 1;
    }
    MoveSlider();
});

document.querySelector('#sliderLeftArrow').addEventListener('click', ()=>{
    if(currentLastSlide > 1){
        currentLastSlide -=1;
    }else{
        currentLastSlide = totalSlides;
    }
    MoveSlider();
});
function MoveSlider(){
    const slider  = document.querySelector('.sec5slider');
    slider.style.marginLeft = `${-((currentLastSlide-1) * 100)}%`;
}
}