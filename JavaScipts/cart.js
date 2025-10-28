
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

export function addToCart(buttonIndex){
let matchingItem= cart.find((item)=> item.productId === buttonIndex);
 console.log(matchingItem)
 console.log(cart)
if(matchingItem){
   matchingItem.quantity+=1;
// console.log('Quantity:',matchingItem.quantity)


}else{
  cart.push(
    {
        productId:buttonIndex,
        quantity:1
    }
  )
 
}
localstorage()
}

export function removeCart(removeItem){
  cart =cart.filter((item)=> item!== removeItem);
  
localstorage()
console.log(cart)
}









