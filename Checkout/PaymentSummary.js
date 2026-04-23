import { cart } from "../cart.js";
import { deliveryOptions } from "../data-folder/delivery-options.js";
import { getProduct } from "../data-folder/listingData.js";


export function renderPaymentSummary() {

    let ProductPriceRupees = 0;
let deliveryTotal = 0;

cart.forEach((cartItem)=> {
const Product = getProduct(cartItem.listingId);
ProductPriceRupees = ProductPriceRupees + Product.price * cartItem.quantity;

console.log(ProductPriceRupees);

deliveryOptions.forEach((Option) => {
    if (Option.id === cartItem.deliveryOptionsId) {
        deliveryTotal = Option.price;
    }
});

const subtotal = ProductPriceRupees + deliveryTotal;
const tax = subtotal * 0.18;
const finaltotal = subtotal + tax;


document.querySelector('.js-order-summary')
.innerHTML =  ` <div class="payment-block">
            Order Summary             
        </div> 

        <div class="payment-summary">
            <div>
           items(3) :   
            </div>
            <div class="order-result">
               Rs : 2398    
            </div>
            </div>

            <div class="payment-summary">
           <div>
         Shipping & handling :
           </div>
           <div class="order-result">
            Rs : 50
           </div>
           </div>

           <div class="payment-summary">
            <div>
            Total before Tax : 
           </div>
           <div class="order-result">
            Rs: 2398
           </div>
           </div>

           <div class="payment-summary">
        <div>
        Estimated Tax : 
        </div>
        <div class="order-result">
        Rs: 10
        </div>
</div>
        <div class="payment-summary payment-summary-border">
            <div>
   Order total : 
            </div> 
            <div class="order-result">
Rs : 2458
            </div>
<button class="order-button"> 
    Place your order
</button>

        </div>  `

}); 

}; 

