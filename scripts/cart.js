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
    myTotalPrice.innerText = totalPriceValue;

    //Coupon code
    const btnApplyDiscount = document.getElementById('btn-apply-discount')
    const myDiscountCouponText = document.getElementById('my-discount-coupon');
    const myDiscountCoupon = myDiscountCouponText.value;
    if(totalPriceValue >= 200){
        btnApplyDiscount.removeAttribute('disabled');
    }
    else{
        btnApplyDiscount.setAttribute('disabled', true);
    }

    //discount 
    const myDiscountValue = document.getElementById('my-discount');
    const myDiscountString = myDiscountValue.innerText;
    let myDiscount = parseFloat(myDiscountString);

    const myGrandTotalValue = document.getElementById('my-grand-total');
    const myGrandTotalString = myGrandTotalValue.innerText;
    let myGrandTotal = parseFloat(myGrandTotalString);

    document.getElementById('btn-apply-discount').addEventListener('click', function(){
        const inputFieldValue = document.getElementById('my-discount-coupon');
        const inputField = inputFieldValue.value;
        if(inputField === 'SELL200'){
            myDiscount = totalPriceValue * 0.2;
            let myDiscountUptoTwoDecimal = myDiscount.toFixed(2);
            myDiscountValue.innerText = myDiscountUptoTwoDecimal;

            myGrandTotal = totalPriceValue - myDiscountUptoTwoDecimal;
            let myGrandTotalUptoTwoDecimal = myGrandTotal.toFixed(2);
            myGrandTotalValue.innerText = myGrandTotalUptoTwoDecimal;

        }
        else{
            myDiscount = 0;
            let myDiscountUptoTwoDecimal = myDiscount.toFixed(2);
            myDiscountValue.innerText = myDiscountUptoTwoDecimal;
            myGrandTotal = totalPriceValue;
            myGrandTotalValue.innerText = myGrandTotal;
        }
    })

    //make purchase
    const btnMyPurchase = document.getElementById('btn-my-purchase');
    function makeMyPurchase(){
        if(totalPriceValue > 0){
            btnMyPurchase.disabled = false;
            myGrandTotalValue.innerText = totalPriceValue;
        }
        else{
            btnMyPurchase.disabled = true;
        }
    }
    makeMyPurchase();



    
    
}