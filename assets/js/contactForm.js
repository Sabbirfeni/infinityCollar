
var submitBtn = document.getElementById('submit');
var alertMsg =document.getElementById('alertMsg');
var modelContainer = document.getElementById('exampleModal');
var model = document.getElementById('exampleModal');
var modalBackDrop = document.getElementsByClassName('model-open');
var successMsg = document.getElementById('successMsg');


submitBtn.addEventListener('click', () => {


    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var query = document.getElementById('query').value;


    if(fullName == '' || email == '' || phoneNumber == '' || query == '') {
        
        alertMsg.innerText = 'Please enter all data!';
        alertMsg.style.color = 'red';

    } else {

        alertMsg.innerText = "Thanks! We look forward to sharing more about our products with you.";
        alertMsg.style.color = 'green';




        // successAlert();

        // function successAlert() {
        //     successMsg.classList.add('submitSuccessAlert');
        //     modelContainer.remove();
        //     modalBackDrop.remove();
        // }

        // setTimeout(() => {
        //     successMsg.classList.remove('submitSuccessAlert');
        // }, 5000);


    }
    
})