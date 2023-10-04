console.log('hello google');

document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('clicked by me')
    const depositField = document.getElementById('Deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);


    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepostiTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepostiTotal;


    const balanceTotalElement = document.getElementById('Balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal =  previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;











    depositField.value = '';
})