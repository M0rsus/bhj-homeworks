const clickerCounter = document.getElementById("clicker__counter");
let clickCount = clickerCounter.textContent;
const cookie = document.getElementById("cookie");

function onClickCookie() {
    clickCount++;
    clickerCounter.textContent = clickCount;
    if (clickCount % 2 === 0) {
        cookie.width = 200;
    } else {
        cookie.width = 250;
    }
}
cookie.onclick = onClickCookie;