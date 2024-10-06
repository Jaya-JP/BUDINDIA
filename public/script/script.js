
const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
     if (window.scrollY >= 56) {
          navEl.classList.add('navbar-scrolled')     
     }
     else if(window.scrollY < 56 ){
          navEl.classList.remove('navbar-scrolled')
     }

})
const container_hover = document.querySelector('.text-rel');
const text2 = document.querySelector('.text1')

container_hover.addEventListener("mouseenter",()=>{
     text2.classList.toggle('text2')
});
container_hover.addEventListener("mouseleave",()=>{
     text2.classList.toggle('text2')
})