
let toggle = document.getElementById('toggle');
let label_toggle = document.getElementById('label_toggle');
let body = document.getElementById('body');
let product_txt = document.getElementsByTagName('h3');
let products = document.querySelectorAll('.product-1');
let contact = document.querySelectorAll('.contact-contect');
let redes = document.querySelectorAll('.redes');

toggle.addEventListener('change', (event) => {
    let checked = event.target.checked;
    document.body.classList.toggle('dark');
    if (checked) {
        label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        body.setAttribute('data-bs-theme', 'dark');
        Array.from(product_txt).forEach(h3 => {
            h3.style.color = "white";
        });
        products.forEach(p => p.style.backgroundColor = '#2A223A');
        contact.forEach(p => p.style.backgroundColor = '#2A223A');
        redes.forEach(p => { p.style.color="white"});
        label_toggle.style.color = "yellow";
    } else {
        label_toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        body.setAttribute('data-bs-theme', 'light');
        Array.from(product_txt).forEach(h3 => {
            h3.style.color = "black";
        });
        products.forEach(p => p.style.backgroundColor = '#f0f0f5');
        contact.forEach(p => p.style.backgroundColor = '#f0f0f5');
        redes.forEach(p => { p.style.color="black"});
        label_toggle.style.color = "#181726";
    }
});

