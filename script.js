//login button functionality
document.getElementById("loginBtn").addEventListener("click", function (e) {
  //   we prevent the page refreshing
  e.preventDefault();

  const mobileNum = 10987654321;
  const pinNum = 4321;

  //   we got the value from the user
  const mobileNumberValue = document.getElementById("mobile-number").value;
  const pinNumValue = document.getElementById("pin-number").value;
  //   we converted the value to the number
  const convertedMobileNumberValue = parseInt(mobileNumberValue);
  const convertedPinNumberValue = parseInt(pinNumValue);

  if (
    convertedMobileNumberValue === mobileNum &&
    convertedPinNumberValue === pinNum
  ) {
    window.location.href = "./home.html";
  } else {
    alert("credential is not matched");
  }
});
