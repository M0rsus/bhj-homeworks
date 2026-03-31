const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let deads = 0;
let misses = 0;

for (let i = 0; i < 9; i++) {
    getHole(i).addEventListener("click", onClickHole);
}
function onClickHole() {
    if (this.classList.contains("hole_has-mole")) {
        deads++;
        dead.textContent = deads;
    } else {
        misses++;
        lost.textContent = misses;
    }
    if (deads >= 10 || misses >= 5) {
        resetStatistics();
    }
}
function resetStatistics() {
    if (misses >= 5)
        alert("Вы проиграли");
    if (deads >= 10)
        alert("Вы выиграли");
    deads = 0;
    misses = 0;
    dead.textContent = deads;
    lost.textContent = misses;
}
function getHole(index) {
    return document.getElementById(`hole${index + 1}`);
}