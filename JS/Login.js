document.getElementById('btn-submit').addEventListener('click', function () {
    console.log('submit button clicked');

    const EmailField = document.getElementById('input-email');
    const email = EmailField.value;
    // console.log(email);


    const PasswordField = document.getElementById('input-passward');
    const passward = PasswordField.value;
    console.log(email, passward);

    if (email === 'rezwanul@rimel.com' && passward === 'astagfirullah') {
    
   window.location.href='bank.html'   
    }
    else {
        alert("Invalid Username or password");
   }
})
