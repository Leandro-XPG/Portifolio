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