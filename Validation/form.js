function validationform() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmpass = document.getElementById("confirmpass").value.trim();
    var image = document.getElementById("image").value;

    var name_error = document.getElementById("nameerror");
    var email_error = document.getElementById("emailerror");
    var password_error = document.getElementById("passworderror");
    var confirmpassword_error = document.getElementById("confirmpassworderror");
    var image_error = document.getElementById("imageerror");

    // Clear previous errors
    name_error.innerText = "";
    email_error.innerText = "";
    password_error.innerText = "";
    confirmpassword_error.innerText = "";
    image_error.innerText = "";

    let valid = true;

    if (name.length < 3) {
        name_error.innerText = "Name must be at least 3 characters";
        valid = false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        email_error.innerText = "Invalid Email";
        valid = false;
    }

    if (password.length <6){
        password_error.innerText = "Password must be 6 character";
        valid = false;
    }

    if(confirmpass==""){
        confirmpassword_error.innerText = "Repeat password";
        valid = false;
    }

    if (password!==confirmpass){
        confirmpassword_error.innerText = "Password not match";
        valid =false;
    }

    if(!image){
        image_error.innerText = "Upload Image";
        valid = false
    }

    return valid;
}
