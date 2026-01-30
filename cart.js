const cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.querySelector('.cart-listing');

console.log(cart);      

console.log(container);

cart.forEach (item => {
    const div = document.createElement("div"); 
    div.innerHTML = `   
    <img src="${item.image}">   
    <h3>${item.title} </h3>   
     <p> ${item.price}</p>  
    `; 
  
    container.appendChild(div);   
}); 
  