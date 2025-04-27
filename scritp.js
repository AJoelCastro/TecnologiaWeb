let toggle = document.getElementById('toggle');
let botonesComprar = document.querySelectorAll('.btn');
let label_toggle = document.getElementById('label_toggle');
let body = document.getElementById('body');
let carousel = document.getElementById('carousel');
let product_txt = document.getElementsByTagName('h3');
let products = document.querySelectorAll('.product-1');
let contact = document.querySelectorAll('.contact-contect');
let redes = document.querySelectorAll('.redes');
let textito = document.querySelectorAll('.textito');
let iconPrev = document.getElementsByClassName('carousel-control-prev-icon');
let iconNext = document.getElementsByClassName('carousel-control-next-icon');
let title = document.getElementsByClassName('mejoresJuegos');
toggle.addEventListener('change', (event) => {
    let checked = event.target.checked;
    document.body.classList.toggle('dark');
    if (checked) {
        label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        body.setAttribute('data-bs-theme', 'dark');
        Array.from(product_txt).forEach(h3 => {
            h3.style.color = "white";
        });
        title[0].style.color = "white"; 
        products.forEach(p => p.style.backgroundColor = '#2A223A');
        contact.forEach(p => p.style.backgroundColor = '#2A223A');
        redes.forEach(p => { p.style.color="white"});
        carousel.style.backgroundColor = '#1E2125';
        iconPrev[0].style.backgroundColor = "#2A223A";
        iconNext[0].style.backgroundColor = "#2A223A";
        label_toggle.style.color = "yellow";
        botonesComprar.forEach(boton => {
            boton.classList.remove('btn-dark');
            boton.classList.add('btn-light');
        });
        textito.forEach(p => p.style.color = "#F0F0F1");
    } else {
        label_toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        body.setAttribute('data-bs-theme', 'light');
        Array.from(product_txt).forEach(h3 => {
            h3.style.color = "black";
        });
        title[0].style.color = "black"; 
        products.forEach(p => p.style.backgroundColor = '#f0f0f5');
        contact.forEach(p => p.style.backgroundColor = '#f0f0f5');
        redes.forEach(p => { p.style.color="black"});
        carousel.style.backgroundColor = '#ffffff';
        iconPrev[0].style.backgroundColor = "#FF5A2C";
        iconNext[0].style.backgroundColor = "#FF5A2C";
        label_toggle.style.color = "#181726";
        botonesComprar.forEach(boton => {
            boton.classList.remove('btn-light');
            boton.classList.add('btn-dark');
        });
        textito.forEach(p => p.style.color = "#010729");
    }
});

