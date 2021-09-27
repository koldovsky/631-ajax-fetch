const products = [
    {
        id: 1,
        name: "Baby Yoda",
        img: 'img/baby-yoda.svg',
        price: 10.99,
        description: 'Some <b>quick</b> example text to build on the card title and make up the bulk of the cards content.'
    },
    {
        id: 2,
        name: "Banana",
        img: 'img/banana.svg',
        price: 8.99,
        description: 'Some <b>quick</b> example text to build on the card title and make up the bulk of the cards content.'
    },
    {
        id: 3,
        name: "Girl",
        img: 'img/girl.svg',
        price: 9.99,
        description: 'Some <b>quick</b> example text to build on the card title and make up the bulk of the cards content.'
    },
    {
        id: 4,
        name: "Viking",
        img: 'img/viking.svg',
        price: 7.99,
        description: 'Some <b>quick</b> example text to build on the card title and make up the bulk of the cards content.'
    }
]

function renderProducts(products) {
    const productsContainer = document.querySelector('.products');
    for (const product of products) {
        productsContainer.innerHTML += 
            `<article class="card col-12 col-sm-6 col-md-4 col-lg-3">
                <img src="${product.img}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <a href="#" class="btn btn-info">Info</a>
                <a href="#" class="btn btn-primary">${product.price} - Buy</a>
                </div>
            </article>`;
    }   
}
renderProducts(products);