// Jianxin You 20134401
// Hoang-Thi-Thi Cynthia Phan 20220019

const url = './data/products.json';
const xhr = new XMLHttpRequest();

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
        let id = getParameter('id');
        if (id > products.length) {
            $('.product').html('<h1>Page non trouvée!</h1>');
            console.log('hello');
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

load();