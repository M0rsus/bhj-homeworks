const reveals = Array.from(document.querySelectorAll(".reveal"));
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    console.log("Позиция окна: " + scrollTop);
    reveals.forEach((reveal) => {
        let revealTop = reveal.offsetTop;
        let revealBottom = reveal.offsetTop + reveal.getBoundingClientRect().height;
        if (revealTop - scrollTop < window.innerHeight && revealBottom - scrollTop > 0) {
            reveal.classList.add("reveal_active");
        } else {
            reveal.classList.remove("reveal_active");
        }
    })
});