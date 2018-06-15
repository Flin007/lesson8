'use strict';

list.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.classList.contains('add-to-cart') === false) {
        return;
    }

    const currentData = {
        title: event.target.dataset.title,
        price: event.target.dataset.price
    };

    addToCart(currentData);
});