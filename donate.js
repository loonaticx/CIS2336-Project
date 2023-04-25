// Get the form element
const form = document.getElementById("donation-form");

// Get the donor list element
const donorList = document.getElementById("donor-list");

// Get the thank you message element
const thankYouMessage = document.getElementById("thank-you-message");

// Initialize the list of donors
let donors = [];

// Load the list of donors from local storage, if available
if (localStorage.getItem("donors")) {
    donors = JSON.parse(localStorage.getItem("donors"));
}

// Function to add a donor to the list
function addDonor(donor) {
    donors.push(donor);
    donors.sort((a, b) => b.amount - a.amount);
    if (donors.length > 10) {
        donors.pop();
    }
    localStorage.setItem("donors", JSON.stringify(donors));
    displayTopDonors();
}

// Function to display the top donors
function displayTopDonors() {
    const listItems = donors.map(
        (donor) => `<li>${donor.name} - $${donor.amount}</li>`
    );
    donorList.innerHTML = listItems.join("");
}

// Display the top donors on page load
displayTopDonors();

// Function to show the thank you message
function showThankYouMessage(donor) {
    const thankYouText = `Thank you, ${donor.name}, for your donation of $${donor.amount}! A confirmation email will be sent to ${donor.email}.`;
    thankYouMessage.textContent = thankYouText;
    thankYouMessage.classList.remove("hidden"); // Remove hidden class to show the message
}

// Add an event listener to the form submission
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = event.target.elements["donor-name"].value;
    const email = event.target.elements["donor-email"].value;
    const amount = event.target.elements["donor-amount"].value;
    const creditCardNumber = event.target.elements["card-number"].value;
    const creditCardExpiry = event.target.elements["card-expiry"].value;
    const creditCardCvc = event.target.elements["card-cvc"].value;
});