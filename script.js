document.getElementById("submitbtn").addEventListener("click", () => {
    alert("Form submitted successfully!");
});// Form validation
const form = document.getElementById("applicationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const phoneInput = document.getElementById("phone");
const resumeInput = document.getElementById("resume");

form.addEventListener("submit", (e) => {
    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        document.getElementById("emailError").textContent = "Invalid email format.";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Password validation
    if (passwordInput.value.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters.";
        isValid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    // Phone validation
    if (phoneInput.value.trim() === "") {
        document.getElementById("phoneError").textContent = "Phone number is required.";
        isValid = false;
    } else {
        document.getElementById("phoneError").textContent = "";
    }

    // Resume validation
    if (resumeInput.files.length === 0) {
        document.getElementById("resumeError").textContent = "Resume is required.";
        isValid = false;
    } else {
        document.getElementById("resumeError").textContent = "";
    }

    if (!isValid) {
        e.preventDefault();
    }
});

// Real-time feedback
nameInput.addEventListener("input", () => {
    if (nameInput.value.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required.";
    } else {
        document.getElementById("nameError").textContent = "";
    }
});

emailInput.addEventListener("input", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        document.getElementById("emailError").textContent = "Invalid email format.";
    } else {
        document.getElementById("emailError").textContent = "";
    }
});




// Keypress detection
document.addEventListener("keypress", (e) => {
    console.log(`Key pressed: ${e.key}`);
});

// Secret action for double-click
document.addEventListener("dblclick", () => {
    alert("You discovered the secret double-click action!");
});

// Long press detection
let pressTimer;
document.addEventListener("mousedown", () => {
    pressTimer = setTimeout(() => {
        alert("You discovered the secret long press action!");
    }, 1000); // 1 second
});

document.addEventListener("mouseup", () => {
    clearTimeout(pressTimer);
});
let slideIndex = 0;
const slides = document.querySelectorAll(".images img");

function showSlides(index) {
    // Ensure the index is within bounds
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    // Hide all slides and show the current one
    slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? "block" : "none";
    });
}

// Navigate to the next or previous slide
function plusSlides(step) {
    showSlides(slideIndex + step);
}

// Initialize the slideshow
showSlides(slideIndex);



