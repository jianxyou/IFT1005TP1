// Jianxin You 20134401
// Hoang-Thi-Thi Cynthia Phan 20220019

const productList = document.querySelector('.products--items');
const count = document.querySelector('#product-count');
const url = './data/products.json';
const xhr = new XMLHttpRequest();
let filterBy = 'allProducts';
let orderBy = 'low2high';

function orderProducts(data) {
    switch(orderBy) {
        case 'low2high':
            data.sort((product1, product2) => {
                return product1.price - product2.price;
            });
            break;
        case 'high2low':
            data.sort((product1, product2) => {
                return product2.price - product1.price;
            });
            break;
        case 'a2z':
            data.sort((product1, product2) => {
                return product1.name.localeCompare(product2.name);
            })
            break;
        case 'z2a':
            data.sort((product1, product2) => {
                return product2.name.localeCompare(product1.name);
            })
            break;
    }
    return data;
}

function load() {
    xhr.onload = () => {
        let products = JSON.parse(xhr.responseText);
        let filtered = products.filter((product) => filterBy == 'allProducts' || product.category == filterBy);
        let ordered = orderProducts(filtered);
        let number = ordered.length;
        loadProducts(ordered);
        $('#product-count').text(`${number} produits`);
    }
    xhr.open('GET', url);
    xhr.send();
}

function loadProducts(products) {
    let html = ''; 
    products.forEach(product => {
        html += `<a class="items" href="./product.html?id=${product.id}">
            <article>
                <h3>${product.name}</h3>
                <img src="./imgs/${product.image}" alt="${product.name}">
                <p>${product.price}</p>
            </article>
        </a>`
    });
    productList.innerHTML = html;
}

function productCategories() {
    $('#cameras').click(function() {
        $('#cameras').addClass('selected');
        $('#consoles').removeClass('selected');
        $('#screens').removeClass('selected');
        $('#computers').removeClass('selected');
        $('#all-products').removeClass('selected');

        filterBy = 'cameras';
        load();
        
    });
    
    $('#consoles').click(function() {
        $('#consoles').addClass('selected');
        $('#cameras').removeClass('selected');
        $('#screens').removeClass('selected');
        $('#computers').removeClass('selected');
        $('#all-products').removeClass('selected');

        filterBy = 'consoles';
        load();
    });
    
    $('#screens').click(function() {
        $('#screens').addClass('selected');
        $('#cameras').removeClass('selected');
        $('#consoles').removeClass('selected');
        $('#computers').removeClass('selected');
        $('#all-products').removeClass('selected');

        filterBy = 'screens';
        load();
    });
    
    $('#computers').click(function() {
        $('#computers').addClass('selected');
        $('#cameras').removeClass('selected');
        $('#consoles').removeClass('selected');
        $('#screens').removeClass('selected');
        $('#all-products').removeClass('selected');

        filterBy = 'computers';
        load();
    });
    
    $('#all-products').click(function() {
        $('#all-products').addClass('selected');
        $('#cameras').removeClass('selected');
        $('#consoles').removeClass('selected');
        $('#screens').removeClass('selected');
        $('#computers').removeClass('selected');

        filterBy = 'allProducts';
        load();
    });
}

function productCriteria() {
    $('#price-low2high').click(function() {
        $('#price-low2high').addClass('selected');
        $('#price-high2low').removeClass('selected');
        $('#name-A2Z').removeClass('selected');
        $('#name-Z2A').removeClass('selected');

        orderBy = 'low2high';
        load();
    });

    $('#price-high2low').click(function() {
        $('#price-high2low').addClass('selected');
        $('#price-low2high').removeClass('selected');
        $('#name-A2Z').removeClass('selected');
        $('#name-Z2A').removeClass('selected');

        orderBy = 'high2low';
        load();
    });

    $('#name-A2Z').click(function() {
        $('#name-A2Z').addClass('selected');
        $('#price-low2high').removeClass('selected');
        $('#price-high2low').removeClass('selected');
        $('#name-Z2A').removeClass('selected');

        orderBy = 'a2z';
        load();
    });

    $('#name-Z2A').click(function() {
        $('#name-Z2A').addClass('selected');
        $('#price-low2high').removeClass('selected');
        $('#price-high2low').removeClass('selected');
        $('#name-A2Z').removeClass('selected');

        orderBy = 'z2a';
        load();
    });
}

$('.default').addClass('selected');
load();
productCategories();
productCriteria();