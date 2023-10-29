// Set up the canvas and get its context
////var canvas = document.getElementById("smoke-canvas");
//var ctx = canvas.getContext("2d");

// Set the canvas size to be the size of the window
////canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;

// Define the particle object
var particle = {
  x: 500,
  y: 500,
  radius: 5,
  color: "rgba(255, 255, 255, 0.5)",
  vx: Math.random() * 10 - 5,
  vy: Math.random() * 10 - 5
};

// Animate the smoke effect
function animateSmoke() {
  requestAnimationFrame(animateSmoke);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particle.x += particle.vx;
  particle.y += particle.vy;
  particle.radius *= 1.05;
  particle.color = `rgba(255, 255, 255, ${1 / particle.radius})`;

  ctx.beginPath();
  ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
  ctx.fillStyle = particle.color;
  ctx.fill();
}

// Start the animation
//animate();
