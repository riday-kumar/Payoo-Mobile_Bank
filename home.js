const validPin = 1234;
const transactionData = [];
let mainAmount = parseInt(document.getElementById("main-amount").innerText);

// function for getting element
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

//function for getting input values using parseInt
function getInputValueNumber(id) {
  const inputFieldValueNum = parseInt(document.getElementById(id).value);
  return inputFieldValueNum;
}

// function for getting only input value without integer Converting.
function getInputValue(id) {
  const inputFieldValue = document.getElementById(id).value;
  return inputFieldValue;
}

// function for get InnerText of main Amount
function getInnerText(id) {
  const elementValueNum = parseInt(document.getElementById(id).innerText);
  return elementValueNum;
}

// set Inner Text
function setInnerText(value) {
  const setElementValue = (document.getElementById("main-amount").innerText =
    value);
  return setElementValue;
}

//function to Toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");

  for (form of forms) {
    form.style.display = "none";
  }

  id.style.display = "block";
}

// function for toggle background color & border
function handleBackgroundColor(id) {
  const allButtons = document.getElementsByClassName("all-btn");
  for (const allButton of allButtons) {
    allButton.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    allButton.classList.add("border-[#0808081a]");
  }

  document.getElementById(id).classList.remove("border-[#0808081a]");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

// making history
function makingHistory(work) {
  const data = {
    name: work,
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
  // console.log(transactionData);
}

// Toggle Feature in various button
const addMoneyFormSec = document.getElementById("addMoneySec");
const addCashOutFormSec = document.getElementById("cashOutSec");
const addTranferMoneyFormSec = document.getElementById("transferMoneySec");
const addTransactionsSec = document.getElementById("transactionsSec");

// Add Money Button (Background)
document.getElementById("add-money-btn").addEventListener("click", function () {
  handleToggle(addMoneyFormSec);
  handleBackgroundColor("add-money-btn");
});

// add money Feature
document.getElementById("addMoneyBtn").addEventListener("click", function (e) {
  e.preventDefault();

  const avaliAbleBalance = getInnerText("main-amount");

  //   get input from user
  const selectedBank = getInputValue("select-bank");
  const bankAcNum = getInputValue("bank-ac-num");
  const amountToAdd = getInputValueNumber("amount-to-add");
  const pinNumber = getInputValueNumber("pin-number");

  //   Validation
  if (bankAcNum.length != 11) {
    // console.log(bankAcNum.length + "," + pinNumber.length);
    alert("Bank Account Number Should Be 11 digit");
    return;
  }

  if (amountToAdd <= 0) {
    alert("Invelid Amount");
    return;
  }

  if (pinNumber !== validPin) {
    alert("Pin Number is not Matched");
    return;
  }

  const totalNewAvailableBalance = avaliAbleBalance + amountToAdd;
  //   set new money
  setInnerText(totalNewAvailableBalance);

  makingHistory("Money Added");
});

// Cash Out Button (Background)
document.getElementById("cah-out-btn").addEventListener("click", function () {
  handleToggle(addCashOutFormSec);
  handleBackgroundColor("cah-out-btn");
});

// Cash Out feature
document.getElementById("cashOutBtn").addEventListener("click", function (e) {
  e.preventDefault();

  const avaliAbleBalance = getInnerText("main-amount");

  const agentNumber = getInputValueNumber("agent-ac-num");
  const cashAmount = getInputValueNumber("amount-for-cashout");
  const pinNumberCashOut = getInputValueNumber("pin-number-cash-out");

  if (cashAmount <= 0 || cashAmount > avaliAbleBalance) {
    alert("Invalid Amount");
    return;
  }

  if (pinNumberCashOut !== validPin) {
    alert("Pin Number is not Correct");
    return;
  }

  const totalNewAvailableBalance = avaliAbleBalance - cashAmount;
  setInnerText(totalNewAvailableBalance);

  makingHistory("Cash Out");
});

// Transfer Money Button (Background)
document
  .getElementById("transfer-money-btn")
  .addEventListener("click", function () {
    handleToggle(addTranferMoneyFormSec);
    handleBackgroundColor("transfer-money-btn");
  });

// Transaction History Feature
document
  .getElementById("transaction-money-btn")
  .addEventListener("click", function (e) {
    handleToggle(addTransactionsSec);
    handleBackgroundColor("transaction-money-btn");

    let showHistory = getElement("transactionsSec");
    showHistory.innerHTML = "";

    // reverse the array for showing new data first
    const newDataFrist = transactionData.reverse();
    for (const singleHistory of newDataFrist) {
      console.log(singleHistory);

      const newDiv = document.createElement("div");
      newDiv.innerHTML = `
        <div
          class="bg-white p-4 mb-2 border-2 border-gray-200 rounded-lg flex justify-between items-center"
        >
          <div class="flex gap-4">
            <img
              class="bg-[#0808080d] rounded-[50%] p-2.5"
              src="./images/wallet1.png"
              alt=""
            />
            <div>
              <h4 class="font-bold text-[#080808b3]">${singleHistory.name}</h4>
              <p class="text-[#080808b3]">${singleHistory.date}</p>
            </div>
          </div>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      `;

      showHistory.appendChild(newDiv);
    }
  });
