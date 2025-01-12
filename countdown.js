// Countdown Timer and Button Enabler Script
const countdownElement = document.getElementById("countdown");
const letterButton = document.getElementById("letterButton");

// Set the target date for February 14th
const targetDate = new Date("February 14, 2025 00:00:00").getTime();

// Function to update the countdown timer
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    countdownElement.innerHTML = `Unlock this button in: ${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Enable the button when the countdown reaches 0
    if (distance < 0) {
        countdownElement.innerHTML = "It's time! You can now open your letter!";
        letterButton.disabled = false; // Enable the button
    } else {
        letterButton.disabled = true; // Keep the button disabled until the target date
    }
}

// Update the countdown every 1 second
setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();
