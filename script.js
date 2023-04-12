const hamburger = document.querySelector(".hamburger");
const headerDiv1 = document.querySelector(".header-div1");

hamburger.addEventListener('click', () => {
    headerDiv1.classList.toggle("hide");
})