// Animation navbar

const buttonNavbar = document.querySelector('.navbar__button');
const listNavbar = document.querySelector('.navbar__list');
let imgButton = document.querySelector('.navbar__button__img');

buttonNavbar.addEventListener('click', () => {
    listNavbar.classList.toggle('navbar--active');

    if(imgButton.src.includes('menu')){
        imgButton.src = './ressources/croix.svg';
        imgButton.style.width = "30px";
        imgButton.style.height = "30px";
    } else {
        imgButton.src = './ressources/menu.svg';
        imgButton.style.width = "40px";
        imgButton.style.height = "40px";
    }
});