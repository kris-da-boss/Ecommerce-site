import { itemdescription, searchInput } from "./displayiteminfo.js";
import { addToCart } from "./cart.js";
// Search Products
const searchHome=document.querySelector('.search');
searchHome.addEventListener('keydown', (event)=>{
    if(event.key==='Enter'){
        searchInput(searchHome.value)
    }
   } )
   
let descriptionHTML=`
<div class='descriptionDev'>
 <image src="${itemdescription.Image}" class='descriptionImage'>
 <div class="descriptionInfo">
 <div class="namePrice">
 <p class="descriptionName">${itemdescription.name}</p>
 <p>$${itemdescription.price}</p>
 </div>
  <div class="buttonFlex">
 <button class="descriptionButton" id="descriptionbutton">Buy Now</button>
 <button class="descriptionButton addProductInfoToCart"> Add to Cart</button>
</div>
</div>
</div>
<h2 class='H2description'>Description</h2>
<p class='descriptionText'>${itemdescription.description}</p>
<h2 class='H2review'>Reviews</h2>
<p class="decriptionRating"><span class="ratingSpan">${4.5}</span> Average Ratings</p>
 <form action="mailto:kriswilson00000@gmail.com" >
        <div class="form" >
        <label for="review">Your Rating</label>
        <input name="" placeholder="Name" class="formInput">
        <textarea name="" id="review" cols="30" rows="10" class="textArea" placeholder="Your review"></textarea>
        <input type="submit" class="formSubmit">
    </div>
    </form>
`
document.getElementById('iteminfodiv').innerHTML=descriptionHTML;

const addProductsButton=document.querySelectorAll('.addProductInfoToCart');

addProductsButton.forEach((button)=>{
    button.addEventListener('click', ()=>{
         addToCart(itemdescription.id, itemdescription.quantity);
         button.textContent='Added'
      setTimeout(()=>{
        button.textContent='Add to Cart';
      }, 500);
    })
})

