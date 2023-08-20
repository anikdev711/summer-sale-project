let totalPrice = 0;
function goToMyCart(target) {

    // total price 
    const myCartItemsContainer = document.getElementById('my-cart-items');
    const selectedItemName = target.childNodes[5].childNodes[1].innerText;
    const count = myCartItemsContainer.childElementCount;
    const ol = document.createElement('ol');
    const li = document.createElement('li');
    li.innerText = selectedItemName;
    ol.innerHTML = `${count + 1}. ${li.innerText}`;
    myCartItemsContainer.appendChild(ol);

    const myItemsPrice = target.childNodes[5].childNodes[3].innerText.split(" ")[0];
    totalPrice = parseFloat(totalPrice) + parseFloat(myItemsPrice);
    let totalPriceValue = totalPrice.toFixed(2)
    let myTotalPrice = document.getElementById('my-total-price');
    myTotalPrice.innerText = totalPriceValue;

    //Coupon code and apply button enable and disable condition
    const btnApplyDiscount = document.getElementById('btn-apply-discount')
    const myDiscountCouponText = document.getElementById('my-discount-coupon');
    const myDiscountCoupon = myDiscountCouponText.value;
    if (totalPriceValue >= 200) {
        btnApplyDiscount.removeAttribute('disabled');
    }
    else {
        btnApplyDiscount.setAttribute('disabled', true);
    }

    //discount and grand total 
    const myDiscountValue = document.getElementById('my-discount');
    const myDiscountString = myDiscountValue.innerText;
    let myDiscount = parseFloat(myDiscountString);

    const myGrandTotalValue = document.getElementById('my-grand-total');
    const myGrandTotalString = myGrandTotalValue.innerText;
    let myGrandTotal = parseFloat(myGrandTotalString);

    document.getElementById('btn-apply-discount').addEventListener('click', function () {
        const inputFieldValue = document.getElementById('my-discount-coupon');
        const inputField = inputFieldValue.value;
        if (inputField === 'SELL200') {
            myDiscount = totalPriceValue * 0.2;
            let myDiscountUptoTwoDecimal = myDiscount.toFixed(2);
            myDiscountValue.innerText = myDiscountUptoTwoDecimal;

            myGrandTotal = totalPriceValue - myDiscountUptoTwoDecimal;
            let myGrandTotalUptoTwoDecimal = myGrandTotal.toFixed(2);
            myGrandTotalValue.innerText = myGrandTotalUptoTwoDecimal;

        }
        else {
            myDiscount = 0;
            let myDiscountUptoTwoDecimal = myDiscount.toFixed(2);
            myDiscountValue.innerText = myDiscountUptoTwoDecimal;
            myGrandTotal = totalPriceValue;
            myGrandTotalValue.innerText = myGrandTotal;
        }
    })

    //make purchase button enable and disable condition
    const btnMyPurchase = document.getElementById('btn-my-purchase');
    function makeMyPurchase() {
        if (totalPriceValue > 0) {
            btnMyPurchase.removeAttribute('disabled');
            myGrandTotalValue.innerText = totalPriceValue;
        }
        else {
            btnMyPurchase.setAttribute('disabled', true);
        }
    }
    makeMyPurchase();
}

//modal 
const btnMyPurchase = document.getElementById('btn-my-purchase');
const myPurchaseConfirmationModal = document.getElementById('confirm-purchase');

function confirmMyPurchase() {
    myPurchaseConfirmationModal.classList.add("active");
}

btnMyPurchase.addEventListener("click", confirmMyPurchase);

document.getElementById('btn-go-home').addEventListener('click', function () {
    window.location.href = 'index.html';
})