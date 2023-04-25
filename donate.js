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

