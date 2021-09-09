/* function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
} */

document.getElementById('valid').style.display = 'none';
document.getElementById('invalid').style.display = 'none';

document.getElementById('submit').addEventListener('click',function() {
    let emailInput = document.getElementById('email');
    const email = emailInput.value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;

    const result = re.test(String(email).toLowerCase());
    if(result === true){
        document.getElementById('valid').style.display = 'block';
        document.getElementById('invalid').style.display = 'none';
    }else{
        document.getElementById('invalid').style.display = 'block';
        document.getElementById('valid').style.display = 'none';
    }
    emailInput.value = '';
})