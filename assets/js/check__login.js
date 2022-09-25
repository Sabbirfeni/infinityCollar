


loginCheck()

function loginCheck() {

   
    console.log(sessionStorage.getItem('user'));
    console.log(sessionStorage.getItem('password'));



    if(sessionStorage.getItem('user') !== 'admin' && sessionStorage.getItem('password') !== '123') {
       
        window.location.href = 'login.html';
    }
}
