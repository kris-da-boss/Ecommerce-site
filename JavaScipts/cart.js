
export let cart=JSON.parse(localStorage.getItem('cart')) || [
    {
        productId:0,
        quantity:1
    },
    {
        productId:1,
        quantity:1
    }
];


export function localstorage(){
  localStorage.setItem('cart', JSON.stringify(cart))
}

export function addToCart(buttonIndex, quantity){
let matchingItem= cart.find((item)=> item.productId === buttonIndex);
 
if(matchingItem){
   matchingItem.quantity+=quantity;
// console.log('Quantity:',matchingItem.quantity)
}else{
  cart.push(
    {
        productId:buttonIndex,
        quantity:quantity
    }
  )
}
 console.log(cart)
localstorage()
}

export function removeCart(removeItem){
  cart = cart.filter((item)=> item!== removeItem);
  
localstorage()
console.log(cart)
}









