// document - DOM 
// window - BOM 

// Пошук елементів
// document.getElementById('products');
// document.getElementsByTagName('h2');
// document.getElementsByClassName('card-body');
// document.querySelector('#products'); - знаходить один елемент по селектору
// document.querySelectorAll('h2'); - знаходить масив елементів по селектору

// Робимо годинник

setInterval(function () {
    const clockContainer = document.querySelector('.clock');
    clockContainer.innerText = new Date().toLocaleTimeString();
}, 1000);



