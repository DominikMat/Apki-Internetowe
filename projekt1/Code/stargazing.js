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
  titleElem.innerHTML = `<div class="label-name">${star.name} <span class="label-type">(${(star.type) ? star.type.toUpperCase() : "---"})</span></div>`
  titleElem.style.color = getColorRGBA(star.color)

  const distanceElem = document.createElement('div');
  distanceElem.classList.add('label-distance');
  distanceElem.innerText = star.distance ? `${star.distance} light years away` : '';

  const descriptionElem = document.createElement('div');
  descriptionElem.classList.add('label-description');
  descriptionElem.innerText = star.description || '';

  // Append each line to the label
  labelElem.append(titleElem);
  if (star.distance) labelElem.appendChild(distanceElem);
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
    let posX = (star.posX/10 * 9/16 + 9/16/2*100 + 7) + "%"
    let posY = (star.posY/10 - 10) + "%"
    starElem.style.top = posY;
    starElem.style.left = posX;

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
    hitbox.style.left = posX; // Set the same position as the star
    hitbox.style.top = posY; // Set the same position as the star
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
    case 'blue-white': return `rgb(176, 221, 255)`; // light blue
    case 'red': return `rgb(255, 172, 172)`;   // Light red
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
