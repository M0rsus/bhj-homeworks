const book = document.querySelector(".book");
const fontSizes = Array.from(document.querySelectorAll(".font-size"));
fontSizes.forEach(fontSize => {
    fontSize.addEventListener("click", function(event) {
        event.preventDefault();
        
        fontSizes.forEach((fontSize) => {
            fontSize.classList.remove("font-size_active");
        });
        this.classList.add("font-size_active");
        setFontSize(this);
    });
});

function setFontSize(fontSize) {
    book.classList.remove("book_fs-small");
    book.classList.remove("book_fs-big");
    
    if (fontSize.classList.contains("font-size_small")) {
        book.classList.add("book_fs-small");
    }
    if (fontSize.classList.contains("font-size_big")) {
        book.classList.add("book_fs-big");
    }
}