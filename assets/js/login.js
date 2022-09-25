
var loginContainer = document.getElementById('loginContainer');
var loginSubmit = document.getElementById('loginSubmit');
var loginErr = document.getElementById('loginErr');

var header = document.getElementById('header');
var hero = document.getElementById('hero');







loginSubmit.addEventListener('click', () => {
    sessionStorage.setItem('user', 'admin');
    sessionStorage.setItem('password', '123');

    var user = sessionStorage.getItem('user');
    var password = sessionStorage.getItem('password');


    var submittedUser = document.getElementById('loginUser');
    var submittedPass = document.getElementById('loginPass');

    // console.log(loginPass.value == '123');
    // console.log(loginPass.value);

    if(submittedUser.value == user && submittedPass.value == password) {
        window.location.href = 'index.html';
    } else {
        loginErr.innerText = 'Please enter valid user or password!'
        loginErr.style.paddingTop = '20px';
        loginErr.style.color = 'red';
    }

 

});









// loginSubmit.addEventListener('click', () => {
//     var loginUser = document.getElementById('loginUser');
//     var loginPass = document.getElementById('loginPass');

//     // console.log(loginPass.value == '123');
//     // console.log(loginPass.value);

//     if(loginUser.value == 'admin' && loginPass.value == '123') {
//         loginContainer.remove();
//         header.classList.add('active');
//         hero.classList.add('active');
//     } else {
//         loginErr.innerText = 'Please enter valid user or password!'
//         loginErr.style.paddingTop = '20px';
//         loginErr.style.color = 'red';
//     }

// }) 