
// scrolling desktop
const container = document.getElementById('scroll-container');
const leftButton = document.getElementById('leftButton');
const homeButton = document.getElementById('homeButton');
const rightButton = document.getElementById('rightButton');

function selectPage(pageIx) {
    const offset = (pageIx + 1) * -50; // Move based on index (50vw for each section)
    container.style.transform = `translateX(${offset}vw)`;

    // Hide/show buttons based on selected page
    leftButton.style.color = pageIx === -1 ? 'transparent' : 'white';
    homeButton.style.color = pageIx === 0 ? 'transparent' : 'white';
    rightButton.style.color = pageIx === 1 ? 'transparent' : 'white';
}

// Define star data for different constellations

// Define star data with expanded fields
const constellations = {
  bigDipper: [
    { id: 'star1', posX: '40%', posY: '40%', luminance: 0.8, color: 'white', name: 'Alkaid', type: 'dwarf', description: 'Brightest star in the Big Dipper' },
    { id: 'star2', posX: '50%', posY: '45%', luminance: 0.6, color: 'bluish', name: 'Mizar', type: 'binary', description: '' },
    { id: 'star3', posX: '60%', posY: '50%', luminance: 0.7, color: 'reddish', name: 'Alioth', type: 'dwarf', description: 'Faint, reddish star' },
    { id: 'star4', posX: '65%', posY: '55%', luminance: 0.5, color: 'white', name: 'Megrez', type: 'dwarf', description: '' },
    { id: 'star5', posX: '70%', posY: '60%', luminance: 0.9, color: 'bluish', name: 'Dubhe', type: 'dwarf', description: '' }
  ],
  orion: [
    { id: 'star1', posX: '25%', posY: '35%', luminance: 1, color: 'white', name: 'Betelgeuse', type: 'supergiant', description: 'Bright red star' },
    { id: 'star2', posX: '30%', posY: '40%', luminance: 0.8, color: 'bluish', name: 'Rigel', type: 'supergiant', description: '' },
    { id: 'star3', posX: '35%', posY: '45%', luminance: 0.6, color: 'white', name: 'Bellatrix', type: 'dwarf', description: '' },
    { id: 'star4', posX: '40%', posY: '50%', luminance: 0.9, color: 'reddish', name: 'Saiph', type: 'dwarf', description: 'Faint star in Orion' }
  ]
};

// Get the container element
const starContainer = document.getElementById('star-container');

// Function to instantiate and display a constellation
function displayConstellation(constellationName) {
  // Clear previous stars with fade-out animation
  const currentStars = starContainer.querySelectorAll('.star');
  currentStars.forEach(star => {
    star.style.animation = 'fadeOutStar 2s ease-in forwards';  // Fade out existing stars
    star.addEventListener('animationend', () => {
      star.remove();  // Remove the star from the DOM after fade-out
    });
  });

  // Get the star data for the selected constellation
  const stars = constellations[constellationName];

  // Create and add each star dynamically
  stars.forEach(star => {
    const starElem = document.createElement('div');
    starElem.classList.add('star');
    starElem.style.top = star.posY;
    starElem.style.left = star.posX;
    starElem.style.opacity = star.luminance;  // Set opacity based on luminance
    starElem.style.backgroundColor = getColorRGBA(star.color, star.luminance);  // Set color with luminance
    
    // Create label for hover effect
    const label = document.createElement('span');
    label.classList.add('star-label');
    label.innerText = `${star.name} (${star.type})`;
    label.style.visibility = 'hidden';  // Hide by default
    
    // Show label on hover
    starElem.addEventListener('mouseenter', () => label.style.visibility = 'visible');
    starElem.addEventListener('mouseleave', () => label.style.visibility = 'hidden');

    // Append the label to the star
    starElem.appendChild(label);
    
    // Append the star to the container
    starContainer.appendChild(starElem);
  });
}

// Helper function to convert color to rgba
function getColorRGBA(color, luminance) {
  switch (color) {
    case 'bluish': return `rgba(173, 216, 230, ${luminance})`;  // Light blue
    case 'reddish': return `rgba(255, 99, 71, ${luminance})`;   // Light red
    case 'white': return `rgba(255, 255, 255, ${luminance})`;   // White
    default: return `rgba(255, 255, 255, ${luminance})`;
  }
}

// Set up an interval to cycle through constellations
let currentConstellationIndex = 0;
const constellationNames = Object.keys(constellations);

// Display the first constellation
displayConstellation(constellationNames[currentConstellationIndex]);

// Cycle through constellations every 10 seconds
setInterval(() => {
  // Move to the next constellation
  currentConstellationIndex = (currentConstellationIndex + 1) % constellationNames.length;

  // Display the new constellation
  displayConstellation(constellationNames[currentConstellationIndex]);
}, 10000); // Change every 10 seconds (10000 milliseconds)
