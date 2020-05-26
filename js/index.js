const menu = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.links-wrapper')
const link = document.getElementsByClassName('.link')

menu.addEventListener('click', () => {
    navLinks.classList.toggle('visible')
});

