    export let cart = [{
        listingId: 'BEBFL6G45F',
        quantity: 2 
    }, 
    {
        listingId: 'BHEHDLUY67',
        quantity: 4
    }]; 

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
            quantity: selectValue 
        }); 
    } 
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

    console.log("updated cart inside the function:", cart); 

}
