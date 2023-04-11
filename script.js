const hamburger = document.getElementsByClassName("hamburger");
const headerDiv1 = document.getElementsByClassName("header-div1");

hamburger.addEventListener('click', () =>{
    headerDiv1.classList.toggle("hide")
})