window.onload = function() {
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
}

/* cart */
let addButton = document.querySelectorAll('.button');
let cartList = document.getElementById('cartList');

addButton.forEach(function(button) {
  button.addEventListener('click', function() {
    let newItem = document.createElement('li');
    newItem.textContent = button.parentElement.querySelector('h3').textContent;
    cartList.appendChild(newItem);
  });
});
/*
let addButton = document.getElementsByClassName('button')[0];
let cartList = document.getElementById('cartList');

addButton.addEventListener('click', function()
{
  let newItem = document.createElement('li');
  newItem.textContent = document.querySelector('#productOne h3').textContent;
  cartList.appendChild(newItem);
});

*/