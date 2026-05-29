import { cart, loadStorage } from "../../cart.js";
import { renderDate } from "../../Checkout/OrderSummary.js";

describe('test suit : renderorderSummary', ()=> {

it('displays the cart', ()=> {

document.querySelector('.js-test-container')
.innerHTML = `<div class="js-listing-checkout"></div>
<div class="js-checkout-quantity"></div>
<div class="brand-logo"></div>
`;
               const productId1 = 'BEBFL6G45F';
               const productId2 = 'BHEHDLUY67';

spyOn(localStorage, 'setItem');

    spyOn(localStorage, 'getItem').and.callFake(()=> {

      return JSON.stringify([{
        listingId: productId1,
        quantity: 2,
        deliveryOptionsId: '1'
    }, 
    {
        listingId: productId2,
        quantity: 4,
        deliveryOptionsId: '2'
    }]); 
    
});

loadStorage();

renderDate();

expect(document.querySelectorAll('.js-item-container').length).toEqual(2);
expect(document.querySelector(`.js-product-quantity-${productId1}`).
innerText).toContain('quantity: 2');


});

});
