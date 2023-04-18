const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");

menu.addEventListener('click', () => {
    menu.classList.toggle('times')
    navbar.classList.toggle('navbar-tugl')
})