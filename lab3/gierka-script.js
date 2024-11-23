// EKRAN

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ZOMBIE

// Zombie spritemap
const zombieSprite = new Image();
zombieSprite.src = 'images/walkingdead.png';

let zombies = [];
let score = 0;
let lives = 3;

// Funkcja tworzenia zombie
function createZombie() {
  const size = Math.random() * 100 + 150; // Losowy rozmiar zombie
  const speed = Math.random() * 4 + 1; // Losowa prędkość
  const y = Math.random() * (canvas.height / 2) + canvas.height / 4; // Dolna połowa ekranu
  zombies.push({
    x: canvas.width,
    y: y,
    size: size,
    speed: speed,
    frame: 0,
    frameDelay: 0 // Kontrola szybkości animacji
  });
}

// Funkcja rysowania zombie
function drawZombie(zombie) {
  const frameWidth = zombieSprite.width / 10; // Zakładam 4 klatki
  const frameHeight = zombieSprite.height;

  ctx.drawImage(
    zombieSprite,
    zombie.frame * frameWidth, 0, // Wybór klatki spritemapy
    frameWidth, frameHeight,
    zombie.x, zombie.y,
    zombie.size, zombie.size
  );

  // Animacja: zmiana animcji co 17 klatek gry
  zombie.frameDelay++;
  if (zombie.frameDelay >= 17) {
    zombie.frame = (zombie.frame + 1) % 10; // Cykl przez 4 klatki
    zombie.frameDelay = 0;
  }
}

// CELOWNIK

const aimImage = new Image();
aimImage.src = 'images/aim.png';

let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;
const rect = canvas.getBoundingClientRect();

canvas.addEventListener('mousemove', (e) => {
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
});

// STRZAL 

// Obsługa strzału
canvas.addEventListener('click', (e) => {
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;

    let hit = false;
    zombies.forEach((zombie, index) => {
        if (
        mouseX >= zombie.x &&
        mouseX <= zombie.x + zombie.size &&
        mouseY >= zombie.y &&
        mouseY <= zombie.y + zombie.size
        ) {
        zombies.splice(index, 1); // Usuń trafionego zombie
        score += 20;
        hit = true;
        }
    });

    if (!hit) {
        score -= 5;
    }

    document.getElementById('score').textContent = score;
});

// GLOWNA PETLA
function updateGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  zombies.forEach((zombie, index) => {
    zombie.x -= zombie.speed;
    drawZombie(zombie);

  // jesli zombie dojdzie do lewej krawedzi ekranu - tracisz zycie
    if (zombie.x + zombie.size < 0) {
      zombies.splice(index, 1);
      lives--;
      document.getElementById(`heart${lives + 1}`).src = 'images/empty_heart.png';

      if (lives === 0) {
        endGame();
      }
    }
  });


    // Rysuj celownik
    const sightSize = 150
    ctx.drawImage(aimImage, mouseX - sightSize/2, mouseY - sightSize/2, sightSize, sightSize);
  
    requestAnimationFrame(updateGame);
}

// KONIEC GRY
const finalScoreEl = document.getElementById('final-score');
const gameOverPopup = document.getElementById('game-over-popup');
const sadMusic = document.getElementById('sad-music');

function endGame() {
    // Ukryj kursor
    canvas.style.cursor = "default";
    sadMusic.play()
    gameOverPopup.style.display = 'block';
    finalScoreEl.textContent = score;
}

// RESTART GRY
const restartBtn = document.getElementById('restart-btn');
restartBtn.addEventListener('click', () => {
location.reload();
});

// ROZPOCZECIE
function startGame() {
    // Ukryj kursor
    canvas.style.cursor = "none";
    
    // Resetuj zmienne, liczby żyć i punkty
    lives = 3;
    score = 0;
    zombies = [];

    // Uruchom grę
    updateGame();
}

startGame();
setInterval(createZombie, 2000);
