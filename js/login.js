document.getElementById('loginform').addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    const email  = 
 document.getElementById('email').value;
    const password = 
 document.getElementById('password').value;
    const emailerror = 
 document.getElementById('emailerror');
    const passworderror = 
 document.getElementById('passworderror');

 emailError.textContent = '';
 passwrodError.textContent = '';


 if (!email.includes('@') || !email.includes('.')) {
    email.Error.textContent = 'Please enter  valid enail adrdress';
    valid = false;
 }
 if (password.length < 6) {
    passwrodError.textContent = 'password must be at least 7 characters';
    valid  = false;
 }
 
 if (valid) {
    alert('Login Successful!');
    this.SubmitEvent();
 }
});