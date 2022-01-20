window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount: 0, years: 0, rate: 0}
  const amountUI = document.querySelector("#loan-amount");
  amountUI.value = values.amount;
  const yearsUI = document.querySelector("#loan-years");
  yearsUI.value = values.years;
  const rateUI = document.querySelector("#loan-rate");
  rateUI.value = values.rate;
  update();

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValuesUI = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValuesUI));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = ((values.rate / 100) / 12);
  const n = (values.years * 12);
  return ( 
    (values.amount * monthlyRate)/(1 - Math.pow((1 + monthlyRate), -n))
    ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
const monthlyUI = document.querySelector("#monthly-payment");
monthlyUI.innerText = "$" + monthly;
}
