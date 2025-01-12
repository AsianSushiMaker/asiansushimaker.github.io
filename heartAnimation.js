document.addEventListener("mousemove", function (event) {
    const heart = document.createElement("img");
    heart.src = "hangyodon.png"; // Placeholder image for the heart
    heart.style.position = "absolute";
    heart.style.left = `${event.clientX - 20}px`; // Position the heart at mouse position
    heart.style.top = `${event.clientY - 20}px`;  // Position the heart at mouse position
    heart.style.width = "60px"; // Slightly larger heart size
    heart.style.height = "60px"; // Slightly larger heart size
    heart.classList.add("heart"); // Add a class for CSS animation
  
    document.body.appendChild(heart);
  
    // Remove the heart after animation ends
    heart.addEventListener("animationend", function () {
      heart.remove();
    });
  });
  
  // Optional: You can add confetti on mouse click for added effect
  document.addEventListener("click", function () {
    confetti();
  });
  