import { cart } from "./cart.js"; 
import { Listing } from "./listingData.js"; 

let cartSummaryHTML = ''; 
    
//We are generating the HTML and looping through every listing.
cart.forEach((cartitem) => {   

    const listingId = cartitem.listingId;

    let matchinglisting;  

    Listing.forEach((Listings) => { 
        if (Listings.id === listingId) {   
            matchinglisting = Listings 
        } 
        
    });  
        
     console.log(matchinglisting); 
        
cartSummaryHTML += ` <div>   
                    <div class="delivery-date"> 
                    Delivery date: Tuesday, June 21 
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
        "${cartitem.quantity}" <span class="product-update">update</span> <span class="product-delete">Delete</span>
    </div>
    </div>

   <div class="delivery-checkout">
            <p class="delivery-title">
                Choose a delivery option 
            </p>
                <div class="delivery-option">  
                    <div class="delivery-color"> 
                        <input type="radio" name="${matchinglisting.id}"> 
                Tuesday, June 21, 
                    </div> 
                 <div> 
                <span class="span-price"> Free shipping </span>
                    </div> 
                </div> 
                <div class="delivery-option">
                    <div class="delivery-color">
                  <input type="radio" name="${matchinglisting.id}">
                Wednesday, June 15,
                    </div> 
                 <div> 
                <span class="span-price"> Rs: 80 - shipping </span>
                    </div>    
                </div> 
                <div class="delivery-option">
                    <div class="delivery-color">
                         <input type="radio" name="${matchinglisting.id}">
                    Monday, June 13,
                    </div> 
                    <div>
                <span class="span-price"> Rs: 120 - shipping </span>
                        </div>
                      </div>
                    </div>
                  </div> 
               </div>
            </div>
    `;
});

console.log(cartSummaryHTML);   

document.querySelector('.js-listing-checkout')
.innerHTML = cartSummaryHTML;