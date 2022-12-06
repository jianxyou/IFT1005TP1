// Jianxin You 20134401
// Hoang-Thi-Thi Cynthia Phan 20220019

const main = document.querySelector('.products--items');
const url = './data/products.json';

onload = () => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
        const data = JSON.parse(xhr.responseText);
        loadProducts(data);
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
    main.innerHTML = html;
}