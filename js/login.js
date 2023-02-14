// step-1: add click event bandeler kith the submit button 
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address  inside the email input field
    // always rember to use value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    
    // danger: do not verify password on the client side
    // step-4: verify email and password and check wheter valid user or not
    if(email === "cash@deposit.com" && password === 'secret'){
        window.location.href = 'form.html';
    }
    else{
        alert('wrong')
    }
    })