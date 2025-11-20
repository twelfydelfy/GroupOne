document.addEventListener("DOMContentLoaded", animations());
function animations(){
    let e = document.querySelectorAll("*"),
        t = () => {
            let t = 1 * window.innerHeight;
            e.forEach(e => {
                let i = e.getBoundingClientRect().top;
                i < t ? e.classList.add("show") : e.classList.remove("show");
            });
        };
    window.addEventListener("scroll", t);
    t();
}