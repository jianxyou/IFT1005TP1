// Jianxin You 20134401
// Hoang-Thi-Thi Cynthia Phan 20220019

const addProduct = document.querySelector('#add-product');
let shoppingList;
let totalProducts;

function shoppingCartCount() {
    shoppingList = [];
    for (let i = 0; i < localStorage.length; i++) {
        shoppingList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    return shoppingList;
}

function numberOfProducts() {
    shoppingList = shoppingCartCount();
    totalProducts = 0;
    for (let i = 0; i < shoppingList.length; i++) {
        totalProducts += parseInt(shoppingList[i].quantity);
    }
    return totalProducts;
}

function showCount() {
    shoppingList = shoppingCartCount();
    let count = numberOfProducts();
    let htmlEmptyCart = '<span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x fa-inverse"></i><i class="fa fa-shopping-cart fa-stack-1x"></i></span><span class="no-count"></span>';
    let htmlShoppingCart = '<span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x fa-inverse"></i><i class="fa fa-shopping-cart fa-stack-1x"></i></span><span class="count">count</span>';
    if (shoppingList == 0) {
        $('.shopping-cart').html(htmlEmptyCart);
    } else {
        $('.shopping-cart').html(htmlShoppingCart);
        $('.count').html(count);
    }
}

showCount();