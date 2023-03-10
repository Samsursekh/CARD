// Get input elements
const cardHolderName = document.getElementById('card-holder-name');
const cardNumber = document.getElementById('card-number');
const cardExpiry = document.getElementById('card-expiry');
const cardCVV = document.getElementById('card-cvv');

// Get elements to update in the credit card
const cardNumberEl = document.querySelector('.card-number');
const cardHolderNameEl = document.querySelector('.card-holder-name');
const cardExpiryEl = document.querySelector('.card-expiry');
const cardCVVEl = document.querySelector('.card-cvv');

// Add event listeners to input elements
cardHolderName.addEventListener('input', () => {
  cardHolderNameEl.textContent = cardHolderName.value;
});

cardNumber.addEventListener('input', () => {
  cardNumberEl.textContent = cardNumber.value;
});

cardExpiry.addEventListener('input', () => {
  cardExpiryEl.textContent = cardExpiry.value;
});

cardCVV.addEventListener('input', () => {
  cardCVVEl.textContent = cardCVV.value;
});

const submit = document.getElementById("submit");

submit.addEventListener("click", function (event) {
  event.preventDefault();

  // Redirect to otp.html
  window.location.href = "otp.html";
});

