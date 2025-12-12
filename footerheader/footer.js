console.log("WTF");
let currentbox = 1;
document.querySelectorAll('.boxshowing').forEach(boxshowing =>{
    boxshowing.addEventListener('click', ()=>{
        const hiddenbox = boxshowing.nextElementSibling;

        document.querySelectorAll('.boxshowing').forEach(box =>{
            box.style.backgroundColor = '#D9D9D9';
            box.style.color = 'black';
        })

        document.querySelectorAll('.boxhidden').forEach(box =>{
            if(box !== hiddenbox){
                box.style.display = 'none';
                box.style.opacity = '0';
            }
        })

        if (hiddenbox.style.display === "flex") {
            hiddenbox.style.display = "none";
            hiddenbox.style.opacity = "0";
            boxshowing.style.backgroundColor = "#D9D9D9";
            boxshowing.style.color = "black";
        } else {
            hiddenbox.style.display = "flex";
            hiddenbox.style.opacity = "1";
            boxshowing.style.backgroundColor = "#FFBA00";
            boxshowing.style.color = "white";
        }
        if(hiddenbox.style.display === "flex"){
        const parentBox = boxshowing.closest(".box");
        const boxClass = Array.from(parentBox.classList).find(c => /^\d+$/.test(c));
        currentbox = boxClass ? parseInt(boxClass, 10) : null;
        console.log(currentbox);
    }
    });
})


// This part is responsible for the dynamic changing of the maps
const gmaps = document.querySelector('.flocation');

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        const id = box.dataset.map;
        if (id === "1") {
            gmaps.innerHTML = `
                <iframe class="gmaps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1363.357009455839!2d29.204983984688912!3d46.88867440309368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c90b0055f71085%3A0xe1d41b43d2a38cb9!2sGroup%20One%20oficii!5e0!3m2!1sro!2s!4v1764576836790!5m2!1sro!2s" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            `;
        }
        else{
            gmaps.innerHTML = `
            <iframe class="gmaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18345.432624087534!2d29.275641135616155!3d46.88177224895715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c90d007b6d7d1d%3A0x836d777786e6e060!2sGroup%20One!5e0!3m2!1sro!2s!4v1764578604814!5m2!1sro!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            `;
        }
    });
});
