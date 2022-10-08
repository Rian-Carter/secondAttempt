

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
  cartItem.classList.toggle('active');
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
}

window.onscroll = () =>{
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
}


// image carousel
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
    .closest("[data-carousel]")
    .querySelector("[data-slides]")
    
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0
    
    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
// end image carousel


// start clear contact form

// let btnClear = document.querySelector('btn');
// let inputs = document.querySelectorAll('input');

// btnClear.addEventListener('click', () => {
//   inputs.forEach(input => input.value = '');
// });


const btn = document.getElementById("contact");

btn.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();

  const inputs = document.querySelectorAll('#name, #email, #message')

  inputs.forEach(input => {
    input.value = '';
  });
});
// end clear contact form





// start google API section
  
// end google API section