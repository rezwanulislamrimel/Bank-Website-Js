document.getElementById('btn-withdrow').addEventListener('click', function () {
    // console.log('withdrow btn clicked by Rimel')

    const WithdrowField = document.getElementById('withdrow-field');
    const newWithdrowFieldStirng = WithdrowField.value;
    const newWithdrowAmount = parseFloat(newWithdrowFieldStirng);
    // console.log(newWithdrowAmount)

    const withdrowTotalElement = document.getElementById('withdraw-total-Element');
    const previousWithdrowTotalString = withdrowTotalElement.innerText;
    const previousWithdrowTotal = parseFloat(previousWithdrowTotalString);
    const currentWithdrowTotal = previousWithdrowTotal + newWithdrowAmount;
    withdrowTotalElement.innerText = currentWithdrowTotal; 
        

    const balanceTotalElement = document.getElementById('Balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const newBlanceTotal = previousBalanceTotal - newWithdrowAmount;
    balanceTotalElement.innerText = newBlanceTotal;
        
        
        
        
        
        
    WithdrowField.value = '';
    
})