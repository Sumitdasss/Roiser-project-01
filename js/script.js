$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  autoplaySpeed: 2000,
  });
});
 
$(document).ready(function(){
  $('.slider1').slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  autoplaySpeed: 2000,
  });
});
$(document).ready(function(){
  $('.slider2').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  autoplaySpeed: 2000,
  });
});
 
$(document).ready(function(){
  $('.slider3').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  autoplaySpeed: 1500,
  });
});
 
$(document).ready(function(){
  $('.slider4').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  autoplaySpeed: 2000,
  });
});
$(document).ready(function(){
  $('.slider5').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  autoplaySpeed: 2000,
  });
});
 




  function updateCard(idNum, available, total) {
    const percentage = (available / total) * 100;
    const fillElement = document.getElementById(`fill-${idNum}`);
    const countElement = document.getElementById(`count-${idNum}`);
    if (fillElement && countElement) {
      fillElement.style.width = percentage + '%';
      countElement.innerText = available;
    }
  }


  function startTimer(duration, displayId) {
    let timer = duration;
    const container = document.getElementById(displayId);
    if (!container) return;

    setInterval(function () {
      let days = parseInt(timer / (60 * 60 * 24), 10);
      let hours = parseInt((timer % (60 * 60 * 24)) / (60 * 60), 10);
      let minutes = parseInt((timer % (60 * 60)) / 60, 10);
      let seconds = parseInt(timer % 60, 10);

  
      if(container.querySelector('.days')) container.querySelector('.days').textContent = days;
      if(container.querySelector('.hours')) container.querySelector('.hours').textContent = hours;
      if(container.querySelector('.minutes')) container.querySelector('.minutes').textContent = minutes;
      if(container.querySelector('.seconds')) container.querySelector('.seconds').textContent = seconds;

      if (--timer < 0) timer = 0;
    }, 1000);
  }

 
  window.onload = function () {
   
    updateCard(1, 250, 500); 
    updateCard(2, 120, 500); 
    updateCard(3, 400, 500); 
    updateCard(4, 50, 500);  
    updateCard(5, 250, 500);
    updateCard(6, 250, 500);
    updateCard(7, 250, 500);
    updateCard(8, 250, 500);
    updateCard(9, 250, 500);

 
    const secondsInADay = 23932800;
    startTimer(secondsInADay, 'timer1');
    startTimer(secondsInADay, 'timer2');
    startTimer(secondsInADay, 'timer3');
    startTimer(secondsInADay, 'timer4');
    startTimer(secondsInADay, 'timer5');
    startTimer(secondsInADay, 'timer6');
    startTimer(secondsInADay, 'timer7');
    startTimer(secondsInADay, 'timer8');
  };

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartContent = document.querySelector('.cart-content'); 


addToCartButtons.forEach(button => {
  button.addEventListener("click", event => {
   
    const productbox = event.target.closest('.product-box'); 
    
    if (productbox) {
      addtoCart(productbox); 
    }
    
  });
});


const addtoCart = productbox => {
  const productName = productbox.querySelector('.product-name').textContent;
  const producimg = productbox.querySelector('img').src;
  const productprice = productbox.querySelector('.product-price').textContent;
  const cartItems = cartContent.querySelectorAll(".cart-item-subtotal");
 for (let item of cartItems) {
    if (item.textContent=== productName) {
      alert("This product is already in the cart");
      return; 
    }
  }

  const total = productprice; 

  const cartBox = document.createElement('div');
  cartBox.className = `flex justify-around w-full h-[151px] items-center border-t-2 border-b-2 border-black/50 mb-2`;

  cartBox.innerHTML = `
        <div class="cursor-pointer ">
            <i class="fa-solid fa-xmark remove-item"></i>
        </div>

        <div class="w-[80px] h-[80px] bg-white">
            <img src="${producimg}" class="w-full h-full object-cover">
        </div>

        <div>
            <p class=" cart-item-subtotal text-[20px] text-[#222222] font-semibold">${productName}</p>
        </div>

        <div>
            <p class="text-[#74787C] text-[16px] font-medium">
                <span class=" text-[18px] font-bold text-[#222222] cart-price">${productprice}</span>
            </p>
        </div>

        <div class="flex cart-item-quantity">
            <div class="w-[60px] h-[50px] border-2 border-black/50 flex justify-center items-center">
                <p class="text-[18px] text-[#222222] font-semibold number">1</p>
            </div>
            <div>
                <div class="w-7 h-[25px] border-2 border-black/50 flex justify-center items-center cursor-pointer">
                    <button id="increase-btn" ><i class="fa-solid fa-angle-up"></i></button>
                </div>
                <div class="w-7 h-[25px] border-2 border-black/50 flex justify-center items-center cursor-pointer">
                    <button id="decrease-btn"><i class="fa-solid fa-angle-down"></i></button>
                </div>
            </div>
        </div>

        <div>
            <p class="text-[18px] text-[#222222] font-semibold">${total}</p>
        </div>`;
cartBox.classList.add('cart-box');
  cartContent.appendChild(cartBox);
  cartBox.querySelector('.remove-item').addEventListener('click', () => {
    cartBox.remove();
    updateTotalprice();
    updateCartCounter(-1);
  });


  cartBox.querySelector('.cart-item-quantity').addEventListener('click', event => {
    const numberElement = cartBox.querySelector('.number');
    const decreaseBtn = cartBox.querySelector('#decrease-btn');
let quantity = numberElement.textContent;
if(event.target.closest('#decrease-btn') && quantity > 1) {
quantity--;
if(quantity ==='1'){
  decreaseBtn.style.color='#999'
}
}
else if(event.target.closest('#increase-btn')) {
quantity++;
decreaseBtn.style.color='#33'
}
numberElement.textContent = quantity;
updateTotalprice();
});

updateTotalprice();
updateCartCounter(1);

}


const updateTotalprice= () =>{
  const totalpriceElement = document.querySelector('.total-price');
  const cartboxes = cartContent.querySelectorAll('.cart-box');

  let total=0;
  cartboxes.forEach(cartbox => {
    const priceElement = cartbox.querySelector('.cart-price');
    const qyntityElement = cartbox.querySelector('.number');
    const price = priceElement.textContent.replace('$', '');
    const quantity =qyntityElement.textContent;
    total +=price *quantity;

  });
  totalpriceElement.textContent =`$${total}`;
}

let cartcounter=0;

const updateCartCounter = change => {
const cartCounterElement = document.querySelector('.cart-counter');
cartcounter += change;
if(cartcounter > 0){
cartCounterElement.style.visibility = 'visible';
cartCounterElement.textContent = cartcounter;
} else {
cartCounterElement.style.visibility = 'hidden';
cartCounterElement.textContent = "";
}
}