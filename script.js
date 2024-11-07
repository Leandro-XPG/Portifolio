let btn = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');

btn.addEventListener('click',()=>{
    menu.classList.add('abrir_menu')
})

menu.addEventListener('click',()=>{
    menu.classList.remove('abrir_menu')
})