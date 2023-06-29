
const addToShoppingCartButtons = document.querySelectorAll('.buy');
const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');
const d = document;

d.addEventListener('click', e => {
  if(e.target.matches('.panel-btn') || e.target.matches(`${'.panel-btn *'}`)){
    d.querySelector('.panel').classList.toggle('is-active');
    d.querySelector('.panel-btn').classList.toggle('is-active');
}});

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', () => {
    comprarButtonClicked();
    d.querySelector('.panel').classList.remove('is-active');
    
});

addToShoppingCartButtons.forEach((addTocartButton) => {
    addTocartButton.addEventListener('click', addToCartClicked)
});



function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.card');

    const tittle = item.querySelector('dt').textContent;
    const price = item.querySelector('dd').textContent;
    const img = item.querySelector('img').src;



    addItemToShoppingCart(tittle, price, img)

}

function addItemToShoppingCart(tittle, price, img) {

    const elementsTitle = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle')

    for (let i = 0; i < elementsTitle.length; i++) {
        if (elementsTitle[i].innerText === tittle) {
            let elementQuantity = elementsTitle[
                i
            ].parentElement.parentElement.parentElement.querySelector(
                '.shoppingCartItemQuantity'
            );
            elementQuantity.value++;
            $('.toast').toast('show');
            updateShoppingCartTotal();
            return;
        }
    }

    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = `
     <div class="row shoppingCartItem">
     <div class="col-6">
         <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
             <img src=${img} class="shopping-cart-image" style="width: 80px; height: auto;">
             <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${tittle}
             </h6>
         </div>
     </div>
     <div class="col-2">
         <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
             <p class="item-price mb-0 shoppingCartItemPrice">${price}</p>
         </div>
     </div>
     <div class="col-4">
         <div class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
             <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number" value="1" style='width:30px;'>
             <button class="btn btn-danger buttonDelete" type="button" style="width:31px; height:32px; text-align:center; font-size:9px;">X</button>
         </div>
     </div>
 </div> `;

    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);

    shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem);
    shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged);
    updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
    let total = 0;

    const shoppingCardTotal = document.querySelector('.shoppingCartTotal');
    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');


    shoppingCartItems.forEach((shoppingCartItem) => {
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice');
        const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$', ''));

        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value)

        total += shoppingCartItemPrice * shoppingCartItemQuantity;

    })

    shoppingCardTotal.innerHTML = `${total.toFixed(2)}$`
}


function removeShoppingCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    updateShoppingCartTotal();
}

function quantityChanged(event) {
    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null;
    updateShoppingCartTotal()
}

function comprarButtonClicked() {
    shoppingCartItemsContainer.innerHTML = '';
    alert('Felicidades por su compra')
    updateShoppingCartTotal();
}
