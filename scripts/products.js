// Jianxin You 20134401
// Hoang-Thi-Thi Cynthia Phan 20220019

const productList = document.querySelector('.products--items');
const url = './data/products.json';

onload = () => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
        const data = JSON.parse(xhr.responseText);
        loadProducts(data);
    }
    xhr.open('GET', url);
    xhr.send();
    $('.default').addClass('selected');
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
    })
    
    $('#consoles').click(function() {
        $('#consoles').addClass('selected');
        $('#cameras').removeClass('selected');
        $('#screens').removeClass('selected');
        $('#computers').removeClass('selected');
        $('#all-products').removeClass('selected');
    })
    
    $('#screens').click(function() {
        $('#screens').addClass('selected');
        $('#cameras').removeClass('selected');
        $('#consoles').removeClass('selected');
        $('#computers').removeClass('selected');
        $('#all-products').removeClass('selected');
    })
    
    $('#computers').click(function() {
        $('#computers').addClass('selected');
        $('#cameras').removeClass('selected');
        $('#consoles').removeClass('selected');
        $('#screens').removeClass('selected');
        $('#all-products').removeClass('selected');
    })
    
    $('#all-products').click(function() {
        $('#all-products').addClass('selected');
        $('#cameras').removeClass('selected');
        $('#consoles').removeClass('selected');
        $('#screens').removeClass('selected');
        $('#computers').removeClass('selected');
    })
}

function productCriteria() {
    $('#price-low2high').click(function() {
        $('#price-low2high').addClass('selected');
        $('#price-high2low').removeClass('selected');
        $('#name-A2Z').removeClass('selected');
        $('#name-Z2A').removeClass('selected');
    })

    $('#price-high2low').click(function() {
        $('#price-high2low').addClass('selected');
        $('#price-low2high').removeClass('selected');
        $('#name-A2Z').removeClass('selected');
        $('#name-Z2A').removeClass('selected');
    })

    $('#name-A2Z').click(function() {
        $('#name-A2Z').addClass('selected');
        $('#price-low2high').removeClass('selected');
        $('#price-high2low').removeClass('selected');
        $('#name-Z2A').removeClass('selected');
    })

    $('#name-Z2A').click(function() {
        $('#name-Z2A').addClass('selected');
        $('#price-low2high').removeClass('selected');
        $('#price-high2low').removeClass('selected');
        $('#name-A2Z').removeClass('selected');
    })
}

productCategories()
productCriteria()