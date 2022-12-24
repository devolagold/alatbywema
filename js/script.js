const toggleBtn = document.querySelector(".toggle-button");
const navLink = document.querySelector(".nav-link");
const ctaButton = document.querySelector(".cta-button");
const navbar = document.querySelector(".navbar");
const tab = document.querySelector(".tab")
const btn = document.querySelectorAll(".personal-business")
const content = document.querySelectorAll(".content")

toggleBtn.addEventListener('click', () =>{
    navLink.classList.toggle('active')
    ctaButton.classList.toggle('active')
    navbar.classList.toggle('active')
    toggleBtn.classList.toggle('open')
})

tab.addEventListener('click', e => {
    const id = e.target.dataset.id
    if (id) {
        btn.forEach(btn => {
            btn.classList.remove("active")
            e.target.classList.add("active")
        })
        content.forEach(content => {
            content.classList.remove("active")
        })
        const element = document.getElementById(id)
        element.classList.add("active")
    }
})