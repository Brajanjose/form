// Function to validate form fields
function validateForm() {
    const form = document.getElementById('registrationForm');
    const fullName = form.elements['fullName'].value.trim();
    const email = form.elements['email'].value.trim();
    const phoneNumber = form.elements['phoneNumber'].value.trim();
    const password = form.elements['password'].value.trim();
    const confirmPassword = form.elements['confirmPassword'].value.trim();
    let isValid = true;

    resetValidation();

    // Validate Full Name
    if (fullName.length < 5) {
        setErrorFor('fullName', 'Name must be at least 5 characters');
        isValid = false;
    }

    // Validate Email
    if (!isValidEmail(email)) {
        setErrorFor('email', 'Enter a valid email address');
        isValid = false;
    }

    // Validate Phone Number
    if (!isValidPhoneNumber(phoneNumber)) {
        setErrorFor('phoneNumber', 'Enter a valid 10-digit phone number');
        isValid = false;
    }

    // Validate Password
    if (password.length < 8 || password === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
        setErrorFor('password', 'Password must be at least 8 characters and not common');
        isValid = false;
    }

    // Validate Confirm Password
    if (password !== confirmPassword) {
        setErrorFor('confirmPassword', 'Passwords do not match');
        isValid = false;
    }

    return isValid;
}

// Helper function to set error messages
function setErrorFor(inputId, message) {
    const inputField = document.getElementById(inputId);
    const errorMessage = inputField.parentNode.querySelector('.error-message');
    errorMessage.innerText = message;
    errorMessage.style.display = 'block';
}

// Helper function to reset validation messages
function resetValidation() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.style.display = 'none');
}

// Helper function to validate email format
function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

// Helper function to validate phone number format
function isValidPhoneNumber(phoneNumber) {
    return /^\d{10}$/.test(phoneNumber);
}

// Event listener for form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    if (validateForm()) {
        // Form is valid, process data or submit
        alert('Form submitted successfully!');
    }
});
