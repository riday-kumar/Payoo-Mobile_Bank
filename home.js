const validPin = 1234;
let mainAmount = parseInt(document.getElementById("main-amount").innerText);

// add money Feature
document.getElementById("addMoneyBtn").addEventListener("click", function (e) {
  e.preventDefault();

  //   get input from user
  const selectedBank = document.getElementById("select-bank").value;
  const bankAcNum = document.getElementById("bank-ac-num").value;
  const amountToAdd = parseInt(document.getElementById("amount-to-add").value);
  const pinNumber = parseInt(document.getElementById("pin-number").value);
  //   console.log(bankAcNum.length + "," + pinNumber.length);

  //   Validation
  if (bankAcNum.length != 11) {
    // console.log(bankAcNum.length + "," + pinNumber.length);
    alert("Bank Account Number Should Be 11 digit");
    return;
  }

  if (pinNumber !== validPin) {
    alert("Pin Number is not Matched");
    return;
  }

  // update money (sum done)
  const afterAddedMoney = mainAmount + amountToAdd;
  //   set new money
  document.getElementById("main-amount").innerText = afterAddedMoney;
});

// Toggle Feature in various button
// three section in Individual variable
const addMoneyFormSec = document.getElementById("addMoneySec");
const addCashOutFormSec = document.getElementById("cashOutSec");
const addTranferMoneyFormSec = document.getElementById("transferMoneySec");

document.getElementById("add-money-btn").addEventListener("click", function () {
  addMoneyFormSec.style.display = "block";
  addCashOutFormSec.style.display = "none";
  addTranferMoneyFormSec.style.display = "none";
});

document.getElementById("cah-out-btn").addEventListener("click", function () {
  addMoneyFormSec.style.display = "none";
  addCashOutFormSec.style.display = "block";
  addTranferMoneyFormSec.style.display = "none";
});

document
  .getElementById("transfer-money-btn")
  .addEventListener("click", function () {
    addMoneyFormSec.style.display = "none";
    addCashOutFormSec.style.display = "none";
    addTranferMoneyFormSec.style.display = "block";
  });

// Cash Out feature
document.getElementById("cashOutBtn").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("xyz");
  const agentNumber = parseInt(document.getElementById("agent-ac-num").value);
  const cashAmount = parseInt(
    document.getElementById("amount-for-cashout").value
  );
  const pinNumberCashOut = parseInt(
    document.getElementById("pin-number-cash-out").value
  );

  if (pinNumberCashOut !== validPin) {
    alert("Pin Number is not Correct");
    return;
  }

  mainAmount -= cashAmount;

  document.getElementById("main-amount").innerText = mainAmount;
  document.getElementById("amount-for-cashout").value = "";
});
