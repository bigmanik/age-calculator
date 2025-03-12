
const dayError = document.getElementById("dayError");
const monthError = document.getElementById("monthError");
const yearError = document.getElementById("yearError");

// Hide error messages initially
dayError.style.visibility = 'hidden';
monthError.style.visibility = 'hidden';
yearError.style.visibility = 'hidden';

let dayum = document.getElementById("DD");
let monthum = document.getElementById("MM");
let yearum = document.getElementById("YYYY");

// Add input event listeners to check and clear errors as user types
dayum.addEventListener('input', validateDay);
monthum.addEventListener('input', validateMonth);
yearum.addEventListener('input', validateYear);

// Validation functions for each field
function validateDay() {
    let day = parseInt(dayum.value);
    if (!isNaN(day) && day >= 1 && day <= 31) {
        // Valid day - remove error
        dayum.classList.remove('error-message');
        dayError.style.visibility = 'hidden';
        return true;
    }
    return false;
}

function validateMonth() {
    let month = parseInt(monthum.value);
    if (!isNaN(month) && month >= 1 && month <= 12) {
        // Valid month - remove error
        monthum.classList.remove('error-message');
        monthError.style.visibility = 'hidden';
        return true;
    }
    return false;
}

function validateYear() {
    let year = parseInt(yearum.value);
    let currentYear = new Date().getFullYear();
    if (!isNaN(year) && year >= 1900 && year <= currentYear) {
        // Valid year - remove error
        yearum.classList.remove('error-message');
        yearError.style.visibility = 'hidden';
        return true;
    }
    return false;
}

document.getElementById("calculate-btn").addEventListener("click", function() {
    // Get input values
    let day = parseInt(document.getElementById("DD").value);
    let month = parseInt(document.getElementById("MM").value);
    let year = parseInt(document.getElementById("YYYY").value);

    // Thorough validation
    let isValid = true;

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Please enter numeric values for day, month, and year");
        isValid = false;
    }

    if (month < 1 || month > 12) {
        monthum.classList.add('error-message');
        monthError.style.visibility = 'visible';
        isValid = false;
    } else {
        // Ensure error is cleared if valid
        monthum.classList.remove('error-message');
        monthError.style.visibility = 'hidden';
    }

    if (day < 1 || day > 31) {
        dayum.classList.add('error-message');
        dayError.style.visibility = 'visible';
        isValid = false;
    } else {
        // Ensure error is cleared if valid
        dayum.classList.remove('error-message');
        dayError.style.visibility = 'hidden';
    }

    if (year < 1900 || year > new Date().getFullYear()) {
        yearum.classList.add('error-message');
        yearError.style.visibility = 'visible';
        isValid = false;
    } else {
        // Ensure error is cleared if valid
        yearum.classList.remove('error-message');
        yearError.style.visibility = 'hidden';
    }

    // If everything is valid, continue with your calculation
    if (isValid) {
        // Your calculation code here
    }
});





// const dayError = document.getElementById("dayError");
// const monthError = document.getElementById("monthError");
// const yearError = document.getElementById("yearError");


// dayError.style.visibility = 'hidden';
// monthError.style.visibility = 'hidden';
// yearError.style.visibility = 'hidden';

// let dayum = document.getElementById("DD");
// let monthum = document.getElementById("MM");
// let yearum = document.getElementById("YYYY");

document.getElementById("calculate-btn").addEventListener("click", function() {
    // Get input values
    let day = parseInt(document.getElementById("DD").value);
    let month = parseInt(document.getElementById("MM").value);
    let year = parseInt(document.getElementById("YYYY").value);

   



    // Thorough validation
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Please enter numeric values for day, month, and year");
      
        return;
    }

    if (month < 1 || month > 12) {
        // alert("Month must be between 1 and 12");
          monthum.classList.add('error-message');
        monthError.style.visibility = 'visible'
        return;
    }

    if (day < 1 || day > 31) {
        // alert("Day must be between 1 and 31");
          dayum.classList.add('error-message');
        dayError.style.visibility = 'visible'
        return;
    }

    if (year < 1900 || year > new Date().getFullYear()) {
        // alert("Please enter a valid year between 1900 and present");
          yearum.classList.add('error-message');
        yearError.style.visibility = 'visible'
        return;
    }

    // Check for valid day in month
    const daysInMonth = new Date(year, month, 0).getDate();
    if (day > daysInMonth) {
        alert(`Invalid date: ${month}/${day}/${year}. ${month} only has ${daysInMonth} days.`);
        return;
    }

    // Adjust month for JS Date (0-based)
    let jsMonth = month - 1;
    
    // Create date objects
    let birthDate = new Date(year, jsMonth, day);
    let today = new Date();

    // Validate birthdate is not in the future
    if (birthDate > today) {
        alert("Birth date cannot be in the future");
        return;
    }

    // Calculate age
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    // Adjust for negative days
    if (ageDays < 0) {
        ageMonths--;
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += lastMonth.getDate();
    }

    // Adjust for negative months
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    // Display results (with error handling)
    const outputYear = document.getElementById("outt");
    const outputMonth = document.getElementById("boutt");
    const outputDay = document.getElementById("coutt");

    if (outputYear && outputMonth && outputDay) {
        outputYear.innerText = ageYears;
        outputMonth.innerText = ageMonths;
        outputDay.innerText = ageDays;
    } else {
        console.error("One or more output elements not found");
        alert("Error displaying results. Please check the console for details.");
    }
});