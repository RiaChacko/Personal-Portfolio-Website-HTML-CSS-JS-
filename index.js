
var scrollPosition = window.scrollY;
var windowHeight = window.innerHeight-50;
var element = document.querySelector(".skill-percent2");
window.addEventListener('scroll',function(){
    if(scrollPosition > (element.offsetTop - windowHeight)){
        element.classList.add(".skill-percent");
    }
})