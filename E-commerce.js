//below we are saving the listing data which is called data structre.

    export const Listing = [{
    id: "BEBFL6G45F",
image: 'images/1000015491114-Pink-PEACH-1000015491114_01-2100.jpg',
price: 999,
title: 'Men Printed Regular - Fi T - shirt',
}, {
    id: "BHEHDLUY67",
    image: 'images/1000016225533-Blue-BLUE-1000016225533_01-2100.jpg',
    price: 1199,
    title: 'Men Printed - Loose - FIT T - shirt',
}, {
    id: "NHSIE67GHG",
    image: 'images/1000016303470-Red-RED-1000016303470_01-2100.jpg',
    price: 899,
    title:  'Men checked Loose fit - T - shirtz'
}, {
    id: "NHDBS678HY",
    image: 'images/1000016041042-Blue-BLUE-1000016041042_01-2100.jpg',
    price: 1049,
    title: 'Men Loose fit collar Printed shirt'
},{
    id: "BHG5656HJ6",
    image: 'images/1000016020352-White-WHITE-1000016020352_01-2100.jpg',
    price:  1000,
    title: 'Men striped Regular - Fit T - shirt'
}, {
    id : "NDJ6753F4G",
    image: 'images/WHITE-SHIRT.jpg',
    price: 1100,
    title: 'Men checked regular - Fit T - shirt'
}, 
{
    id: "BDHKE678SD",
image: 'images/1000015813210-Blue-BLUE-1000015813210_01-2100.jpg"',
price: 799,
title: 'Men checked casual shirt - loose fit.'
},
{
  id: "BDHKE78HJS",
image: 'images/images-9.jpg"',
price: 899,
title: 'Men Brown casual shirt - loose fit.' 
}, 
{
    id: "BDHKE78HJM",
image: 'images/images-9.jpg"',
price: 899,
title: 'Men Brown casual shirt - loose fit.'
},
{
    id: "BDHKE78HJN",
image: 'images/images-9.jpg"',
price: 899,
title: 'Men Brown casual shirt - loose fit.'
}]; 

import {cart, addCart } from '../cart.js';

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

console.log(cartQuantity);   
      
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