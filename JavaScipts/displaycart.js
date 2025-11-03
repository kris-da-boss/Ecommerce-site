// Display Cart
import {cart, removeCart, localstorage} from "./cart.js";
import { homeItems } from "./products.js";
import { searchInput } from "./displayiteminfo.js";

// Search Products
const searchHome=document.querySelector('.search');
searchHome.addEventListener('keydown', (event)=>{
    if(event.key==='Enter'){
        searchInput(searchHome.value)
    }
   })
   console.log(cart)

function displayCart(){
  let totalsubtotal=0;
  let cartHTML=``;
  cart.forEach((cartItem)=>{
    const getProducts=homeItems.find(item=>item.id===cartItem.productId);
     let subtotal=getProducts.price * cartItem.quantity;
    totalsubtotal+=subtotal;
    
    cartHTML+=`
    <div class='cart-items'>
    <div class="cartImageName">
      <img src="${getProducts.Image}" width="100" height="100">
      <div class="cartNameDiv">
      <p>${getProducts.name}</p>
      <button class="cartRemove" id="cartRemove">Remove</button>
      </div> 
      </div>
      <div class="cartquantity">
        <button class="quantityadd quantityAddButton">+</button>
        <p class="cartQuantity">${cartItem.quantity}</p>
         <button class="quantityadd quantitySubButton">-</button>
        </div>
         <p class="cartPrice">$${(getProducts.price).toLocaleString()}</p>
         <p class="cartPrice cartPriceLoop">$${subtotal.toLocaleString()}</p>
    </div>
    `
  }); 
const cartdisplay=document.getElementById('cart-displayitems')
cartdisplay.innerHTML=cart.length===0?`<p class="emptyCart">No Items Added Yet</p> <a href="index.html">Add Items</a>`:cartHTML;
console.log(totalsubtotal);
//Remove Cart
document.querySelectorAll('.cartRemove').forEach((button, index)=>{
   const buttonindex=cart[index];
    button.addEventListener('click', ()=>{
        removeCart(buttonindex);
       displayCart()
    })
})

const clearCart=document.getElementById('clearcart')
clearCart.addEventListener('click', ()=>{
  cart.length=0;
  displayCart()
  localstorage()
})
    // Cart Summary
    const subtotaldom= document.getElementById('subtotal');
    const deliveryfeedom=document.getElementById('deliveryfee');
    const totaldom=document.getElementById('total');
    let deliveryfee= 20;
    let totalcost=deliveryfee + totalsubtotal;
  totaldom.textContent=`$${totalcost.toLocaleString()}`;
  subtotaldom.textContent= `$${totalsubtotal.toLocaleString()}`;
  deliveryfeedom.textContent=`$${deliveryfee.toLocaleString()}`
 if(cart.length===0){
  deliveryfeedom.textContent='';
  totaldom.textContent='';
  subtotaldom.textContent='';
 };
// add quantity
 const qunatityadd=document.querySelectorAll('.quantityAddButton');
qunatityadd.forEach((button, index)=>{
  const quantityaddIndex=cart[index];
  button.addEventListener('click', ()=>{
    quantityaddIndex.quantity++
    localstorage()
    displayCart()
    console.log(cart)
  })
})

// subtract quantity
const qunatitysub=document.querySelectorAll('.quantitySubButton');
qunatitysub.forEach((button, index)=>{
  const quantitysubIndex=cart[index];
  button.addEventListener('click', ()=>{
    if(quantitysubIndex.quantity<=1){
      return
    }else{
      quantitysubIndex.quantity--
    }
   
    localstorage()
    displayCart()
    console.log(cart)
  })
})
} 
displayCart()







