function validatePin(pin) {
    const pinPattern = /^(?![A-Za-z])\d{3}\s?\d{3}(?![A-Za-z])$/;
    if (pinPattern.test(pin)) {
        console.log(`Valid PIN: ${pin}`);
        return true;
    } else {
        console.error(`Invalid PIN: ${pin}`);
        return false;
    }
}

validatePin("400088");

//UC2
validatePin("A400088");

//UC3
validatePin("400088B");

//UC4
validatePin("400 088");

// Function to validate email address
function validateEmail(email) {
    // Regular expression for full email validation (UC-1 to UC-5)
    const emailPattern = /^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-z]{2})?$/;

    // Checking if email matches the pattern
    if (emailPattern.test(email)) {
        console.log(`Valid Email: ${email}`);
    } else {
        console.log(`Invalid Email: ${email}`);
    }
} 

// Email UC-1 
validateEmail("abc@bridgelabz.co"); //Valid Email

// Email UC-2
validateEmail("abc.xyz@bridgelabz.co.in"); // Valid Email

// Email UC-3
validateEmail("abc@bridgelabzcom"); // Invalid Email