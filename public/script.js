const menuToggle = document.querySelector('.menu-toggle')
const menuToggleBtn = document.querySelector('.button-toggle-menu')
const cartToggle = document.querySelector('.cart')
const cartOverlay = document.querySelector('.cart-overlay')
const cartOpenBtn = document.querySelector('.open-cart')
const cartCloseBtn = document.querySelector('.close-cart')
document.addEventListener('click', function (e) {
   if (menuToggleBtn.contains(e.target)) {
      menuToggle.classList.toggle('ct-menu-expanded')
      menuToggle.classList.toggle('hidden')
   } else {
      if (menuToggle.classList.contains("ct-menu-expanded")) {
         menuToggle.classList.remove('ct-menu-expanded')
         menuToggle.classList.add('hidden')
      }
   }
})
cartOpenBtn.addEventListener('click',function () {
   cartToggle.classList.toggle('translate-x-full')
   cartOverlay.classList.toggle('invisible')
   cartOverlay.classList.toggle('opacity-0')
})
cartCloseBtn.addEventListener('click',function () {
   cartToggle.classList.toggle('translate-x-full')
   cartOverlay.classList.toggle('invisible')
   cartOverlay.classList.toggle('opacity-0')
})
cartOverlay.addEventListener('click',function () {
   cartToggle.classList.toggle('translate-x-full')
   this.classList.toggle('invisible')
   this.classList.toggle('opacity-0')
})