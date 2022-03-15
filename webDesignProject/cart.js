const addQuant = document.querySelectorAll('.btn-plus')
for (let i = 0; i < addQuant.length; i++) {
   addQuant[i].addEventListener('click',plusQuant)
   
}

const minusQuant = document.querySelectorAll('.btn-minus')
for (let i = 0; i < addQuant.length; i++) {
   minusQuant[i].addEventListener('click',minusInput)
   
}

const removeItem = document.querySelectorAll('.btn-danger')
    for (let i = 0; i < removeItem.length; i++) {
       removeItem[i].addEventListener('click',removeCartNumber)
    }

const purchase= document.querySelector('.btn-purchase') 
 for (let i = 0; i < purchase.length; i++) {
    purchase[i].addEventListener('click',purchaseItem)
    
 }   

     function purchaseItem(e){
       console.log(e.target)
     }




    function updateTotal(){
      let totalCost= localStorage.getItem('totalCost')
      let container = document.querySelector('.total-cost')
      container.textContent=totalCost
      console.log(container)
  
   }
   

    function minusInput(e){
        let input = e.target.parentElement;
    let target= e.target.parentElement.parentElement;
    let targetId = target.querySelector('.item-id').innerText
    let cartItem = localStorage.getItem('cartItems')
   let targetInCart = input.querySelector('.incart').innerText
   let cartCost= localStorage.getItem('totalCost')
   targetInCart= parseInt(targetInCart)
   targetInCart= JSON.stringify(targetInCart-1)
   cartCost=parseFloat(cartCost)
   
   input.querySelector('.incart').innerText=targetInCart
  
  
   console.log(typeof targetInCart)
 
    
    cartItem= JSON.parse(cartItem)
 
    
 
    cartItem.forEach(function(item) {
      
      
      if(item.id==targetId&&item.inCart>1){
         item.inCart= item.inCart-1
         cartCost= cartCost-item.price;
        cartCost=Math.round(cartCost*100)/100
      
         console.log(targetInCart)
       }
       
       updateTotal(e)
       
    });
    
 
    

    localStorage.setItem('totalCost',JSON.stringify(cartCost))
    localStorage.setItem('cartItems',JSON.stringify(cartItem))
    
    }


function plusQuant(e) {
    let input = e.target.parentElement;
    let target= e.target.parentElement.parentElement;
    let targetId = target.querySelector('.item-id').innerText
    let cartItem = localStorage.getItem('cartItems')
   let targetInCart = input.querySelector('.incart').innerText
   let cartCost= localStorage.getItem('totalCost')
   console.log(cartCost)
   cartCost=parseFloat(cartCost)
   targetInCart= parseInt(targetInCart)
   targetInCart= JSON.stringify(targetInCart+1)
   input.querySelector('.incart').innerText=targetInCart
  
  
   console.log(typeof targetInCart)
 
    
    cartItem= JSON.parse(cartItem)
 
    
 
    cartItem.forEach(function(item) {
       if(item.id==targetId){
         item.inCart= item.inCart+1;
        cartCost= cartCost+item.price;
        cartCost=Math.round(cartCost*100)/100
         console.log(targetInCart)
       }
       
    });
    targetInCart = JSON.stringify(targetInCart+1);
 
    localStorage.setItem('totalCost',JSON.stringify(cartCost))
    localStorage.setItem('cartItems',JSON.stringify(cartItem))
    
    updateTotal(e)
 }
 





 
 function removeCartNumber(e){
    let cartNumber= document.querySelector('.cart-number')
   let product= localStorage.getItem('cartNumber')
   product= parseInt(product)
   if (product===null){
      alert('no products in cart')
   }else if(product===0){
    alert('no products in cart')
   }else{
      product= product-1
   }
   cartNumber.textContent=JSON.stringify(product)
   localStorage.setItem('cartNumber',JSON.stringify(product))
 
   removeFromLocal(e)
 }

 function removeFromLocal(e){
    let product = e.target.parentElement.parentElement.querySelector('.item-id').innerText;
    let cartItem= localStorage.getItem('cartItems');
    let costTotal= localStorage.getItem('totalCost');
    costTotal= parseFloat(costTotal)
    product= parseInt(product)
    cartItem= JSON.parse(cartItem)
    cartItem.forEach(function(item,index,object){
       if(item.id===product){
          costTotal =costTotal- Math.round((item.price*item.inCart)*100)/100
          costTotal=Math.round(costTotal*100)/100
          object.splice(index,1)
          console.log(costTotal)
       }
    })
    e.target.parentElement.parentElement.remove()
    localStorage.setItem('totalCost',JSON.stringify(costTotal))
    localStorage.setItem('cartItems',JSON.stringify(cartItem))
    console.log(product)
    updateTotal(e)
 }
