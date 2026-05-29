 import { addCart, loadStorage, cart } from "../cart.js";

 describe('test suit: addCart', () => {

  it('adds an new product of the cart', () => {

    spyOn(localStorage, 'setItem');
  
    spyOn(localStorage, 'getItem').and.callFake(()=> {

  return JSON.stringify([]);

    });

    loadStorage();

    addCart('BEBFL6G45F', 1); 
    expect(cart.length).toEqual(1); 
    expect(cart[0].listingId).toEqual('BEBFL6G45F'); 
    expect(cart[0].quantity).toEqual(1); 
 
  });

  it('adds an existing product of the cart', ()=> {

        spyOn(localStorage, 'setItem');

    spyOn(localStorage, 'getItem').and.callFake(()=> {

      return JSON.stringify([{

listingId: 'BEBFL6G45F',
 quantity: 1,
  deliveryOptionId:'1'       

      }]);
  });

  loadStorage();

addCart('BEBFL6G45F', 1); 
    expect(cart.length).toEqual(1); 
    expect(cart[0].listingId).toEqual('BEBFL6G45F'); 
    expect(cart[0].quantity).toEqual(2); 

  }); 

});

