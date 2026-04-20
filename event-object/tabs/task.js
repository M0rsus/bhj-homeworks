const tabs = Array.from(document.querySelectorAll(".tab"));
const tabContents = Array.from(document.querySelectorAll(".tab__content"));

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function(event) {
        deactivateTabs();
        tabs[i].classList.add("tab_active");
        tabContents[i].classList.add("tab__content_active");
    });
}

function deactivateTabs() {
    tabs.forEach((tab) => {
        tab.classList.remove("tab_active");
    });
    tabContents.forEach((tabContent) => {
        tabContent.classList.remove("tab__content_active");
    })
}