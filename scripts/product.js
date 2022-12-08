// Jianxin You 20134401
// Hoang-Thi-Thi Cynthia Phan 20220019

const dialog = document.querySelector('#add-product');
const url = './data/products.json';
const xhr = new XMLHttpRequest();
let id = getParameter('id');

function getParameter(parameterName) {
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parameterName);
}

function productFeatures(features) {
    let html = '';
    features.forEach(function featuresList(feature, index, array) {
        html += `<li>${feature}</li>`;
    });
    return html;
}

function load() {
    xhr.onload = () => {
        let products = JSON.parse(xhr.responseText);
        if (id > products.length) {
            $('.product').html('<h1>Page non trouvée!</h1>');
        } else {
            let product = products[id - 1];
            $('#product-name').text(product.name);
            $('#product-image').attr('src', `./imgs/${product.image}`);
            $('#product-desc').html(product.description);
            $('#product-features').html(productFeatures(product.features));
            $('#product-price').html(`Prix: <strong>${product.price}$</strong>`);
        }
    }
    xhr.open('GET', url);
    xhr.send();
}

$(document).ready(function() {
    $(document).on('submit', '#add-to-cart-form', function() {
        let quantity = document.querySelector('#product-quantity').value;
        let productQuantity = {
            id: id,
            quantity: quantity
        };
        let serializedProductQuantity = JSON.stringify(productQuantity);
        localStorage.setItem(`quantityID${id}`, serializedProductQuantity);
        return false;
    });
});

dialog.addEventListener('click', () => {
    $('#dialog').delay('fast').fadeIn();
    $('#dialog').delay(5000);
    $('#dialog').delay('fast').fadeOut();
});

load();