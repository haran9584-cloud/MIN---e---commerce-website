//below we are saving the listing data which is called data structre.

const Listing = [{
    id: "BEBFL6G45F",
image: 'images/1000015491114-Pink-PEACH-1000015491114_01-2100.jpg',
price: 999,
title: 'Men Printed Regular - Fi T - shirt',
}, {
    id: "BHEHDLUY67",
    image: 'images/1000016225533-Blue-BLUE-1000016225533_01-2100.jpg',
    price: 1199,
    title: 'Men Printed Hauwei - Loose - FIT T - shirt',
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
}];  

let listingHTML = '';

Listing.forEach((Listing) => { 
  listingHTML = listingHTML + 
  `<div class="listing-detail">  
    <div class="div-image-1"> 
<img class="image-1" src="${Listing.image}"> 
    </div>  
    <div class="listing-info-grid"> 
 <p class="listing-price"> 
     &#8377 <span class="span-price">${Listing.price}</span>   
    </p>  
    <p class="listing-title">       
        ${Listing.title}    
    </p>  
     <button class="product-button  js-click-cart"
     data-listing-id = "${Listing.id}"
          >   
        Add to cart   
    </button>  
    </div>  
    </div>`;    
}) 

document.querySelector('.product-detail-grid')
.innerHTML = listingHTML;

 document.querySelectorAll('.js-click-cart')
.forEach((button)=> {
    button.addEventListener('click', ()=> {

        const listingId = button.dataset.listingId;

        let matchingItem;

        cart.forEach((item)=> {
if (listingId === item.listingId) {
    matchingItem = item;
}

 });

if (matchingItem) {
 matchingItem.quantity += 1;
}

else {
     cart.push ({
        listingId: listingId,
        quantity: 1
     });

}

let cartQuantity = 0; 
 
cart.forEach((item)=> { 
cartQuantity += item.quantity; 
 
document.querySelector('.js-cartQuantity') 
.innerHTML = cartQuantity; 
  
});
 
console.log(cartQuantity);   
   
     console.log(cart); 
    });

});