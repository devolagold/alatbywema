const toggleBtn = document.querySelector(".toggle-button");
const navLink = document.querySelector(".nav-link");
const ctaButton = document.querySelector(".cta-button");
const navbar = document.querySelector(".navbar");

toggleBtn.addEventListener('click', () =>{
    navLink.classList.toggle('active')
    ctaButton.classList.toggle('active')
    navbar.classList.toggle('active')
    toggleBtn.classList.toggle('open')
})