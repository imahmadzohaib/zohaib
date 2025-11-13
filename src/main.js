// Generate stars with varying sizes
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 150; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  const size = Math.random() * 2 + 1;
  star.style.width = size + 'px';
  star.style.height = size + 'px';
  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';
  star.style.animationDelay = Math.random() * 3 + 's';
  star.style.animationDuration = Math.random() * 2 + 2 + 's';
  starsContainer.appendChild(star);
}

const introScreen = document.getElementById('introScreen');
const mainContent = document.getElementById('mainContent');
const introSurpriseBtn = document.getElementById('introSurpriseBtn');

let celebrationStarted = false;

// Surprise button click handler
introSurpriseBtn.addEventListener('click', () => {
  if (celebrationStarted) return;
  celebrationStarted = true;

  // Trigger massive fireworks explosion
  triggerMassiveFireworks();

  // Fade out intro and show main content
  setTimeout(() => {
    introScreen.classList.add('fade-out');
    setTimeout(() => {
      introScreen.style.display = 'none';
      mainContent.classList.add('visible');
      startBalloons();
      startConfetti();
      startAutoFireworks();
    }, 1000);
  }, 500);
});

// Balloons with improved animation
function startBalloons() {
  const colors = [
    '#ff6b9d',
    '#c44569',
    '#feca57',
    '#48dbfb',
    '#ff9ff3',
    '#54a0ff',
    '#ffd700',
    '#ff6348'
  ];
  setInterval(() => {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 95 + '%';
    balloon.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    balloon.style.animationDelay = Math.random() * 2 + 's';
    balloon.style.animationDuration = Math.random() * 4 + 8 + 's';
    document.body.appendChild(balloon);

    setTimeout(() => balloon.remove(), 12000);
  }, 1000);
}

// Confetti
function startConfetti() {
  const colors = ['#ffd700', '#ff6b9d', '#48dbfb', '#feca57', '#ff9ff3'];
  setInterval(() => {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() + 's';
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }, 100);
}

// Fireworks
const canvas = document.getElementById('fireworks-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.velocity = {
      x: (Math.random() - 0.5) * 8,
      y: (Math.random() - 0.5) * 8
    };
    this.alpha = 1;
    this.decay = Math.random() * 0.02 + 0.01;
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  update() {
    this.velocity.y += 0.1;
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.alpha -= this.decay;
  }
}

function createFirework(x, y) {
  const colors = [
    '#ffd700',
    '#ff6b9d',
    '#48dbfb',
    '#feca57',
    '#ff9ff3',
    '#54a0ff'
  ];
  const particleCount = 60;

  for (let i = 0; i < particleCount; i++) {
    particles.push(
      new Particle(x, y, colors[Math.floor(Math.random() * colors.length)])
    );
  }
}

function triggerMassiveFireworks() {
  // Create 15 fireworks in quick succession
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const x = Math.random() * canvas.width;
      const y = (Math.random() * canvas.height) / 2;
      createFirework(x, y);
    }, i * 150);
  }
}

function animate() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles = particles.filter((particle) => particle.alpha > 0);

  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  requestAnimationFrame(animate);
}

animate();

// Auto fireworks after celebration starts
let autoFireworksInterval;
function startAutoFireworks() {
  autoFireworksInterval = setInterval(() => {
    const x = Math.random() * canvas.width;
    const y = (Math.random() * canvas.height) / 2;
    createFirework(x, y);
  }, 2000);
}

// Music button
const musicBtn = document.getElementById('musicBtn');
const musicBtn1 = document.getElementById('musicBtn1');

musicBtn.addEventListener('click', () => {
alert('Thank You...');
});
musicBtn1.addEventListener('click', () => {
alert('Press Accept Button');
});

// Resize canvas
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
