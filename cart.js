    export const cart = [{
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

