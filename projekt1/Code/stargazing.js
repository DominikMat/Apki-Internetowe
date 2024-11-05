const constellations = {
  orion: [
  { id: 'bet', name: 'Betelgeuse', posX: '280', posY: '428', connectedStarId: ['mel', 'alt'], luminance: 0.9, color: 'red', type: 'Supergiant', distance: 642, description: 'Massive red supergiant star often mentioned in fiction for its size and brightness.' },
  { id: 'rig', name: 'Rigel', posX: '570', posY: '883', connectedStarId: ['sap', 'min'], luminance: 0.8, color: 'blue', type: 'Blue Supergiant', distance: 860, description: 'A brilliant blue supergiant, one of the most luminous stars in Orion.' },
  { id: 'bel', name: 'Bellatrix', posX: '493', posY: '470', connectedStarId: ['mel', 'min','14'], luminance: 0.6, color: 'blue-white', type: 'Blue Giant', distance: 243, description: 'Known as the Amazon Star, a powerful giant star.' },
  { id: 'min', name: 'Mintaka', posX: '491', posY: '650', connectedStarId: ['bel', 'anl','rig'], luminance: 0.7, color: 'white', type: 'Binary Star System', distance: 916, description: 'One of the three stars in Orion’s Belt.' },
  { id: 'anl', name: 'Alnilam', posX: '421', posY: '683', connectedStarId: ['min', 'alt'], luminance: 0.6, color: 'blue-white', type: 'Blue Supergiant', distance: 1340, description: 'The central star of Orion’s Belt.' },
  { id: 'alt', name: 'Alnitak', posX: '382', posY: '709', connectedStarId: ['anl','sap','bet'], luminance: 0.6, color: 'blue-white', type: 'Triple Star System', distance: 736, description: '' },
  { id: 'mel', name: 'Melissa', posX: '424', posY: '368', connectedStarId: ['bet','bel'], luminance: 0.6, color: 'blue-white', type: 'Triple Star System', distance: 736, description: '' },
  { id: 'sap', name: 'Saiph', posX: '332', posY: '926', connectedStarId: ['alt','rig'], luminance: 0.6, color: 'blue-white', type: 'Triple Star System', distance: 736, description: '' },
  { id: '14', name: '14', posX: '617', posY: '406', connectedStarId: ['bel','pi1'], luminance: 0.6, color: 'blue-white', type: null, distance: null, description: '' },
  { id: 'pi1', name: 'π1', posX: '704', posY: '358', connectedStarId: ['14','pi2'], luminance: 0.6, color: 'blue-white', type: null, distance: null, description: '' },
  { id: 'pi2', name: 'π2', posX: '740', posY: '394', connectedStarId: ['pi3','pi1'], luminance: 0.6, color: 'blue-white', type: null, distance: null, description: '' },
  { id: 'pi3', name: 'π3', posX: '746', posY: '445', connectedStarId: ['pi4','pi2'], luminance: 0.6, color: 'blue-white', type: null, distance: null, description: '' },
  { id: 'pi4', name: 'π4', posX: '734', posY: '491', connectedStarId: ['pi5','pi3'], luminance: 0.6, color: 'blue-white', type: null, distance: null, description: '' },
  { id: 'pi5', name: 'π5', posX: '718', posY: '573', connectedStarId: ['pi6','pi4'], luminance: 0.6, color: 'blue-white', type: null, distance: null, description: '', },
  { id: 'pi6', name: 'π6', posX: '691', posY: '595', connectedStarId: ['pi5'], luminance: 0.6, color: 'blue-white', type: null, distance: null, description: '' }
  ],
 
  bigDipper: [
  { id: 'dub', name: 'Dubhe', posX: '514', posY: '374', connectedStarId: ['meg', 'mer'], luminance: 0.8, color: 'white', type: 'Giant', distance: 123, description: 'Part of the Big Dipper asterism, marks the tip of the bowl.' },
  { id: 'mer', name: 'Merak', posX: '515', posY: '464', connectedStarId: ['dub', 'phe'], luminance: 0.7, color: 'white', type: 'Main Sequence Star', distance: 79, description: 'The star at the bottom right corner of the Big Dipper’s bowl.' },
  { id: 'phe', name: 'Phecda', posX: '388', posY: '493', connectedStarId: ['meg', 'mer'], luminance: 0.7, color: 'white', type: 'Main Sequence Star', distance: 84, description: 'One of the bowl stars of the Big Dipper, helps in finding the North Star.' },
  { id: 'meg', name: 'Megrez', posX: '350', posY: '430', connectedStarId: ['dub', 'phe'], luminance: 0.8, color: 'white', type: 'Main Sequence Star', distance: 80, description: 'Marks the corner where the handle meets the bowl of the Big Dipper.' },
  { id: 'ali', name: 'Alioth', posX: '265', posY: '418', connectedStarId: ['meg', 'miz'], luminance: 0.8, color: 'white', type: 'Main Sequence Star', distance: 81, description: 'Brightest star in the handle of the Big Dipper.' },
  { id: 'miz', name: 'Mizar', posX: '190', posY: '407', connectedStarId: ['meg','alk'], luminance: 0.9, color: 'white', type: 'Binary System', distance: 78, description: 'A famous binary system in the Big Dipper’s handle.' },
  { id: 'alk', name: 'Alkaid', posX: '90', posY: '455', connectedStarId: ['miz'], luminance: 0.6, color: 'white', type: 'Main Sequence Star', distance: 101, description: 'The tip of the Big Dipper’s handle.', }
  ],
 
  cassiopeia: [
  { id: 'sch', name: 'Schedar', posX: '635', posY: '736', connectedStarId: ['cap', 'nav'], luminance: 0.6, color: 'white', type: 'Giant', distance: 228, description: 'A red giant and the brightest star in Cassiopeia.' },
  { id: 'cap', name: 'Caph', posX: '850', posY: '545', connectedStarId: ['sch'], luminance: 0.5, color: 'white', type: 'Main Sequence Star', distance: 55, description: 'One of the five stars forming the “W” of Cassiopeia.' },
  { id: 'nav', name: 'Navi', posX: '499', posY: '494', connectedStarId: ['ruc', 'sch'], luminance: 0.5, color: 'blue-white', type: 'Blue Giant', distance: 613, description: 'Also known as Tsih, often used in navigation.' },
  { id: 'ruc', name: 'Ruchbah', posX: '275', posY: '509', connectedStarId: ['seg', 'nav'], luminance: 0.5, color: 'white', type: 'Giant', distance: 99, description: 'Forms part of the W shape in Cassiopeia.' },
  { id: 'seg', name: 'Segin', posX: '113', posY: '274', connectedStarId: ['ruc'], luminance: 0.5, color: 'blue-white', type: 'Blue Giant', distance: 441, description: 'The fifth star completing Cassiopeia’s W shape.', }
  ]
 
 }

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
