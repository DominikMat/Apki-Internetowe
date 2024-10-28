const constellations = {
  orion: [
    { id: 'star1', posX: '280', posY: '428', luminance: 0.9, color: 'red', name: 'Betelgeuse', type: 'Supergiant', distance: 642, description: 'Massive red supergiant star often mentioned in fiction for its size and brightness.', connectedStarId: ['star2', 'star3'] },
    { id: 'star2', posX: '570', posY: '883', luminance: 0.8, color: 'blue', name: 'Rigel', type: 'Blue Supergiant', distance: 860, description: 'A brilliant blue supergiant, one of the most luminous stars in Orion.', connectedStarId: ['star1', 'star4'] },
    { id: 'star3', posX: '', posY: '', luminance: 0.6, color: 'blue-white', name: 'Bellatrix', type: 'Blue Giant', distance: 243, description: 'Known as the Amazon Star, a powerful giant star.', connectedStarId: ['star1', 'star2'] },
    { id: 'star4', posX: '', posY: '', luminance: 0.7, color: 'white', name: 'Mintaka', type: 'Binary Star System', distance: 916, description: 'One of the three stars in Orion’s Belt.', connectedStarId: ['star2', 'star5'] },
    { id: 'star5', posX: '', posY: '', luminance: 0.6, color: 'blue-white', name: 'Alnilam', type: 'Blue Supergiant', distance: 1340, description: 'The central star of Orion’s Belt.', connectedStarId: ['star4', 'star6'] },
    { id: 'star6', posX: '', posY: '', luminance: 0.6, color: 'blue-white', name: 'Alnitak', type: 'Triple Star System', distance: 736, description: 'The leftmost star in Orion’s Belt.', connectedStarId: ['star5'] }
  ],

  bigDipper: [
    { id: 'star7', posX: '', posY: '', luminance: 0.8, color: 'white', name: 'Dubhe', type: 'Giant', distance: 123, description: 'Part of the Big Dipper asterism, marks the tip of the bowl.', connectedStarId: ['star8', 'star9'] },
    { id: 'star8', posX: '', posY: '', luminance: 0.7, color: 'white', name: 'Merak', type: 'Main Sequence Star', distance: 79, description: 'The star at the bottom right corner of the Big Dipper’s bowl.', connectedStarId: ['star7', 'star9'] },
    { id: 'star9', posX: '', posY: '', luminance: 0.7, color: 'white', name: 'Phecda', type: 'Main Sequence Star', distance: 84, description: 'One of the bowl stars of the Big Dipper, helps in finding the North Star.', connectedStarId: ['star8', 'star10'] },
    { id: 'star10', posX: '', posY: '', luminance: 0.8, color: 'white', name: 'Megrez', type: 'Main Sequence Star', distance: 80, description: 'Marks the corner where the handle meets the bowl of the Big Dipper.', connectedStarId: ['star9', 'star11'] },
    { id: 'star11', posX: '', posY: '', luminance: 0.8, color: 'white', name: 'Alioth', type: 'Main Sequence Star', distance: 81, description: 'Brightest star in the handle of the Big Dipper.', connectedStarId: ['star10', 'star12'] },
    { id: 'star12', posX: '', posY: '', luminance: 0.9, color: 'white', name: 'Mizar', type: 'Binary System', distance: 78, description: 'A famous binary system in the Big Dipper’s handle.', connectedStarId: ['star11', 'star13'] },
    { id: 'star13', posX: '', posY: '', luminance: 0.6, color: 'white', name: 'Alkaid', type: 'Main Sequence Star', distance: 101, description: 'The tip of the Big Dipper’s handle.', connectedStarId: ['star12'] }
  ],

  cassiopeia: [
    { id: 'star14', posX: '', posY: '', luminance: 0.6, color: 'white', name: 'Schedar', type: 'Giant', distance: 228, description: 'A red giant and the brightest star in Cassiopeia.', connectedStarId: ['star15', 'star16'] },
    { id: 'star15', posX: '', posY: '', luminance: 0.5, color: 'white', name: 'Caph', type: 'Main Sequence Star', distance: 55, description: 'One of the five stars forming the “W” of Cassiopeia.', connectedStarId: ['star14', 'star16'] },
    { id: 'star16', posX: '', posY: '', luminance: 0.5, color: 'blue-white', name: 'Tsih', type: 'Blue Giant', distance: 613, description: 'Also known as Navi, often used in navigation.', connectedStarId: ['star14', 'star15', 'star17'] },
    { id: 'star17', posX: '', posY: '', luminance: 0.5, color: 'white', name: 'Ruchbah', type: 'Giant', distance: 99, description: 'Forms part of the W shape in Cassiopeia.', connectedStarId: ['star16', 'star18'] },
    { id: 'star18', posX: '', posY: '', luminance: 0.5, color: 'blue-white', name: 'Segin', type: 'Blue Giant', distance: 441, description: 'The fifth star completing Cassiopeia’s W shape.', connectedStarId: ['star17'] }
  ],

  cygnus: [
    { id: 'star23', posX: '', posY: '', luminance: 0.9, color: 'blue-white', name: 'Deneb', type: 'Blue Supergiant', distance: 2600, description: 'One of the most distant stars visible to the naked eye, forming the tail of the swan.', connectedStarId: ['star24'] },
    { id: 'star24', posX: '', posY: '', luminance: 0.8, color: 'blue-white', name: 'Sadr', type: 'Supergiant', distance: 1800, description: 'Located at the heart of Cygnus, marking the central cross point.', connectedStarId: ['star23', 'star25'] },
    { id: 'star25', posX: '', posY: '', luminance: 0.7, color: 'blue-white', name: 'Albireo', type: 'Binary System', distance: 430, description: 'A striking binary system with a yellow and blue star, marking the head of the swan.', connectedStarId: ['star24'] },
    { id: 'star26', posX: '', posY: '', luminance: 0.6, color: 'blue-white', name: 'Gienah', type: 'Giant', distance: 72, description: 'Part of the main cross shape of Cygnus, close to the wingspan.', connectedStarId: ['star24', 'star27'] },
    { id: 'star27', posX: '', posY: '', luminance: 0.7, color: 'white', name: 'Rukh', type: 'Giant', distance: 98, description: 'Also called Gienah Cygni, a significant part of Cygnus’s wing.', connectedStarId: ['star26'] }
  ],

  leo: [
    { id: 'star28', posX: '', posY: '', luminance: 0.8, color: 'blue-white', name: 'Regulus', type: 'Main Sequence Star', distance: 79, description: 'Brightest star in Leo, often called the “Heart of the Lion.”', connectedStarId: ['star29'] },
    { id: 'star29', posX: '', posY: '', luminance: 0.7, color: 'white', name: 'Denebola', type: 'Main Sequence Star', distance: 36, description: 'Forms the tail of the lion in the Leo constellation.', connectedStarId: ['star28', 'star30'] },
    { id: 'star30', posX: '', posY: '', luminance: 0.6, color: 'white', name: 'Algieba', type: 'Giant', distance: 130, description: 'Located in the mane of Leo; known for its orange-red color.', connectedStarId: ['star29', 'star31'] },
    { id: 'star31', posX: '', posY: '', luminance: 0.5, color: 'white', name: 'Zosma', type: 'Main Sequence Star', distance: 58, description: 'Part of Leo’s back, a medium-bright star visible in the night sky.', connectedStarId: ['star30', 'star32'] },
    { id: 'star32', posX: '', posY: '', luminance: 0.4, color: 'white', name: 'Chort', type: 'Main Sequence Star', distance: 165, description: 'Forms Leo’s hind leg, relatively close to Denebola.', connectedStarId: ['star31'] }
  ],

  canisMajor: [
    { id: 'star33', posX: '', posY: '', luminance: 1.0, color: 'blue-white', name: 'Sirius', type: 'Binary System', distance: 8.6, description: 'Brightest star in the night sky, part of Canis Major, often called the “Dog Star.”', connectedStarId: ['star34'] },
    { id: 'star34', posX: '', posY: '', luminance: 0.7, color: 'blue-white', name: 'Mirzam', type: 'Giant', distance: 500, description: 'Called the “Announcer” star, as it rises before Sirius.', connectedStarId: ['star33', 'star35'] },
    { id: 'star35', posX: '', posY: '', luminance: 0.6, color: 'white', name: 'Wezen', type: 'Supergiant', distance: 1600, description: 'A supergiant star, representing part of the Great Dog’s body.', connectedStarId: ['star34', 'star36'] },
    { id: 'star36', posX: '', posY: '', luminance: 0.5, color: 'white', name: 'Adhara', type: 'Giant', distance: 430, description: 'Historically the second-brightest star in the night sky.', connectedStarId: ['star35'] },
    { id: 'star37', posX: '', posY: '', luminance: 0.6, color: 'blue-white', name: 'Aludra', type: 'Supergiant', distance: 3000, description: 'Marks the tail of Canis Major.', connectedStarId: ['star36'] }
  ],

  aquarius: [
    { id: 'star38', posX: '', posY: '', luminance: 0.5, color: 'white', name: 'Sadalmelik', type: 'Giant', distance: 760, description: 'Brightest star in Aquarius, also known as “Luck of the King.”', connectedStarId: ['star39'] },
    { id: 'star39', posX: '', posY: '', luminance: 0.5, color: 'white', name: 'Sadalsuud', type: 'Giant', distance: 540, description: 'Called “Luck of Luck,” marking the left shoulder of Aquarius.', connectedStarId: ['star38', 'star40'] },
    { id: 'star40', posX: '', posY: '', luminance: 0.4, color: 'white', name: 'Skat', type: 'Main Sequence Star', distance: 158, description: 'Part of Aquarius’s leg; often used as a reference point for stargazing.', connectedStarId: ['star39', 'star41'] },
    { id: 'star41', posX: '', posY: '', luminance: 0.3, color: 'white', name: 'Albali', type: 'Main Sequence Star', distance: 250, description: 'Located in Aquarius’s arm, marking the hand of the water bearer.', connectedStarId: ['star40'] },
  ],

  gemini: [
    { id: 'star27', posX: '', posY: '', luminance: 1.0, color: 'orange', name: 'Castor', type: 'Multiple Star System', distance: 51, description: 'A bright star in Gemini, known for its multiple components.', connectedStarId: ['star28', 'star29'] },
    { id: 'star28', posX: '', posY: '', luminance: 0.9, color: 'white', name: 'Pollux', type: 'Giant', distance: 34, description: 'The brightest star in Gemini, it is an orange giant.', connectedStarId: ['star27'] },
    { id: 'star29', posX: '', posY: '', luminance: 0.5, color: 'white', name: 'Tejat', type: 'Giant', distance: 189, description: 'A binary star in Gemini.', connectedStarId: ['star30'] },
    { id: 'star30', posX: '', posY: '', luminance: 0.6, color: 'yellow', name: 'Wasat', type: 'Main Sequence', distance: 60, description: 'The third-brightest star in Gemini, located near the center.', connectedStarId: [] },
  ],

  pisces: [
    { id: 'star31', posX: '', posY: '', luminance: 0.6, color: 'yellow', name: 'Alrescha', type: 'Double Star', distance: 139, description: 'A double star marking the head of the fish.', connectedStarId: ['star32', 'star33'] },
    { id: 'star32', posX: '', posY: '', luminance: 0.5, color: 'white', name: 'Fum al Samakah', type: 'Giant', distance: 146, description: 'Located at the tail of Pisces, it is a giant star.', connectedStarId: [] },
    { id: 'star33', posX: '', posY: '', luminance: 0.4, color: 'white', name: 'Markab', type: 'Giant', distance: 123, description: 'A bright star at the end of the fish.', connectedStarId: [] },
    { id: 'star34', posX: '', posY: '', luminance: 0.5, color: 'yellow', name: 'Bahr', type: 'Main Sequence', distance: 118, description: 'One of the stars of Pisces, with a faint glow.', connectedStarId: [] },
  ],

  aries: [
    { id: 'star35', posX: '', posY: '', luminance: 0.9, color: 'white', name: 'Hamal', type: 'Giant', distance: 66, description: 'The brightest star in Aries, a red giant.', connectedStarId: ['star36', 'star37'] },
    { id: 'star36', posX: '', posY: '', luminance: 0.7, color: 'orange', name: 'Sheratan', type: 'Binary Star', distance: 59, description: 'A binary star system located in the constellation Aries.', connectedStarId: ['star35'] },
    { id: 'star37', posX: '', posY: '', luminance: 0.5, color: 'yellow', name: 'Mesarthim', type: 'Binary Star', distance: 59, description: 'A binary star system, part of Aries.', connectedStarId: [] },
    { id: 'star38', posX: '', posY: '', luminance: 0.4, color: 'white', name: 'Botein', type: 'Main Sequence', distance: 185, description: 'A faint star located in Aries.', connectedStarId: [] },
  ],

  
  libra: [
    { id: 'star43', posX: '', posY: '', luminance: 0.5, color: 'yellow', name: 'Zubenelgenubi', type: 'Giant', distance: 75, description: 'The brightest star in Libra, also known as Alpha Librae.', connectedStarId: ['star44', 'star45'] },
    { id: 'star44', posX: '', posY: '', luminance: 0.6, color: 'blue', name: 'Zubeneschamali', type: 'Giant', distance: 66, description: 'A double star that is the second brightest in Libra.', connectedStarId: [] },
    { id: 'star45', posX: '', posY: '', luminance: 0.4, color: 'white', name: 'Beta Librae', type: 'Main Sequence', distance: 500, description: 'A bright star located in the scales, also known as Beta Librae.', connectedStarId: [] },
    { id: 'star46', posX: '', posY: '', luminance: 0.3, color: 'white', name: 'Gamma Librae', type: 'Main Sequence', distance: 126, description: 'A faint star in Libra.', connectedStarId: [] },
    { id: 'star47', posX: '', posY: '', luminance: 0.3, color: 'orange', name: 'Delta Librae', type: 'Main Sequence', distance: 70, description: 'A dimmer star in Libra.', connectedStarId: [] },
  ],

  taurus: [
    { id: 'star1', posX: '', posY: '', luminance: 0.8, color: 'yellow', name: 'Aldebaran', type: 'Giant', distance: 65, description: 'The eye of the bull, a red giant star.' },
    { id: 'star2', posX: '', posY: '', luminance: 0.5, color: 'white', name: 'El Nath', type: 'B-type main-sequence', distance: 130, description: 'Marks the tip of the horn of Taurus.' },
    { id: 'star3', posX: '', posY: '', luminance: 0.4, color: 'white', name: 'Zeta Tauri', type: 'B-type main-sequence', distance: 440, description: 'A binary star system in Taurus.' },
    { id: 'star4', posX: '', posY: '', luminance: 0.6, color: 'yellow', name: 'Elnath', type: 'Giant', distance: 130, description: 'Located on the border with the constellation Auriga.' },
  ],

  cancer: [
    { id: 'star1', posX: '', posY: '', luminance: 0.3, color: 'white', name: 'Tarf', type: 'Giant', distance: 280, description: 'The brightest star in Cancer.' },
    { id: 'star2', posX: '', posY: '', luminance: 0.2, color: 'white', name: 'Acubens', type: 'B-type main-sequence', distance: 170, description: 'A binary star system in Cancer.' },
    { id: 'star3', posX: '', posY: '', luminance: 0.1, color: 'white', name: 'Beta Cancri', type: 'Giant', distance: 500, description: 'Another notable star in the constellation.' },
    { id: 'star4', posX: '', posY: '', luminance: 0.4, color: 'white', name: 'Delta Cancri', type: 'Giant', distance: 650, description: 'A double star system.' },
  ],

  virgo: [
    { id: 'star1', posX: '', posY: '', luminance: 0.9, color: 'yellow', name: 'Spica', type: 'B-type giant', distance: 250, description: 'The brightest star in Virgo.' },
    { id: 'star2', posX: '', posY: '', luminance: 0.5, color: 'white', name: 'Porrima', type: 'Binary star', distance: 38, description: 'A binary star known for its orbital period.' },
    { id: 'star3', posX: '', posY: '', luminance: 0.4, color: 'white', name: 'Zavijava', type: 'Giant', distance: 39, description: 'A double star system.' },
    { id: 'star4', posX: '', posY: '', luminance: 0.3, color: 'white', name: 'Beta Virginis', type: 'Giant', distance: 90, description: 'Another notable star in the constellation.' },
  ],

  scorpius: [
    { id: 'star1', posX: '', posY: '', luminance: 0.8, color: 'red', name: 'Antares', type: 'Red supergiant', distance: 550, description: 'The heart of the Scorpion.' },
    { id: 'star2', posX: '', posY: '', luminance: 0.6, color: 'white', name: 'Shaula', type: 'B-type giant', distance: 700, description: 'One of the brightest stars in Scorpius.' },
    { id: 'star3', posX: '', posY: '', luminance: 0.5, color: 'white', name: 'Lesath', type: 'B-type giant', distance: 500, description: 'A binary star system.' },
    { id: 'star4', posX: '', posY: '', luminance: 0.4, color: 'white', name: 'Sargas', type: 'Giant', distance: 80, description: 'Another prominent star in Scorpius.' },
  ],

  ursaMinor: [
    { id: 'star1', posX: '', posY: '', luminance: 0.5, color: 'white', name: 'Polaris', type: 'Supergiant', distance: 433, description: 'The North Star, located at the end of the Little Dipper.' },
    { id: 'star2', posX: '', posY: '', luminance: 0.3, color: 'white', name: 'Kochab', type: 'Giant', distance: 130, description: 'One of the brightest stars in Ursa Minor.' },
    { id: 'star3', posX: '', posY: '', luminance: 0.4, color: 'white', name: 'Pherkad', type: 'Giant', distance: 130, description: 'Often referred to as the "Guardians of the Pole".' },
    { id: 'star4', posX: '', posY: '', luminance: 0.2, color: 'white', name: 'Yildun', type: 'Main-sequence', distance: 90, description: 'A relatively faint star in the constellation.' },
  ],
  
  sagittarius: [
    { id: 'star1', posX: '', posY: '', luminance: 0.6, color: 'yellow', name: 'Kaus Australis', type: 'Giant', distance: 143, description: 'The brightest star in Sagittarius, known as the southern bow.' },
    { id: 'star2', posX: '', posY: '', luminance: 0.5, color: 'white', name: 'Kaus Media', type: 'Giant', distance: 155, description: 'Another prominent star in the constellation.' },
    { id: 'star3', posX: '', posY: '', luminance: 0.4, color: 'white', name: 'Kaus Borealis', type: 'Giant', distance: 138, description: 'Forms part of the bow of the archer.' },
    { id: 'star4', posX: '', posY: '', luminance: 0.3, color: 'white', name: 'Ascella', type: 'Giant', distance: 87, description: 'Represents the archer\'s elbow.' },
  ],
  
  phoenix: [
    { id: 'star1', posX: '', posY: '', luminance: 0.5, color: 'orange', name: 'Ankaa', type: 'Giant', distance: 75, description: 'The brightest star in the constellation Phoenix.' },
    { id: 'star2', posX: '', posY: '', luminance: 0.3, color: 'white', name: 'Beta Phoenicis', type: 'Giant', distance: 45, description: 'Another notable star in Phoenix.' },
    { id: 'star3', posX: '', posY: '', luminance: 0.2, color: 'white', name: 'Alpha Phoenicis', type: 'Giant', distance: 80, description: 'One of the fainter stars in the constellation.' },
    { id: 'star4', posX: '', posY: '', luminance: 0.4, color: 'white', name: 'Gamma Phoenicis', type: 'Giant', distance: 100, description: 'A notable star in Phoenix.' },
  ]

  // bootes: [
  //   { id: 'star39', posX: '', posY: '', luminance: 1.0, color: 'orange', name: 'Arcturus', type: 'Giant', distance: 37, description: 'The brightest star in Boötes and the fourth-brightest star in the night sky.', connectedStarId: ['star40', 'star41'] },
  //   { id: 'star40', posX: '', posY: '', luminance: 0.6, color: 'white', name: 'Izar', type: 'Binary Star', distance: 200, description: 'A beautiful binary star, also known as Epsilon Boötis.', connectedStarId: [] },
  //   { id: 'star41', posX: '', posY: '', luminance: 0.5, color: 'yellow', name: 'Seginus', type: 'Giant', distance: 100, description: 'A bright star located in the northern part of Boötes.', connectedStarId: [] },
  //   { id: 'star42', posX: '', posY: '', luminance: 0.4, color: 'white', name: 'Muphrid', type: 'Giant', distance: 47, description: 'A giant star that is part of Boötes constellation.', connectedStarId: [] },
  // ],

  // lyra: [
  //   { id: 'star48', posX: '', posY: '', luminance: 1.0, color: 'blue', name: 'Vega', type: 'Main Sequence', distance: 25, description: 'The brightest star in Lyra, part of the Summer Triangle.', connectedStarId: ['star49', 'star50', 'star51'] },
  //   { id: 'star49', posX: '', posY: '', luminance: 0.5, color: 'white', name: 'Sheliak', type: 'Giant', distance: 138, description: 'A bright star in Lyra, known for its variability.', connectedStarId: [] },
  //   { id: 'star50', posX: '', posY: '', luminance: 0.4, color: 'orange', name: 'Sulafat', type: 'Main Sequence', distance: 240, description: 'A star located in Lyra, known for its brightness.', connectedStarId: [] },
  //   { id: 'star51', posX: '', posY: '', luminance: 0.5, color: 'blue', name: 'Delta Lyrae', type: 'Giant', distance: 110, description: 'A binary star in Lyra.', connectedStarId: [] },
  //   { id: 'star52', posX: '', posY: '', luminance: 0.5, color: 'white', name: 'Epsilon Lyrae', type: 'Binary', distance: 162, description: 'A well-known binary star system in Lyra.', connectedStarId: [] },
  // ],

  // puppis: [
  //   { id: 'star53', posX: '', posY: '', luminance: 0.8, color: 'yellow', name: 'Naos', type: 'Giant', distance: 60, description: 'The brightest star in Puppis, part of the Argo constellation.', connectedStarId: ['star54', 'star55'] },
  //   { id: 'star54', posX: '', posY: '', luminance: 0.7, color: 'orange', name: 'Achernar', type: 'Giant', distance: 139, description: 'A bright star that is the southernmost in the constellation.', connectedStarId: [] },
  //   { id: 'star55', posX: '', posY: '', luminance: 0.6, color: 'white', name: 'Gomeisa', type: 'Giant', distance: 200, description: 'A bright giant star in Puppis.', connectedStarId: [] },
  //   { id: 'star56', posX: '', posY: '', luminance: 0.5, color: 'blue', name: 'LHS 420', type: 'Dwarf', distance: 400, description: 'A faint star located in Puppis.', connectedStarId: [] },
  //   { id: 'star57', posX: '', posY: '', luminance: 0.4, color: 'white', name: 'Kappa Puppis', type: 'Main Sequence', distance: 145, description: 'A faint star in Puppis.', connectedStarId: [] },
  // ],

  // pegasus: [
  //   { id: 'star58', posX: '', posY: '', luminance: 1.0, color: 'white', name: 'Enif', type: 'Giant', distance: 700, description: 'The brightest star in Pegasus, located at the nose of the horse.', connectedStarId: ['star59', 'star60', 'star61'] },
  //   { id: 'star59', posX: '', posY: '', luminance: 0.6, color: 'yellow', name: 'Markab', type: 'Giant', distance: 180, description: 'A bright star in Pegasus, located at the wing.', connectedStarId: [] },
  //   { id: 'star60', posX: '', posY: '', luminance: 0.5, color: 'blue', name: 'Scheat', type: 'Giant', distance: 196, description: 'A red giant star located in Pegasus.', connectedStarId: [] },
  //   { id: 'star61', posX: '', posY: '', luminance: 0.4, color: 'orange', name: 'Matar', type: 'Main Sequence', distance: 600, description: 'A star located in the constellation Pegasus.', connectedStarId: [] },
  //   { id: 'star62', posX: '', posY: '', luminance: 0.3, color: 'white', name: 'Alpha Pegasi', type: 'Main Sequence', distance: 1000, description: 'A faint star in Pegasus.', connectedStarId: [] },
  // ],
};
