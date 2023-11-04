
for (let i = 0; i < 100; i++) {
  createStar();
  
}

// Function to create a star
function createStar() {
  const star = document.createElement("div");
  star.className = "star";

  // Randomly position the star within the window
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  star.style.left = x + "px";
  star.style.top = y + "px";

  // Randomly set the size of the star
  const size = Math.random() * 3 + 1;
  star.style.width = size + "px";
  star.style.height = size + "px";

  // Randomly set the animation delay
  const delay = Math.random() * 5 + 1;
  star.style.animationDelay = delay + "s";

  // Append the star to the body
  document.body.appendChild(star);
}
