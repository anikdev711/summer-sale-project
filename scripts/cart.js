let totalPrice = 0;
function goToMyCart(target){

    const myCartItemsContainer = document.getElementById('my-cart-items');
    const selectedItemName = target.parentNode.parentNode.childNodes[1].innerText;
    // console.log(selectedItemName);
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.innerText = selectedItemName;
    ul.appendChild(li);
    myCartItemsContainer.appendChild(ul);

    const myItemsPrice = target.parentNode.parentNode.childNodes[3].innerText.split(" ")[0];
    // console.log(myItemsPrice);
    totalPrice = parseFloat(totalPrice) + parseFloat(myItemsPrice);
    let totalPriceValue = totalPrice.toFixed(2)
    // console.log(totalPriceValue);

    let myTotalPrice = document.getElementById('my-total-price');
    // console.log(myTotalPrice.innerText = totalPriceValue);
    myTotalPrice.innerText = totalPriceValue;
    // console.log(myTotalPrice.innerText);
    
    
}