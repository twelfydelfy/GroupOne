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
      if (img) img.src = img.dataset.inactive; 
    });

    button.classList.add('active');
    const activeImg = button.querySelector('img');
    if (activeImg) activeImg.src = activeImg.dataset.active; 
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
                    <p>Asigurăm servicii complete pentru construcția și modernizarea drumurilor, de la pregătirea infrastructurii până la aplicarea straturilor finale de asfalt. Utilizăm tehnologii avansate, materiale certificate și echipe cu experiență, garantând lucrări durabile, sigure și conforme cu toate standardele tehnice.</p>
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
                    <h6>Transport și Închiriere Utialje</h6>
                    <p>Punem la dispoziție servicii de transport pentru materiale și echipamente, adaptate proiectelor de orice dimensiune. Oferim utilaje moderne pentru închiriere, inclusiv excavatoare, compactoare și camioane specializate, asigurând execuție eficientă și sigură.</p>
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
                    <h6>Producere</h6>
                    <p>Asigurăm producerea asfaltului și betonului la standarde înalte, utilizând materiale certificate și tehnologii moderne. Oferim livrare promptă și cantități adaptate proiectelor de orice dimensiune, garantând consistență, durabilitate și performanță în fiecare lot.</p>
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
                    <h6>Utilaje spre vânzare</h6>
                    <p>Punem la dispoziție utilaje și echipamente profesionale pentru construcții, selectate pentru fiabilitate și performanță, verificate tehnic, potrivite atât pentru proiecte de amploare, cât și pentru lucrări specializate.</p>
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