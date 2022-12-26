// Jianxin You 20134401
// Hoang-Thi-Thi Cynthia Phan 20220019

console.log("refresh");

function showItems() {

    console.log('haha');
    shoppingList = shoppingCartCount();
    let total_html = "";
    let html_for_one_item = "";
    let price;
    let quantity;
    let totalprice;
    let name;
    console.log(100);
    if (shoppingList.length == 0){
        let shoppingBody = $('.shopping--content');
        shoppingBody.hide();
        document.querySelector('.empty-cart-message').style.display = 'block';
    }
    else{

    for (let i = 0; i < shoppingList.length; i++) {
       // html_for_one_item = '<tr><td><button class="btn--plus-minus" name="delete">X</button></td><td><a class="links" href="product.html">Apple TV</a></td><td class="price">2.00$</td><td><button class="btn--plus-minus" name="minus">-</button></td><td class="column-quantity">1</td><td><button class="btn--plus-minus" name="plus">+</button></td><td class="column-price">2.00$</td></tr>';
        name = shoppingList[i].name;
        if (name == 'user_name'){
            continue;
        }
        quantity = shoppingList[i].quantity;
        price = shoppingList[i].price;
        totalprice = shoppingList[i].totalPrice;
        console.log(name);
        
        
        html_for_one_item = '<tr><td><button class="btn--plus-minus" name="delete">X</button></td>';
        html_for_one_item += '<td><a class="links" href="product.html">' + name + '</a></td>';
        html_for_one_item += '<td class="price">' + price + '</td>';
        html_for_one_item += '<td><button type="button" class="btn--plus-minus" name="minus">-</button></td><td class="column-quantity">';
        html_for_one_item += quantity + '</td><td><button class="btn--plus-minus" name="plus">+</button></td><td class="column-price">';
        html_for_one_item += totalprice + '</td></tr>';

        total_html += html_for_one_item;
    }
}


    console.log('nimade');
    $(".shopping--body").html(total_html);

    let totalPriceElements = $('.column-price');
        
    let total = 0.00;
    totalPriceElements.each(function() {
        let price = parseFloat($(this).text());
    
        if (!isNaN(price)) {
            total += price;
          }
}); 
    
    let totalElement = $('.shopping--total');
    totalElement.html('Total: <strong>' + total + '$</strong>');
    
}


showItems();

    $('.btn--plus-minus[name="minus"]').click(function(event) {
        console.log("hahaha")
        event.preventDefault();

        let itemRow = $(this).closest('tr');
        

        let quantityElement = itemRow.find('.column-quantity');
        let currentQuantity = parseInt(quantityElement.text());

        let newQuantity = currentQuantity - 1;
        quantityElement.text(newQuantity);

        let priceElement = itemRow.find('.price');
        let price = parseFloat(priceElement.text());

// Calculate the total price
        let totalPrice = price * newQuantity;

// Update the .column-price element with the total price
        let totalPriceElement = itemRow.find('.column-price');
        totalPriceElement.text(totalPrice);
        

        let totalElement = $('.shopping--total');
        let totalString = totalElement.find('strong').text();
        let total = parseFloat(totalString);
        let newTotal = total - price;
        totalElement.html('Total: <strong>' + newTotal + '$</strong>');


        if (newQuantity <= 1) {
            $(this).attr('disabled', true);
          }


    });
    

    $('.btn--plus-minus[name="plus"]').click(function(event) {
        console.log("hahaha")
        event.preventDefault();

        let itemRow = $(this).closest('tr');
        let name = itemRow.find('.links').text();

        let quantityElement = itemRow.find('.column-quantity');
        let currentQuantity = parseInt(quantityElement.text());

        let newQuantity = currentQuantity + 1;
        quantityElement.text(newQuantity);

        let priceElement = itemRow.find('.price');
        let price = parseFloat(priceElement.text());

        // Calculate the total price
        let totalPrice = price * newQuantity;

        // Update the .column-price element with the total price
        let totalPriceElement = itemRow.find('.column-price');
        totalPriceElement.text(totalPrice);


        let totalElement = $('.shopping--total');
        let totalString = totalElement.find('strong').text();
        let total = parseFloat(totalString);
        let newTotal = total + price;
        totalElement.html('Total: <strong>' + newTotal + '$</strong>');

    });


    $('.btn--plus-minus[name="delete"]').click(function(event) {
    if (confirm('Do you want to delete the product from the basket?')) {
        let row = $(this).closest('tr');
        let name = row.find('.links').text();
        let priceText = row.find('.column-price');
        let priceForThisItem = parseInt(priceText.text());

        //console.log(name);
        row.remove();
        console.log(row);
        localStorage.removeItem(name);
        showCount();

        if (shoppingList.length == 0){
            let shoppingBody = $('.shopping--content');
            shoppingBody.hide();
            document.querySelector('.empty-cart-message').style.display = 'block';
        }

        let totalElement = $('.shopping--total');
        let totalString = totalElement.find('strong').text();
        let total = parseFloat(totalString);
        let newTotal = total - priceForThisItem;
        totalElement.html('Total: <strong>' + newTotal + '$</strong>');
         
  // The user has confirmed the deletion of the item
    } else {
  // The user has cancelled the deletion of the item
    }

    });


    $('.btn--reset-order').click(function(event) {
        event.preventDefault();
        
        if (confirm('Do you want to remove all products from the cart?')) {
          localStorage.clear();
          showItems();
        }
    });





// 提取local storage里面的元素，进行显示


//'<td><button class="btn--plus-minus" name="delete">X</button></td><td><a class="links" href="product.html">Apple TV</a></td><td class="price">2.00$</td><td><button class="btn--plus-minus" name="minus">-</button></td><td class="column-quantity">1</td><td><button class="btn--plus-minus" name="plus">+</button></td><td class="column-price">2.00$</td>'

// 怎么样添加数据，改变数据