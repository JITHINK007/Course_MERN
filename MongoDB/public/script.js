function validateName() {
    var nameField = document.getElementById("name");
    var nameValue = nameField.value.trim();
    var nameError = document.getElementById("nameError");
    if (nameValue === "") {
        nameError.textContent = "Name is required";
    } else {
        nameError.textContent = "";
    }
}

function validateEmail() {
    var emailField = document.getElementById("email");
    var emailValue = emailField.value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailError = document.getElementById("emailError");
    if (emailValue === "") {
        emailError.textContent = "Email is required";
    } else if (!emailPattern.test(emailValue)) {
        emailError.textContent = "Invalid email format";
    } else {
        emailError.textContent = "";
    }
}

function validatePhone() {
    var phoneField = document.getElementById("phone");
    var phoneValue = phoneField.value.trim();
    var phonePattern = /^\d{10}$/;
    var phoneError = document.getElementById("phoneError");
    if (phoneValue === "") {
        phoneError.textContent = "Phone number is required";
    } else if (!phonePattern.test(phoneValue)) {
        phoneError.textContent = "Invalid phone number format";
    } else {
        phoneError.textContent = "";
    }
}

function validateGender() {
    var maleRadio = document.getElementById("male");
    var femaleRadio = document.getElementById("female");
    var genderError = document.getElementById("genderError");
    if (!maleRadio.checked && !femaleRadio.checked) {
        genderError.textContent = "Gender is required";
    } else {
        genderError.textContent = "";
    }
}

function validateCountry() {
    var countryField = document.getElementById("country");
    var countryError = document.getElementById("countryError");
    if (countryField.value === "") {
        countryError.textContent = "Country is required";
    } else {
        countryError.textContent = "";
    }
}

// Prevent form submission if there are validation errors
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var form = document.getElementById("contactForm");
    if (!form.checkValidity()) {
        event.stopPropagation();
    }
    form.classList.add("was-validated");
});