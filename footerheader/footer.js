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