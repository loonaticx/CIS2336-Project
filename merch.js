window.onload = function() {

let button1 = document.querySelector('#button1');
let cartList = document.getElementById("cartList");

button1.addEventListener('click', function() {
  let item = document.querySelector('.prod1').textContent;
  let price = document.querySelector('.price1').textContent;
  let listItem = document.createElement('li');
  let display = item + price
  listItem.textContent = display;
  cartList.appendChild(listItem);
});

let button2 = document.querySelector('#button2');

button2.addEventListener('click', function() {
  let item = document.querySelector('.prod2').textContent;
  let price = document.querySelector('.price2').textContent;
  let listItem = document.createElement('li');
  let display = item + price
  listItem.textContent = display;
  cartList.appendChild(listItem);
});

let button3 = document.querySelector('#button3');

button3.addEventListener('click', function() {
  let item = document.querySelector('.prod3').textContent;
  let price = document.querySelector('.price3').textContent;
  let listItem = document.createElement('li');
  let display = item + price
  listItem.textContent = display;
  cartList.appendChild(listItem);
});

}
