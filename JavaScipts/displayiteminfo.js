import { homeItems } from "./products.js";

export let itemdescription=JSON.parse(localStorage.getItem('itemdescription'))



export function addToDescriptionPage(index){
   let matchingItems= homeItems.find((item)=> item.id===index);
   if(matchingItems){
    itemdescription=matchingItems;
    // console.log(itemdescription)
   }
  displaystorage()
 }

 export function searchInput(value){
let matchingItems=homeItems.find((item)=> item.name===value);
if(matchingItems){
    itemdescription=matchingItems
    console.log(itemdescription)
    window.location.href='iteminfo.html'
}else{
    alert('Product not found');
    return;
}
displaystorage()
 }

function displaystorage(){
    localStorage.setItem('itemdescription', JSON.stringify(itemdescription))
}