    import { cart, RemoveFromCart, updateDeliveryDate } from "../cart.js"; 
    import dayjs from 'https://esm.sh/dayjs@1.11.10';
    import { deliveryOptions } from "../data-folder/delivery-options.js";
    import { getProduct } from "../data-folder/listingData.js";
    import { renderPaymentSummary } from "./PaymentSummary.js";

const today =  dayjs();     
const deliveryDate = today.add(7, 'days');
console.log(deliveryDate.format('dddd, MMMM D'));

export function renderDate()  {

    let cartSummaryHTML = '';   
        
    //We are generating the HTML and looping through every listing.         
    cart.forEach((cartitem) => {   

        const listingId = cartitem.listingId;  

         const matchinglisting = getProduct(listingId);
        console.log(matchinglisting); 

        const deliveryOption = cartitem.deliveryOptionsId;

        let deliveryOptionn;

      deliveryOptions.forEach((option) => {
        if (option.id === deliveryOption) {
        deliveryOptionn = option
        };
      });   

       const today = dayjs();
            const deliveryDate = today.add(deliveryOptionn.deliveryDays, 'day');
            const dateString = deliveryDate.format('dddd, MMMM D');

    cartSummaryHTML += `


    <div class="listing-box js-remove-container-${matchinglisting.id}">   
                        <div class="delivery-date"> 
                        Delivery date: ${dateString}
                        </div>  

    <div class="listing-data">  
        <div> 
            <img class="Checkout-images"  src="${matchinglisting.image}">
        </div>   
        <div class="Attribute-data">  
            <div class="product-title">  
            "${matchinglisting.title}"
            </div>  
        <div class="product-price">
        "${matchinglisting.price}"
        </div>  
        <div class="product-quantity">  
            "${cartitem.quantity}" <span class="product-update">update</span> 
        <span class="product-remove js-remove-link"  data-listing-id= "${matchinglisting.id}" >Delete</span>
        </div>
        </div>

    <div class="delivery-checkout">
                <p class="delivery-title">
                    Choose a delivery option 
                </p>
                   ${deliveryOptionsHTML(matchinglisting, cartitem)}
                        </div>
                        </div>
                    </div>  
                </div>
                </div>                         
        `;
    }); 

    function deliveryOptionsHTML(matchinglisting, cartitem) {

        let html = '';

        deliveryOptions.forEach((deliveryOption) => {

            const today = dayjs();
            const deliveryDate = today.add(deliveryOption.deliveryDays, 'day');
            const dateString = deliveryDate.format('dddd, MMMM D');

            const priceString = deliveryOption.price === 0
            ? 'Free' 
            :deliveryOption.price; 
            
            const isChecked = deliveryOption.id === cartitem.deliveryOptionsId;
               
          html+=  `<div class="delivery-option js-deliveryOption"
                 data-listing-id="${matchinglisting.id}"
             data-delivery-option-id="${deliveryOption.id}"
                    >  
                     <div class="delivery-color">  
                    <input type="radio" 
                   ${isChecked ? 'checked' :''} 
                    name="${matchinglisting.id}"> 
                    ${dateString}
                        </div> 
                    <div>  
                    <span class="span-price"> "RS : ${priceString}" </span>
                        </div>  
                    </div>`
        }); 

              return html;  
    }

         document.querySelector('.js-listing-checkout') 
    .innerHTML = cartSummaryHTML; 

    
    document.querySelectorAll('.js-remove-link') 
    .forEach((link) => { 
        link.addEventListener('click', () => { 
        const listingId = link.dataset.listingId; 
        
        RemoveFromCart(listingId);   

    const container = document.querySelector(
            `.js-remove-container-${listingId}`
            
        ); 
 
        container.remove();

        });

    });   

    let cartQuantity = 0; 
        
        cart.forEach((item)=> {   
    cartQuantity += item.quantity;   
        });  

document.querySelector('.js-checkout-quantity')
.innerHTML = `Checkout (${cartQuantity} items)`;
  
document.querySelector('.brand-logo')
.addEventListener('click', () => {
window.location.href = "E-shopping.html"
});  

  // using shorthand property for getting the dataset from the data attribute.
            //instead of using  const  listingId = element.dataset.listingId.

    document.querySelectorAll('.js-deliveryOption').forEach((element) => {
        element.addEventListener('click', ()=> {
            const {listingId, deliveryOptionId} = element.dataset;
            updateDeliveryDate(listingId, deliveryOptionId);
                renderDate();
                renderPaymentSummary();

        });                                                 

    });                                                        
    
};                                                             

