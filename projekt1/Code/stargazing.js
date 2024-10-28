// Define star data with expanded fields
const constellations = {
  bigDipper: [
    { id: 'star1', posX: '40%', posY: '40%', luminance: 0.8, color: 'white', name: 'Dubhe', type: 'Giant', distance: 123, description: 'Part of the Big Dipper asterism', connectedStarId: ['star2', 'star6'] },
    { id: 'star2', posX: '45%', posY: '45%', luminance: 0.9, color: 'white', name: 'Merak', type: 'Main Sequence', distance: 79, description: 'Bright in Ursa Major', connectedStarId: ['star1', 'star3'] },
    { id: 'star3', posX: '50%', posY: '50%', luminance: 0.85, color: 'bluish', name: 'Phecda', type: 'Giant', distance: 83, description: '', connectedStarId: ['star2', 'star4'] },
    { id: 'star4', posX: '55%', posY: '52%', luminance: 0.7, color: 'white', name: 'Megrez', type: 'Main Sequence', distance: 81, description: 'Fainter star in the Big Dipper', connectedStarId: ['star3', 'star5'] },
    { id: 'star5', posX: '60%', posY: '55%', luminance: 0.6, color: 'white', name: 'Alioth', type: 'Main Sequence', distance: 81, description: '', connectedStarId: ['star4', 'star6'] },
    { id: 'star6', posX: '65%', posY: '60%', luminance: 0.9, color: 'bluish', name: 'Mizar', type: 'Double Star', distance: 78, description: 'Double star with Alcor', connectedStarId: ['star5', 'star7'] },
    { id: 'star7', posX: '70%', posY: '65%', luminance: 0.8, color: 'white', name: 'Alkaid', type: 'Giant', distance: 101, description: 'Tail end of the Big Dipper', connectedStarId: ['star6'] }
  ],
  orion: [
    { id: 'star1', posX: '25%', posY: '45%', luminance: 0.9, color: 'red', name: 'Betelgeuse', type: 'Supergiant', distance: 642, description: 'Massive red star in Orion', connectedStarId: ['star2', 'star3'] },
    { id: 'star2', posX: '30%', posY: '50%', luminance: 0.8, color: 'blueish', name: 'Bellatrix', type: 'Giant', distance: 240, description: '', connectedStarId: ['star1', 'star4'] },
    { id: 'star3', posX: '40%', posY: '55%', luminance: 0.75, color: 'white', name: 'Mintaka', type: 'Main Sequence', distance: 1200, description: 'Part of Orion\'s Belt', connectedStarId: ['star1', 'star4', 'star5'] },
    { id: 'star4', posX: '35%', posY: '60%', luminance: 0.85, color: 'blueish', name: 'Alnilam', type: 'Supergiant', distance: 1340, description: 'Bright star in Orion\'s Belt', connectedStarId: ['star3', 'star5'] },
    { id: 'star5', posX: '45%', posY: '65%', luminance: 0.8, color: 'white', name: 'Alnitak', type: 'Giant', distance: 1260, description: 'Third star in Orion\'s Belt', connectedStarId: ['star3', 'star4'] },
    { id: 'star6', posX: '50%', posY: '70%', luminance: 0.85, color: 'red', name: 'Saiph', type: 'Supergiant', distance: 720, description: '', connectedStarId: ['star5'] },
    { id: 'star7', posX: '55%', posY: '75%', luminance: 0.9, color: 'blueish', name: 'Rigel', type: 'Supergiant', distance: 860, description: 'Bright blue star in Orion', connectedStarId: ['star5', 'star6'] }
  ]
};


// Get the container element
const starContainer = document.getElementById('star-container');
const homeSection = document.getElementById('sectionHome');

