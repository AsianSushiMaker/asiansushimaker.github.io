function redirectToYes() {
  window.location.href = "yes.html"; // Replace with actual link
}

let isMoving = false; // Flag to prevent jittery movement
let lastMoveTime = 0; // Track the time of last movement

function moveNoButton(event) {
  const noButton = document.getElementById('noButton');
  
  // Only trigger movement when enough time has passed to avoid jitter
  const currentTime = Date.now();
  if (currentTime - lastMoveTime < 100) {  // Delay of 100ms to prevent jitter
    return;
  }

  lastMoveTime = currentTime;

  const maxX = window.innerWidth - noButton.offsetWidth - 20; // 20px margin
  const maxY = window.innerHeight - noButton.offsetHeight - 150; // Keep it below the text and buttons

  // Get mouse position
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Calculate random position for the "No" button that moves away from the mouse
  let randomX = Math.random() * maxX;
  let randomY = Math.random() * maxY;

  // Move the "No" button far away from the mouse position by making sure it's not too close
  while (Math.abs(randomX - mouseX) < 150 || Math.abs(randomY - mouseY) < 150) {
    randomX = Math.random() * maxX;
    randomY = Math.random() * maxY;
  }

  // Apply the random position smoothly
  noButton.style.position = 'absolute';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

// Attach the event listener for mouse move
document.getElementById('noButton').addEventListener('mouseenter', () => {
  isMoving = true;
});

document.getElementById('noButton').addEventListener('mouseleave', () => {
  isMoving = false;
});

// Only trigger movement when mouse is close enough to the button
document.getElementById('noButton').addEventListener('mousemove', (event) => {
  if (isMoving) {
    moveNoButton(event);
  }
});
