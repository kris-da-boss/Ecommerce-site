import { addToCart ,cart} from "./cart.js";
import { homeItems } from "./products.js";
import { addToDescriptionPage, searchInput} from "./displayiteminfo.js";

const animePractice= document.querySelector('.animation-practice')
let displayanime=true;
document.addEventListener('keydown', (e)=>{
 
if(e.key==='y'){
  if(displayanime){
   animePractice.style.display='block';
    displayanime=false
  }else{
   animePractice.style.display='none';
   displayanime=true;
  }
}
homeItemFunction()
})

//Search Items
const searchHome=document.querySelector('.search');
searchHome.addEventListener('keydown', (event)=>{
  if(event.key==='Enter'){
      searchInput(searchHome.value)
  }
 } )


let indexNum=0;

setInterval(()=>{update()}, 4000);
function update(){
   let homeImageInd=homeItems[indexNum];
   indexNum=Math.floor(Math.random() * (homeItems.length -13));
  display(homeImageInd)
}
update();


function display(homeImag){
   document.getElementById('headerImages').innerHTML= `<a href="iteminfo.html" class="description"><img src="${homeImag.Image}" class="homeImag">
   </a>`;

   const descriptionLink=document.querySelectorAll('.description');
   
   descriptionLink.forEach((link)=>{
    link.addEventListener('click',()=>{
        addToDescriptionPage(homeImag.id)
    })
   })
}

function homeItemFunction(){
//nichefragrance
let nichefragenceHTML=``;
let newInHTML=``;
let FeaturedHTML=``;
let bestsellersHTML=``;
let dealHTML=``;

homeItems.forEach((item)=>{ 
  
    if(item.category==='nicheFragrance'){
        nichefragenceHTML+=`    
        <div class='nicheItems'> 
          <a href="iteminfo.html" class="description1"> 
        <img src="${item.Image}" height='100' width='100'>
        <p class='productName'>${item.name} </p> 
        <p class='productPrice'>$${item.price}</p>
         </a>
        <div class='cartButton'> 
        <button class='productButton addToCart'>Add to Cart</button> 
      <button class='Button addToCartButton'>+</button>
        <p class='incDecNum'>${item.quantity}</p>
        <button class='Button subtractFromCartButton'>-</button>
        </div>
        </div> 
       
           `
    }
    
    if(item.category==='newIn'){
       newInHTML+=`
        <div class='newinItems'> 
        <a href="iteminfo.html" class="description1"> 
        <img src="${item.Image}" height='100' width='100' class="image">
        <p class='newinproductName'>${item.name} </p> 
        <p class='productPrice'> $${item.price}</p>
         </a>
        <div class='cartButton'> 
        <button class='productButton addToCart'>Add to Cart</button> 
       <button class='Button addToCartButton'>+</button>
        <p class='incDecNum'>${item.quantity}</p>
        <button class='Button subtractFromCartButton'>-</button>
        </div>
        </div> 
       
       `
    }
    if(item.category==='featured'){
        FeaturedHTML+=`
        <div class='newinItems'> 
          <a href="iteminfo.html" class="description1"> 
        <img src="${item.Image}" height='100' width='100' class="image">
        <p class='newinproductName'>${item.name} </p> 
        <p class='productPrice'>$${item.price}</p>
         </a>
        <div class='cartButton'> 
        <button class='productButton addToCart'>Add to Cart</button> 
       <button class='Button addToCartButton'>+</button>
        <p class='incDecNum'>${item.quantity}</p>
        <button class='Button subtractFromCartButton'>-</button>
        </div>
        </div> 
         `
    }
    //Searchinput
  
} )
document.getElementById('mainProducts').innerHTML=nichefragenceHTML;
document.getElementById('newIn').innerHTML=newInHTML;
document.getElementById('featured').innerHTML=FeaturedHTML;

function updateCartQuantity(){
    let cartQuantity=0;
    cart.forEach((cartItem)=>{         
    cartQuantity+=cartItem.quantity;
    });

    document.querySelector(".cart-icon").innerHTML=cartQuantity;
  }

  // Add Items to cart
const addToCartButton=document.querySelectorAll('.addToCart');
  
addToCartButton.forEach((button, index)=>{
    button.addEventListener('click', ()=>{ 
      const items=homeItems[index].quantity
    addToCart(index, items);
    updateCartQuantity()

       button.textContent='Added'
      setTimeout(()=>{
        button.textContent='Add to Cart'
      }, 500)
    })
})
//Add quantity
const incremenentQuantity=document.querySelectorAll('.addToCartButton')
incremenentQuantity.forEach((button, index)=>{
button.addEventListener('click', ()=>{
 homeItems[index].quantity++
  homeItemFunction()
  
   
})
})
 //Substract quantity
 const decrementQuantity=document.querySelectorAll('.subtractFromCartButton');
 decrementQuantity.forEach((button, index) =>{
  button.addEventListener('click', ()=>{
    if(homeItems[index].quantity <=1){
      return
    }else{
      homeItems[index].quantity--
      homeItemFunction()
    }
    
  })
 })

//Add to description page
const descriptionLink1=document.querySelectorAll('.description1');

descriptionLink1.forEach((link, index)=>{
  link.addEventListener('click', ()=>{
    addToDescriptionPage(index)
  })
})       
}
homeItemFunction()
