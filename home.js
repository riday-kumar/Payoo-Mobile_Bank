const validPin = 1234;
document.getElementById("addMoneyBtn").addEventListener("click", function (e) {
  e.preventDefault();

  //   main amount
  let mainAmount = parseInt(document.getElementById("main-amount").innerText);
  //   get input from user
  const selectedBank = document.getElementById("select-bank").value;
  const bankAcNum = document.getElementById("bank-ac-num").value;
  const amountToAdd = parseInt(document.getElementById("amount-to-add").value);
  const pinNumber = parseInt(document.getElementById("pin-number").value);
  //   console.log(bankAcNum.length + "," + pinNumber.length);

  //   Validation
  if (bankAcNum.length != 11) {
    console.log(bankAcNum.length + "," + pinNumber.length);
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
