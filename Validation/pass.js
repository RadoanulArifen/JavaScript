function validationform(){
    var password = document.getElementById('password').value.trim();

    var password_error = document.getElementById('passworderror');
    password_error.innerText = "";

    let valid = true;
    if(!password){
        password_error.innerText = "enter password";
        valid = false;
    }

    
    if(!/[A-Z]{3}/.test(password) || !/[0-9]{2}/.test(password)){
        password_error.innerText=("Password must have one upper letter");
        valid = false;
    }

    return valid;
}