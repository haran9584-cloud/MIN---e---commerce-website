import { cart } from "../cart.js";
import { deliveryOptions } from "../data-folder/delivery-options.js";
import { getProduct } from "../data-folder/listingData.js";

export function renderPaymentSummary() {

 let ProductPriceRupees = 0;

let deliveryTotal = 0;

cart.forEach((cartItem)=> {
  const Product = getProduct(cartItem.listingId);
 ProductPriceRupees = ProductPriceRupees + Product.price * cartItem.quantity;

 console.log('cartItem;',  cartItem);
 console.log('product:', Product);
 console.log('product Price:', Product.price);
 console.log('cartItem Quantity', cartItem.quantity);

deliveryOptions.forEach((Option) => {
    if (Option.id === cartItem.deliveryOptionsId) {
        deliveryTotal += Option.price;
    }
});

const subtotal = ProductPriceRupees;
const shippingcost = deliveryTotal;
const totalBeforeTax = subtotal + shippingcost;
const tax = totalBeforeTax * 0.18;
const finaltotal = totalBeforeTax + tax;

let cartQuantity = 0; 
        
        cart.forEach((item)=> {   
    cartQuantity += item.quantity;   
        });  

document.querySelector('.js-order-summary')
.innerHTML =  ` <div class="payment-block">
            Order Summary             
        </div> 

        <div class="payment-summary">
            <div>
           items(${cartQuantity}) :   
            </div>
            <div class="order-result">
               Rs : ${subtotal.toLocaleString('en-IN')}
            </div>
       </div>   
            <div class="payment-summary">
           <div>
         Shipping & handling : 
           </div>
           <div class="order-result">
            Rs : ${shippingcost.toLocaleString('en-IN')}
           </div>
           </div>

           <div class="payment-summary">
            <div>
            Total before Tax : 
           </div>
           <div class="order-result">
            Rs: ${totalBeforeTax.toLocaleString('en-IN')}
           </div>
           </div>

           <div class="payment-summary">
        <div>
        Estimated Tax : 
        </div>
        <div class="order-result">
        Rs : ${Math.round(tax).toLocaleString('en-IN')}
        </div>
</div>
        <div class="payment-summary payment-summary-border">
            <div>
    Order total : 
            </div> 
            <div class="order-result">
 Rs : ${Math.round(finaltotal).toLocaleString('en-IN')}
            </div>
<button class="order-button"> 
    Place your order
</button>
        </div>`

}); 

}; 




