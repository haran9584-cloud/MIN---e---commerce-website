    //Using localStorge to get the value from the cart in the array from, 
   //so we used JSON.parse.
      
  export let cart;

  loadStorage();

 export function loadStorage() {

cart = JSON.parse(localStorage.getItem('cart'));
    
    if (!cart) {    

cart = [{
        listingId: 'BEBFL6G45F',
        quantity: 2,
        deliveryOptionsId: '1'
    }, 
    {
        listingId: 'BHEHDLUY67',
        quantity: 4,
        deliveryOptionsId: '2'
    }]; 

    }; 

};

//Function to set the localStorage.
export function cartStorage() {

    localStorage.setItem('cart', JSON.stringify(cart));

}

//Adding listing to the cart and exporting
export function addCart (listingId, selectValue) {
                let matchingItem; 
        
            cart.forEach((item)=> {     
    if (listingId === item.listingId) {  
        matchingItem = item;
        
    }  

    });  

    if (matchingItem) {
    matchingItem.quantity += selectValue; 
    }  
    
    else {  
        cart.push ({  
         listingId: listingId,
         quantity: selectValue,
         deliveryOptionsId: '1'
        });
    } 
//Setting the localstorage while adding the value in the cart.
cartStorage();

    } 

    //Here we are adding the listing which is not equal to the listingId which,
//automatically make the clicked listing to be removed from the cart.

export function RemoveFromCart(listingId) {  
 
    const RemoveCart = [];

    cart.forEach((cartitem) => { 
        if(cartitem.listingId !== listingId) { 
            RemoveCart.push(cartitem);           
                                    
        }   

    }); 

    cart = RemoveCart;   

//Setting the localstorage while removing the listing from the cart.   

    cartStorage();  
 
}

export function updateDeliveryDate (listingId, deliveryOptionsId)  {

     let matchingItem; 

     cart.forEach((cartItem) =>{
if (listingId === cartItem.listingId) {
matchingItem = cartItem;
}
 });

matchingItem.deliveryOptionsId = deliveryOptionsId;

cartStorage(); 

};


export function updateQuantity (listingId, newQuantity) {

let matchingItem;


console.log('listing ID comes in:', listingId);
console.log('cart:', cart);

cart.forEach((cartItem) => {

if (listingId === cartItem.listingId) {

matchingItem = cartItem;

}

});

console.log('matchingitem out:', matchingItem);


matchingItem.quantity = newQuantity;  

cartStorage();  

}  