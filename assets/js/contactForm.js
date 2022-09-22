var fullName = document.getElementById('fullName');
var email = document.getElementById('email');
var phoneNumber = document.getElementById('phoneNumber');
var query = document.getElementById('query');
var submitBtn = document.getElementById('submit');
var alertMsg =document.getElementById('alertMsg');
var model = document.getElementById('exampleModal');

fullName = email = phoneNumber = query = '';

submitBtn.addEventListener('click', () => {
    if(fullName == '' || email == '' || phoneNumber == '' || query == '') {
        alertMsg.innerText = 'Please enter all data!';
        alertMsg.style.color = 'red';
    } else {
        alertMsg.innerText = "Thanks! We look forward to sharing more about our products with you.";
        alertMsg.style.color = 'green';
    }
})