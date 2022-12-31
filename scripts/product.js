// Jianxin You 20134401
// Hoang-Thi-Thi Cynthia Phan 20220019

const dialog = document.querySelector('#add-product');
const url = './data/products.json';
const xhr = new XMLHttpRequest();
let id = getParameter('id');
let number = id;

console.log(number);

function getParameter(parameterName) {
    let parameters = new URLSearchParams(window.location.search);
    console.log(parameters);
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
        console.log(id);
        if (id === undefined || id < 1 || id > products.length) {
            $('.product').html('<h1>Page non trouvée!</h1>');
          }else {
            let product = products[id - 1];
            console.log('product:', product);
            $('#product-name').html(product.name);
            console.log(product.name);
            $('#product-image').attr('src', `./imgs/${product.image}`);
            $('#product-desc').html(product.description);
            $('#product-features').html(productFeatures(product.features));
            $('#product-price').html(`Prix: <strong>${product.price}</strong>`);
        }
    }
    xhr.open('GET', url);
    xhr.send();
}

$(document).ready(function() {
    $(document).on('click', '#add-product', function(event) {
        event.preventDefault();
        let quantity = document.querySelector('#product-quantity').value;
        let price =  $('#product-price strong').text();
        let name = document.getElementById("product-name").innerHTML;

        let totalPrice = Number(price)*Number(quantity);

        let productQuantity = {
            id: id,
            quantity: quantity,
            price : price,
            name : name,
            totalPrice:totalPrice
            
        };
        
        
        let serializedProductQuantity = JSON.stringify(productQuantity);
        localStorage.setItem(name, serializedProductQuantity);
        showCount();
        return false;
    });
});

dialog.addEventListener('click', () => {
    $('#dialog').delay('fast').fadeIn();
    $('#dialog').delay(5000);
 $('#dialog').delay('fast').fadeOut();
});

load();
