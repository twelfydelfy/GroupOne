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
                    <p>Lorem Lorem Lorem Lorem lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem lorem Lorem Lorem Lorem</p>
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
                    <p>Lorem Lorem Lorem Lorem lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem lorem Lorem Lorem Lorem</p>
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
                    <p>Lorem Lorem Lorem Lorem lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem lorem Lorem Lorem Lorem</p>
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
                    <p>Lorem Lorem Lorem Lorem lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem lorem Lorem Lorem Lorem</p>
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