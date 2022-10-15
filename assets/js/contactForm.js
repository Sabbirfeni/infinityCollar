var contactBtn = document.getElementById('contactBtn');
var modelContainer = document.getElementById('modelContainer');
var submitBtn = document.getElementById('submit');
var submitSuccess = document.getElementById('submitSuccessAlert')
var errorMsg =document.getElementById('errorMsg');
var closeBtn = document.getElementById('closeBtn');
let newsletterInput = document.getElementById('newsletterInput');

var fullName = document.getElementById('fullName');
var email = document.getElementById('email');
var phoneNumber = document.getElementById('phoneNumber');
var query = document.getElementById('query');


contactBtn.addEventListener('click', () => {
    modelContainer.classList.add('active');
    newsletterInput.classList.add('active');
    fullName.value = email.value = phoneNumber.value = query.value = '';
})

closeBtn.addEventListener('click', () => {
    modelContainer.classList.remove('active');
    newsletterInput.classList.remove('active');
})





submitBtn.addEventListener('click', () => {



    if(fullName.value == '' || email.value == '' || phoneNumber.value == '' || query.value == '') {
        errorMsg.innerText = 'Please enter all data!';
        errorMsg.style.color = 'red';
    } else {

        successAlert();

        function successAlert() {
            submitSuccess.classList.add('active');
            errorMsg.innerText = '';
            modelContainer.classList.remove('active');
        }

        setTimeout(() => {
            submitSuccess.classList.remove('active');
        }, 4000);

    }
})