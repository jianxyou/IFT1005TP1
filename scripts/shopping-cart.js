// Jianxin You 20134401
// Hoang-Thi-Thi Cynthia Phan 20220019

function showItems() {
    shoppingList = shoppingCartCount();
    let total_html = "";
    let html_for_one_item = "";
    let price;
    let quantity;
    let totalprice;
    let name;
    for (let i = 0; i < shoppingList.length; i++) {
       // html_for_one_item = '<tr><td><button class="btn--plus-minus" name="delete">X</button></td><td><a class="links" href="product.html">Apple TV</a></td><td class="price">2.00$</td><td><button class="btn--plus-minus" name="minus">-</button></td><td class="column-quantity">1</td><td><button class="btn--plus-minus" name="plus">+</button></td><td class="column-price">2.00$</td></tr>';
        name = shoppingList[i].name;
        quantity = shoppingList[i].quantity;
        price = shoppingList[i].price;
        totalprice = quantity * price;
        
        
        html_for_one_item = '<tr><td><button class="btn--plus-minus" name="delete">X</button></td>';
        html_for_one_item += '<td><a class="links" href="product.html">' + name + '</a></td>';
        html_for_one_item += '<td class="price">' + price + '</td>';
        html_for_one_item += '<td><button class="btn--plus-minus" name="minus">-</button></td><td class="column-quantity">';
        html_for_one_item += quantity + '</td><td><button class="btn--plus-minus" name="plus">+</button></td><td class="column-price">';
        html_for_one_item += totalprice + '</td></tr>';

        total_html += html_for_one_item;
    }

    $(".shopping--body").html(total_html);
    
}

showItems();


// 提取local storage里面的元素，进行显示


//'<td><button class="btn--plus-minus" name="delete">X</button></td><td><a class="links" href="product.html">Apple TV</a></td><td class="price">2.00$</td><td><button class="btn--plus-minus" name="minus">-</button></td><td class="column-quantity">1</td><td><button class="btn--plus-minus" name="plus">+</button></td><td class="column-price">2.00$</td>'

// 怎么样添加数据，改变数据