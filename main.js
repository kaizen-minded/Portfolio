// $('.navbar a').on('click', function(e) {
//     if(this.hash !==''){
//         e.preventDefault();     
//         const hash = this.hash;
//         $('html, body').animate({
//             scrollTop: $(hash).offset().top
//         },
//         800
//         );
//     }
// })
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
})

links.forEach( link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    })
})