// Label Creator 
function createLabel(star) {
  const labelElem = document.createElement('div');
  labelElem.classList.add('label');

  // Create separate lines for name, type, distance, and optional description
  const titleElem = document.createElement('div');
  titleElem.classList.add('label-name');
  titleElem.innerHTML = `<div class="label-name">${star.name} <span class="label-type">(${star.type.toUpperCase()})</span></div>`
  titleElem.style.color = getColorRGBA(star.color)

  const distanceElem = document.createElement('div');
  distanceElem.classList.add('label-distance');
  distanceElem.innerText = star.distance ? `${star.distance} light years away` : '';

  const descriptionElem = document.createElement('div');
  descriptionElem.classList.add('label-description');
  descriptionElem.innerText = star.description || '';

  // Append each line to the label
  labelElem.append(titleElem, distanceElem);
  if (star.description) labelElem.appendChild(descriptionElem);

  labelElem.style.position = 'absolute';
  labelElem.style.visibility = 'hidden'; // Start hidden, show on hover
  return labelElem;
}
function displayStars(stars) {
  stars.forEach(star => {    
  // Create star element
    const starElem = document.createElement('div');
    starElem.classList.add('star');
    starElem.style.top = star.posY;
    starElem.style.left = star.posX;

  // Set connectedStarId as a data attribute
    starElem.dataset.id = `${star.id}-${currentConstellationIndex}`;  // Set data-id attribute
    starElem.dataset.connectedStarId = star.connectedStarId.join(','); // Use join to create a string

  // Set star size based on luminance (for example, scale from 5px to 20px)
    const size = 1 + star.luminance * 5;  // Adjust size range as needed
    starElem.style.width = `${size}px`;
    starElem.style.height = `${size}px`;
    
  // Set color based on colour data
    starElem.style.backgroundColor = getColorRGBA(star.color);  // Full color opacity
    
  // Create label element
    const label = createLabel(star);

  // Create the hitbox div
    const hitbox = document.createElement('div');
    hitbox.classList.add('star-hitbox'); // Add a class for styling
    hitbox.style.top = star.posY; // Set the same position as the star
    hitbox.style.left = star.posX; // Set the same position as the star
    // const hitboxSize = 40;
    // hitbox.style.transform = `translateX(${-hitboxSize}px)`;
    // hitbox.style.transform = `translateY(${-hitboxSize}px)`;
    starElem.hitbox = hitbox;

  //Show label on hover
    hitbox.addEventListener('mouseenter', () => label.style.visibility = 'visible' );
    hitbox.addEventListener('mouseleave', () => label.style.visibility = 'hidden'  );

  // Append the label and star to the container
    hitbox.appendChild(label);
	  starContainer.appendChild(hitbox);
    starContainer.appendChild(starElem);
  });
}
function clearCurrentStars(stars) {
  stars.forEach(star => {
    star.style.animation = 'fadeOutStar 1s ease-in forwards';  // Fade out existing stars
    star.hitbox.remove();
    star.addEventListener('animationend', () => {
      star.remove();  // Remove the star from the DOM after fade-out
    });
  });
}
function getColorRGBA(color) {
  switch (color) {
    case 'bluish': return `rgb(176, 221, 255)`; // light blue
    case 'reddish': return `rgb(255, 172, 172)`;   // Light red
    case 'white': return `rgb(255, 255, 255)`;   // White
    default: return `rgb(255, 255, 255)`;
  }
}

// Function to instantiate and display a constellation
function displayConstellation(constellationName) {
  // Clear previous stars
  const currentStars = starContainer.querySelectorAll('.star');
  clearCurrentStars(currentStars);

  // Display new stars
  const stars = constellations[constellationName];
  displayStars(stars);

  if (showLines) drawLines (showLines);
}

// LINE DISPLAY
let showLines = false;

// Toggle button and functionality
const toggleButton = document.getElementById('toggle-lines');
const canvas = document.getElementById('star-lines');
const ctx = canvas.getContext('2d');

toggleButton.addEventListener('click', () => {
  showLines = !showLines;
  toggleButton.classList.toggle('active', showLines);  // Toggle button appearance
  toggleButton.textContent = showLines ? " Hide Lines " : "Show Lines";  // Update button text
  
  // Redraw stars to add/remove lines based on the toggle state
  drawLines(showLines);
});

// Function to draw lines between stars based on data
function drawLines(showLines) {
	ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous lines
	
	canvas.width = homeSection.clientWidth;
	canvas.height = homeSection.clientHeight;
  
	if (showLines) {
		const stars = starContainer.querySelectorAll('.star');
		stars.forEach(star => {
		const connectedStarIds = star.dataset.connectedStarId.split(','); // Accessing the attribute
		const starRect = star.getBoundingClientRect();
		const starX = starRect.left + starRect.width / 2;
		const starY = starRect.top + starRect.height / 2;
		
		connectedStarIds.forEach(id => {
      let isPartOfCurrentConstallation = parseInt(star.dataset.id.slice(-1,10)) == currentConstellationIndex
      let notConnectingToSelf = star.dataset.id != `${id}-${currentConstellationIndex}`
      
			if (notConnectingToSelf && isPartOfCurrentConstallation) {
        // console.log(`.star[data-id="${id}-${currentConstellationIndex}"]`);
        const connectedStar = starContainer.querySelector(`.star[data-id="${id}-${currentConstellationIndex}"]`);
        
        if (connectedStar) {
          const connectedStarRect = connectedStar.getBoundingClientRect();
          const connectedStarX = connectedStarRect.left + connectedStarRect.width / 2;
          const connectedStarY = connectedStarRect.top + connectedStarRect.height / 2;
          
          ctx.beginPath();
          // console.log(starX,starY, " --> ", connectedStarX,connectedStarY)
          ctx.moveTo(starX, starY);
          ctx.lineTo(connectedStarX, connectedStarY);
          ctx.strokeStyle = 'rgba(255,255,255,0.4)'; // Change line color if needed
          ctx.lineWidth = 1; // Change line width if needed
          ctx.stroke();
        }
			}
		});
		});
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
}, 10000); // Change every 60 seconds (60000 milliseconds)
