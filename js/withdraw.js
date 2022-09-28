// Step-1: Add event listener to the Withdraw button
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-amount");
  const withdrawAmount = withdrawField.value;

  withdrawField.value = "";

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const withdrawCurrent = withdrawTotalElement.innerText;

  const withdrawTotal =
    parseFloat(withdrawAmount) + parseFloat(withdrawCurrent);

  withdrawTotalElement.innerText = withdrawTotal;

  const balanceTotalElement = document.getElementById("balance-total");
  const balanceTotal = balanceTotalElement.innerText;
  const balanceRemaining =
    parseFloat(balanceTotal) - parseFloat(withdrawAmount);

  balanceTotalElement.innerText = balanceRemaining;
});
