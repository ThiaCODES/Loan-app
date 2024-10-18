const loanAmount = document.querySelector(" #amount");
const annualInterest = document.querySelector("#annual");
const heading = document.querySelector("h1");

const repaymentYear = document.querySelector("#Repayment");

const monthlyPayment = document.querySelector("#monthly-payment");

const totalPayment = document.querySelector("#total-payment");

const totalInterest = document.querySelector("#total-interest");

const form = document.querySelector(".loan-form");
const spin = document.querySelector("#spin");
const result = document.querySelector(".result-container");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  spin.style.display = "block";
  result.style.display = "none";

  setTimeout(calculateResult, 3000);
});
function calculateResult(e) {
  console.log("submit");
  spin.style.display = "none";
  result.style.display = "block";
  const principle = loanAmount.value;
  const monthlyInterestRate = parseFloat(annualInterest.value) / 100 / 12;
  console.log(monthlyInterestRate);
  const paymentTime = parseFloat(repaymentYear.value) * 12;
  const x = Math.pow(1 + monthlyInterestRate, paymentTime);
  const monthlyPay = (monthlyInterestRate * x * principle) / (x - 1);
  if (isFinite(monthlyPay)) {
    monthlyPayment.value = monthlyPay.toFixed(2);
    totalPayment.value = (monthlyPay * paymentTime).toFixed(2);
    totalInterest.value = (monthlyPay * paymentTime - principle).toFixed(2);
  } else {
    errorMessage("Please Check Your Numbers!");
  }
}
function errorMessage(error) {
  const errmessage = document.createElement("div");
  errmessage.className = "error";
  errmessage.appendChild(document.createTextNode(error));
  console.log(error);
  form.insertBefore(errmessage, heading);
  result.style.display = "none";
  setTimeout(errorTimeout, 2000);
}

function errorTimeout() {
  document.querySelector(".error").remove();
}
