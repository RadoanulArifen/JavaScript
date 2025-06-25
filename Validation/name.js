function validationform() {
    var name = document.getElementById("name").value.trim();

    var name_error = document.getElementById("nameerror");

    // Clear previous errors
    name_error.innerText = "";

    let valid = true;
    if (name.length == "") {
        name_error.innerText = "Fillup  name ";
        valid = false;
    }
    const namepartten = name.match(/[A-Z]/g);
    const digitMatches = name.match(/[0-9]/g);

    if (!namepartten || namepartten.length < 3) {
        name_error.innerText = "Name  mush have 3 uppercase ";
        valid = false;
    }

    if (!digitMatches || digitMatches.length < 2) {
        name_error.innerText = "Name must contain at least 2 digits.";
        return false;
    }

    return valid;
}
