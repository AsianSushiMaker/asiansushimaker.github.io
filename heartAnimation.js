document.addEventListener("mousemove", function (event) {
    const heart = document.createElement("img");
    heart.src = "hangyodon.png"; // Placeholder image for the heart
    heart.style.position = "absolute";

    // Adjust the heart position based on scroll offset
    heart.style.left = `${event.clientX + window.scrollX - 20}px`; // Adjust for horizontal scroll
    heart.style.top = `${event.clientY + window.scrollY - 20}px`;  // Adjust for vertical scroll

    heart.style.width = "60px"; // Slightly larger heart size
    heart.style.height = "60px"; // Slightly larger heart size
    heart.classList.add("heart"); // Add the animation class for the floating effect

    document.body.appendChild(heart);

    // Remove the heart after animation ends
    heart.addEventListener("animationend", function () {
        heart.remove();  // Ensure the heart is removed after the animation ends
    });
});

// Trigger confetti at mouse click location
document.addEventListener("click", function (event) {
    // Trigger confetti at mouse position, adjusting for scroll
    confetti({
        particleCount: 100,   // Number of particles
        spread: 70,           // Spread of the particles
        origin: {
            x: (event.clientX + window.scrollX) / window.innerWidth,  // Normalize x position based on window width, adjusted for scroll
            y: (event.clientY + window.scrollY) / window.innerHeight // Normalize y position based on window height, adjusted for scroll
        }
    });
});
