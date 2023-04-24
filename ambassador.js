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
