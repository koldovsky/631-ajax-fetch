async function getJson(url) {
    const response = await fetch(url);
    return await response.json();
}

// function getJsonPromise(url, callback) {
//     fetch(url)
//         .then( responce => responce.json() )
//         .then( data => callback(data));
// }

// function getJsonWithAjax(url, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             const data = JSON.parse(xhr.responseText);
//             callback(data);
//         }
//     }
//     xhr.open('GET', url, true);
//     xhr.send();
// }

function renderProducts(products) {
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = '';
    for (const product of products) {
        productsContainer.innerHTML += 
            `<article class="card col-12 col-sm-6 col-md-4 col-lg-3">
                <img src="${product.img}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <a href="#" class="btn btn-info">Info</a>
                <a href="#" class="btn btn-primary">${product.convertedPrice || product.price} - Buy</a>
                </div>
            </article>`;
    }   
}

(async function () {
    const products = await getJson('products.json'); 
    renderProducts(products);
})();

// getJsonPromise('products.json', renderProducts);
// getJsonWithAjax('products.json', renderProducts);

async function convertCurrency() {
    const convertTo = document.querySelector('.currency').value;
    const currencies = await getJson('https://api.exchangerate-api.com/v4/latest/USD');
    const rate = currencies.rates[convertTo];
    const products = await getJson('products.json'); 
    for (const product of products) {
        product.convertedPrice = (product.price * rate).toFixed(2);
    }
    renderProducts(products);
}



document
    .querySelector('.convert')
    .addEventListener('click', convertCurrency);

