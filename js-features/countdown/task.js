const timer = document.getElementById("timer");
let timeLeft = timer.textContent;
const timerId = setInterval(() => {
    let hours = Math.floor(timeLeft / 3600);
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    hours = hours < 10 ? "0" + hours : hours;
    
    timer.textContent = `${hours}:${minutes}:${seconds}`;
    if (timeLeft <= 0) {
        clearInterval(timerId);
        alert("Вы победили в конкурсе!")
    } else {
        timeLeft--;
    }
}, 1000)