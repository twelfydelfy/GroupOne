const totalSlides = 5;
let currentLastSlide = 4;

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
}