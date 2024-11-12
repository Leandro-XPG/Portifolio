let btn = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');

btn.addEventListener('click',()=>{
    menu.classList.add('abrir_menu');
})

menu.addEventListener('click',()=>{
    menu.classList.remove('abrir_menu');
})



let marcador = document.getElementById('marcador');
let body = document.querySelector('body');

marcador.addEventListener('click',()=>{
    marcador.classList.toggle('light');
    body.classList.toggle('light')
})



const carrossel = document.querySelector('.carrossel');
const setaEsquerda = document.querySelector('.seta-esquerda');
const setaDireita = document.querySelector('.seta-direita');

let currentIndex = 0; // Índice do card que está sendo exibido
const cards = document.querySelectorAll('.card'); // Todos os cards
const totalCards = cards.length;
const cardWidth = cards[0].offsetWidth + 70; // Largura de cada card + margem

// Defina a largura total do carrossel (total de cartões)
carrossel.style.width = `${cardWidth * totalCards}px`;

setaDireita.addEventListener('click', () => {
    if (currentIndex < totalCards - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Volta para o primeiro card
    }
    updateCarrossel();
});

setaEsquerda.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalCards - 1; // Vai para o último card
    }
    updateCarrossel();
});

function updateCarrossel() {
    const offset = -currentIndex * cardWidth; // Move o carrossel para a esquerda/direita
    carrossel.style.transform = `translateX(${offset}px)`;
}