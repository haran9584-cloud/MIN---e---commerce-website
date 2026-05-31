//below we are saving the listing data which is called data structre.

import {cart, addCart } from '../cart.js';
import {Listing} from '../data-folder/listingData.js';


let listingHTML = '';

Listing.forEach((Listing) => { 
  listingHTML = listingHTML + 

  
  `<div class="listing-detail">     

      <div class="cart-listing"></div>

    <div class="div-image-1"> 
<img class="image-1" src="${Listing.image}"> 
    </div>  
    <div class="listing-info-grid"> 
    <div>
 <p class="listing-price"> 
     &#8377 <span class="span-price">${Listing.price}</span>   
    </p>  
    <p class="listing-title">       
        ${Listing.title}    
    </p>  
    </div>

<div>
    <select class="quantity-selector  js-quantity-listener-${Listing.id}">
    <option selected value="1">1</option>
    <option  value="2">2</option>
    <option  value="3">3</option>
    <option  value="4">4</option>
    <option  value="5">5</option>
    <option  value="6">6</option>
    <option  value="7">7</option>
    <option  value="8">8</option>
    <option  value="9">9</option>
    <option  value="10">10</option>
    </select>
</div>

     <button class="product-button  js-click-cart"
     data-listing-id = "${Listing.id}">   
        Add to cart   
    </button>
    
    <div class="adding-cart-dom js-added-DOM-${Listing.id}">
    <p > </p>
    </div>
    </div>  
    
    </div>`;    
}) 

document.querySelector('.product-detail-grid')
.innerHTML = listingHTML;  

function updateCartQuantity ( ) {   
        let cartQuantity = 0; 
    
    cart.forEach((item)=> {   
cartQuantity += item.quantity;  

document.querySelector('.js-cartQuantity') 
.innerHTML = cartQuantity;   

});  
      
     console.log(cart); 
}

 document.querySelectorAll('.js-click-cart') 
.forEach((button)=> { 
    button.addEventListener('click', ()=> { 
 
        const listingId = button.dataset.listingId;  

             console.log('heybuddy'); 

       let intervalID; 

   document.querySelector(`.js-added-DOM-${listingId}`).innerHTML = `✅Added`; 

   if (setTimeout(()=>{ 
clearTimeout(intervalID); 
document.querySelector(`.js-added-DOM-${listingId}`).innerHTML= ``; 
   },1000)); 

   else {  
    clearTimeout(intervalID);   
   }  
//getting quantity for this product  


 const selectElement = document.querySelector(`.js-quantity-listener-${listingId}`)

        const selectValue = Number(selectElement.value);

        addCart(listingId, selectValue);

         updateCartQuantity();  
        
    });  

    document.querySelector('.cart-icon')
    .addEventListener('click', () => {
        window.location.href = "checkout.html";
    });
 
}); 
