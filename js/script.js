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

/* Merch Scripts */

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

/*
Donate scripts
*/

let donorList = []; 
if (localStorage.getItem('donorList')) {
    donorList = JSON.parse(localStorage.getItem('donorList'));
}

// Call the displayTopDonors function on page load
displayTopDonors();

// Define function to save the donor information and display the thank you message
function saveDonorInfo() {
    const donorName = document.getElementById("donor-name").value;
    const donorEmail = document.getElementById("donor-email").value;
    const donorAmount = document.getElementById("donor-amount").value;
    donorList.push({ name: donorName, email: donorEmail, amount: donorAmount });

    // Sort top 10 donors
    donorList.sort((a, b) => b.amount - a.amount); 
    donorList = donorList.slice(0, 10);

    // Save and display the updated donorList to localStorage
    localStorage.setItem("donorList", JSON.stringify(donorList));
    displayTopDonors();

    // Display the thank you message
    var thankYouMessage = document.getElementById("thank-you-message");
    thankYouMessage.innerHTML = "Thank you, " + donorName + ", for your donation of $" + donorAmount + "!";
    thankYouMessage.classList.remove("hidden");
}

// Define function to display the top donors on the page
function displayTopDonors() {
    const donorListContainer = document.getElementById("donor-list");
    donorListContainer.innerHTML = "";
    for (let i = 0; i < donorList.length; i++) {
        const donor = donorList[i];
        const donorListItem = document.createElement("li");
        donorListItem.innerHTML = `${donor.name} - ${donor.amount}`;
        donorListContainer.appendChild(donorListItem);
    }
}


/*
Ambassador Scripts
*/

const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const messageError = document.querySelector('#message-error');

function validateForm(event) {
  event.preventDefault();

  // Reset error messages
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  // Check name input
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required';
    nameInput.focus();
    return;
  }

  // Check email input
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required';
    emailInput.focus();
    return;
  } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
    emailError.textContent = 'Email is invalid';
    emailInput.focus();
    return;
  }

  // Check message input
  if (messageInput.value.trim() === '') {
    messageError.textContent = 'Message is required';
    messageInput.focus();
    return;
  }

  // Submit the form if all inputs are valid
  form.submit();
}

form.addEventListener('submit', validateForm);
