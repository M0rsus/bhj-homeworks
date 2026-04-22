function rotator(selector, switchClass) {
    const rotatorCases = Array.from(document.querySelectorAll(selector));
    let index = 0;
    setInterval(() => {
        if (index > 0) {
            rotatorCases[index - 1].classList.remove(switchClass);
        }
        index = index % rotatorCases.length;
        rotatorCases[index].classList.add(switchClass);
        index++;
    }, 1000);
}

rotator(".rotator__case", "rotator__case_active");