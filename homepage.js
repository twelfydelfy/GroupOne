//This part is responsible for the slider

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
    slider.style.marginLeft = `${-((currentLastSlide-4) * 24.5)}%`;
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
    slider.style.marginLeft = `${-2 - ((currentLastSlide - 1) * 98.8)}%`;

}
}


// This part is responsible for the main services menu


//This code is responsible for the changing styles of the buttons
document.querySelectorAll('.sec3rbtn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.sec3rbtn').forEach(btn => {
      btn.classList.remove('active');
      const img = btn.querySelector('img');
      if (img) img.src = img.dataset.inactive; // reset all images
    });

    button.classList.add('active');
    const activeImg = button.querySelector('img');
    if (activeImg) activeImg.src = activeImg.dataset.active; // activate clicked one
  });
});


//This code is responsible for actually changing the content inside the box
const section3content = document.querySelector('.sec3left');
document.querySelectorAll('.sec3rbtn').forEach(button =>{
    button.addEventListener('click', ()=>{
        if(button.id == '1'){
            section3content.innerHTML = `
               <div class="sec3leftcontent">
                <div class="sec3leftupper">
                    <h6>Vindem Asfalt</h6>
                    <p>Noi caroce punem asfalt ne futem cu mintea belim pula la arici
                        Și bem cofe în loc să lucrăm pizdim solearcă iaebu caroce</p>
                    <a href="drumuri.php"><button>Detalii</button></a>
                </div>
                <div class="sec3leftlower">
                    <div class="box">
                        <img src="images/square.png">

                        <div class="boxinner">
                            <p>HELLO</p>
                        </div>
                    </div>
                    <div class="box">
                        <img src="images/square.png">

                        <div class="boxinner">
                            <p>HELLO</p>
                        </div>
                    </div>
                    <div class="box">
                        <img src="images/square.png">

                        <div class="boxinner">
                            <p>HELLO</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sec3leftimg">
                <img src="images/square.png">
            </div>
            `
        }
        else if(button.id == '2'){
            console.log('2');
            section3content.innerHTML = `
               <div class="sec3leftcontent">
                <div class="sec3leftupper">
                    <h6>Vindem Asfalt2</h6>
                    <p>Noi caroce punem asfalt ne futem cu mintea belim pula la arici
                        Și bem cofe în loc să lucrăm pizdim solearcă iaebu caroce</p>
                    <a href="inchiriere.php"><button>Detalii</button></a>
                </div>
                <div class="sec3leftlower">
                    <div class="box">
                        <img src="images/square.png">

                        <div class="boxinner">
                            <p>HELLO</p>
                        </div>
                    </div>
                    <div class="box">
                        <img src="images/square.png">

                        <div class="boxinner">
                            <p>HELLO</p>
                        </div>
                    </div>
                    <div class="box">
                        <img src="images/square.png">

                        <div class="boxinner">
                            <p>HELLO</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sec3leftimg">
                <img src="images/square.png">
            </div>
            `
        }
        else if(button.id == '3'){
            section3content.innerHTML = `
               <div class="sec3leftcontent">
                <div class="sec3leftupper">
                    <h6>Vindem Asfalt3</h6>
                    <p>Noi caroce punem asfalt ne futem cu mintea belim pula la arici
                        Și bem cofe în loc să lucrăm pizdim solearcă iaebu caroce</p>
                    <a href="productie.php"><button>Detalii</button></a>
                </div>
                <div class="sec3leftlower">
                    <div class="box">
                        <img src="images/square.png">

                        <div class="boxinner">
                            <p>HELLO</p>
                        </div>
                    </div>
                    <div class="box">
                        <img src="images/square.png">

                        <div class="boxinner">
                            <p>HELLO</p>
                        </div>
                    </div>
                    <div class="box">
                        <img src="images/square.png">

                        <div class="boxinner">
                            <p>HELLO</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sec3leftimg">
                <img src="images/square.png">
            </div>
            `
        }
        else{
            section3content.innerHTML = `
               <div class="sec3leftcontent">
                <div class="sec3leftupper">
                    <h6>Vindem Asfalt4</h6>
                    <p>Noi caroce punem asfalt ne futem cu mintea belim pula la arici
                        Și bem cofe în loc să lucrăm pizdim solearcă iaebu caroce</p>
                    <a href="utilaje.php"><button>Detalii</button></a>
                </div>
                <div class="sec3leftlower">
                    <div class="box">
                        <img src="images/square.png">

                        <div class="boxinner">
                            <p>HELLO</p>
                        </div>
                    </div>
                    <div class="box">
                        <img src="images/square.png">

                        <div class="boxinner">
                            <p>HELLO</p>
                        </div>
                    </div>
                    <div class="box">
                        <img src="images/square.png">

                        <div class="boxinner">
                            <p>HELLO</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sec3leftimg">
                <img src="images/square.png">
            </div>
            `
        }
    })
})


//This part is responsible for the animations
// document.addEventListener("DOMContentLoaded", animations());
// function animations(){
//     let e = document.querySelectorAll("*"),
//         t = () => {
//             let t = 1 * window.innerHeight;
//             e.forEach(e => {
//                 let i = e.getBoundingClientRect().top;
//                 i < t ? e.classList.add("show") : e.classList.remove("show");
//             });
//         };
//     window.addEventListener("scroll", t);
//     t();
// }