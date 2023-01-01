const nameString = localStorage.getItem('name');
let namee = JSON.parse(nameString).name;
console.log(namee);
document.getElementById('nameSpan').innerHTML = namee;




const confir_id_string = localStorage.getItem('confirmation_id');
console.log("zhendema")
console.log(confir_id_string);
if (confir_id_string == null){
    localStorage.setItem('confirmation_id',JSON.stringify('00000'));
}

const confir = localStorage.getItem('confirmation_id');
let id = parseInt(JSON.parse(confir));
console.log(confir);
id += 1;
console.log('haha');
console.log(id);
document.getElementById('idSpan').innerHTML = id;
localStorage.setItem("confirmation_id",JSON.stringify(id));


for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) != 'confimation_id'){
        localStorage.removeItem(localStorage.key(i));
    }
}



function shoppingCartCount() {
    shoppingList = [];
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) != 'name' & localStorage.key(i) != 'confirmation_id'){
            shoppingList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
        
    }
    return shoppingList;
}

function numberOfProducts() {
    shoppingList = shoppingCartCount();
    totalProducts = 0;
    for (let i = 0; i < shoppingList.length; i++) {

        console.log(shoppingList[i])
        totalProducts += parseInt(shoppingList[i].quantity);
    }
    return totalProducts;
}


function showCount() {
    shoppingList = shoppingCartCount();
    let count = numberOfProducts();
    console.log(count);
    let htmlEmptyCart = '<span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x fa-inverse"></i><i class="fa fa-shopping-cart fa-stack-1x"></i></span><span class="no-count"></span>';
    let htmlShoppingCart = '<span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x fa-inverse"></i><i class="fa fa-shopping-cart fa-stack-1x"></i></span><span class="count">count</span>';
    if (shoppingList.length == 0) {
        $('.shopping-cart').html(htmlEmptyCart);
    } else {
        $('.shopping-cart').html(htmlShoppingCart);
        $('.count').html(count);
    }
}

function showCount_version2(count) {
    shoppingList = shoppingCartCount();
    let htmlEmptyCart = '<span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x fa-inverse"></i><i class="fa fa-shopping-cart fa-stack-1x"></i></span><span class="no-count"></span>';
    let htmlShoppingCart = '<span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x fa-inverse"></i><i class="fa fa-shopping-cart fa-stack-1x"></i></span><span class="count">count</span>';
    if (shoppingList.length == 0) {
        $('.shopping-cart').html(htmlEmptyCart);
    } else {
        $('.shopping-cart').html(htmlShoppingCart);
        $('.count').html(count);
    }
}

showCount();