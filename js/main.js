const hamburger_menu = document.querySelector('.hamburger-menu');
const header_menu = document.querySelector('.header-menu');
hamburger_menu.addEventListener('click', () => {
    hamburger_menu.classList.toggle('active');
    header_menu.classList.toggle('active');
});