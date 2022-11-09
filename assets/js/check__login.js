


loginCheck()

function loginCheck() {

    if(sessionStorage.getItem('password') !== '123') {
       
        window.location.href = 'login.html';
    }
    // if(sessionStorage.getItem('user') !== 'admin' && sessionStorage.getItem('password') !== '123') {
       
    //     window.location.href = 'login.html';
    // }
}
