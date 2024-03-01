const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav-container');



function showMenu() {
    nav.classList.toggle('active');
    menu.children[0].classList.toggle('bx-x-circle');
}

console.log(menu.children[0])


menu.addEventListener('click', showMenu);