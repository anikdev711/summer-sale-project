let totalPrice = 0;
function goToMyCart(target) {

    // total price 
    const myCartItemsContainer = document.getElementById('my-cart-items');
    const selectedItemName = target.parentNode.parentNode.childNodes[1].innerText;
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.innerText = selectedItemName;
    ul.appendChild(li);
    myCartItemsContainer.appendChild(ul);

    const myItemsPrice = target.parentNode.parentNode.childNodes[3].innerText.split(" ")[0];
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
document.getElementById('btn-my-purchase').addEventListener('click', function () {
    const confirmPurchase = document.getElementById('confirm-purchase');
    const div = document.createElement('div');
    div.innerHTML = `
    <!-- Open the modal using ID.showModal() method -->
    <button class="btn btn-success text-lg text-white font-bold w-full" onclick="my_modal_5.showModal()">Confirm Purchase</button>
    <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
      <form method="dialog" class="modal-box">
        <img class="ml-28 md:ml-36 lg:ml-40" src="images/congo.png" alt="congo-image"/>
        <h3 class="font-bold text-4xl text-center">Congratulations</h3>
        <p class="py-4 text-center">You have purchased the product</p>
        <div class="modal-action">
          <!-- if there is a button in form, it will close the modal -->
          <button id="btn-go-home" class="btn btn-primary text-white text-center">Go Home</button>
        </div>
      </form>
    </dialog>
    `
    confirmPurchase.appendChild(div);
    document.getElementById('btn-go-home').addEventListener('click', function(){
        window.location.href = 'index.html';
    })
})