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

//  cygnus: [
//  { id: 'star23', name: 'Deneb', posX: '', posY: '', connectedStarId: ['star24'], luminance: 0.9, color: 'blue-white', type: 'Blue Supergiant', distance: 2600, description: 'One of the most distant stars visible to the naked eye, forming the tail of the swan.' },
//  { id: 'star24', name: 'Sadr', posX: '', posY: '', connectedStarId: ['star23', 'star25'], luminance: 0.8, color: 'blue-white', type: 'Supergiant', distance: 1800, description: 'Located at the heart of Cygnus, marking the central cross point.' },
//  { id: 'star25', name: 'Albireo', posX: '', posY: '', connectedStarId: ['star24'], luminance: 0.7, color: 'blue-white', type: 'Binary System', distance: 430, description: 'A striking binary system with a yellow and blue star, marking the head of the swan.' },
//  { id: 'star26', name: 'Gienah', posX: '', posY: '', connectedStarId: ['star24', 'star27'], luminance: 0.6, color: 'blue-white', type: 'Giant', distance: 72, description: 'Part of the main cross shape of Cygnus, close to the wingspan.' },
//  { id: 'star27', name: 'Rukh', posX: '', posY: '', connectedStarId: ['star26'], luminance: 0.7, color: 'white', type: 'Giant', distance: 98, description: 'Also called Gienah Cygni, a significant part of Cygnus’s wing.', }
//  ],

//  leo: [
//  { id: 'star28', name: 'Regulus', posX: '', posY: '', connectedStarId: ['star29'], luminance: 0.8, color: 'blue-white', type: 'Main Sequence Star', distance: 79, description: 'Brightest star in Leo, often called the “Heart of the Lion.”' },
//  { id: 'star29', name: 'Denebola', posX: '', posY: '', connectedStarId: ['star28', 'star30'], luminance: 0.7, color: 'white', type: 'Main Sequence Star', distance: 36, description: 'Forms the tail of the lion in the Leo constellation.' },
//  { id: 'star30', name: 'Algieba', posX: '', posY: '', connectedStarId: ['star29', 'star31'], luminance: 0.6, color: 'white', type: 'Giant', distance: 130, description: 'Located in the mane of Leo; known for its orange-red color.' },
//  { id: 'star31', name: 'Zosma', posX: '', posY: '', connectedStarId: ['star30', 'star32'], luminance: 0.5, color: 'white', type: 'Main Sequence Star', distance: 58, description: 'Part of Leo’s back, a medium-bright star visible in the night sky.' },
//  { id: 'star32', name: 'Chort', posX: '', posY: '', connectedStarId: ['star31'], luminance: 0.4, color: 'white', type: 'Main Sequence Star', distance: 165, description: 'Forms Leo’s hind leg, relatively close to Denebola.', }
//  ],

//  canisMajor: [
//  { id: 'star33', name: 'Sirius', posX: '', posY: '', connectedStarId: ['star34'], luminance: 1.0, color: 'blue-white', type: 'Binary System', distance: 8.6, description: 'Brightest star in the night sky, part of Canis Major, often called the “Dog Star.”' },
//  { id: 'star34', name: 'Mirzam', posX: '', posY: '', connectedStarId: ['star33', 'star35'], luminance: 0.7, color: 'blue-white', type: 'Giant', distance: 500, description: 'Called the “Announcer” star, as it rises before Sirius.' },
//  { id: 'star35', name: 'Wezen', posX: '', posY: '', connectedStarId: ['star34', 'star36'], luminance: 0.6, color: 'white', type: 'Supergiant', distance: 1600, description: 'A supergiant star, representing part of the Great Dog’s body.' },
//  { id: 'star36', name: 'Adhara', posX: '', posY: '', connectedStarId: ['star35'], luminance: 0.5, color: 'white', type: 'Giant', distance: 430, description: 'Historically the second-brightest star in the night sky.' },
//  { id: 'star37', name: 'Aludra', posX: '', posY: '', connectedStarId: ['star36'], luminance: 0.6, color: 'blue-white', type: 'Supergiant', distance: 3000, description: 'Marks the tail of Canis Major.', }
//  ],

//  aquarius: [
//  { id: 'star38', name: 'Sadalmelik', posX: '', posY: '', connectedStarId: ['star39'], luminance: 0.5, color: 'white', type: 'Giant', distance: 760, description: 'Brightest star in Aquarius, also known as “Luck of the King.”' },
//  { id: 'star39', name: 'Sadalsuud', posX: '', posY: '', connectedStarId: ['star38', 'star40'], luminance: 0.5, color: 'white', type: 'Giant', distance: 540, description: 'Called “Luck of Luck,” marking the left shoulder of Aquarius.' },
//  { id: 'star40', name: 'Skat', posX: '', posY: '', connectedStarId: ['star39', 'star41'], luminance: 0.4, color: 'white', type: 'Main Sequence Star', distance: 158, description: 'Part of Aquarius’s leg; often used as a reference point for stargazing.' },
//  { id: 'star41', name: 'Albali', posX: '', posY: '', connectedStarId: ['star40'], luminance: 0.3, color: 'white', type: 'Main Sequence Star', distance: 250, description: 'Located in Aquarius’s arm, marking the hand of the water bearer.' },
//  ],

//  gemini: [
//  { id: 'star27', name: 'Castor', posX: '', posY: '', connectedStarId: ['star28', 'star29'], luminance: 1.0, color: 'orange', type: 'Multiple Star System', distance: 51, description: 'A bright star in Gemini, known for its multiple components.' },
//  { id: 'star28', name: 'Pollux', posX: '', posY: '', connectedStarId: ['star27'], luminance: 0.9, color: 'white', type: 'Giant', distance: 34, description: 'The brightest star in Gemini, it is an orange giant.' },
//  { id: 'star29', name: 'Tejat', posX: '', posY: '', connectedStarId: ['star30'], luminance: 0.5, color: 'white', type: 'Giant', distance: 189, description: 'A binary star in Gemini.' },
//  { id: 'star30', name: 'Wasat', posX: '', posY: '', connectedStarId: [], luminance: 0.6, color: 'yellow', type: 'Main Sequence', distance: 60, description: 'The third-brightest star in Gemini, located near the center.' },
//  ],

//  pisces: [
//  { id: 'star31', name: 'Alrescha', posX: '', posY: '', connectedStarId: ['star32', 'star33'], luminance: 0.6, color: 'yellow', type: 'Double Star', distance: 139, description: 'A double star marking the head of the fish.' },
//  { id: 'star32', name: 'Fum al Samakah', posX: '', posY: '', connectedStarId: [], luminance: 0.5, color: 'white' , type: 'Giant', distance: 146, description: 'Located at the tail of Pisces, it is a giant star.' },
//  { id: 'star33', name: 'Markab', posX: '', posY: '', connectedStarId: [], luminance: 0.4, color: 'white', type: 'Giant', distance: 123, description: 'A bright star at the end of the fish.' },
//  { id: 'star34', name: 'Bahr', posX: '', posY: '', connectedStarId: [], luminance: 0.5, color: 'yellow', type: 'Main Sequence', distance: 118, description: 'One of the stars of Pisces, with a faint glow.' },
//  ],

//  aries: [
//  { id: 'star35', name: 'Hamal', posX: '', posY: '', connectedStarId: ['star36', 'star37'], luminance: 0.9, color: 'white', type: 'Giant', distance: 66, description: 'The brightest star in Aries, a red giant.' },
//  { id: 'star36', name: 'Sheratan', posX: '', posY: '', connectedStarId: ['star35'], luminance: 0.7, color: 'orange', type: 'Binary Star', distance: 59, description: 'A binary star system located in the constellation Aries.' },
//  { id: 'star37', name: 'Mesarthim', posX: '', posY: '', connectedStarId: [], luminance: 0.5, color: 'yellow', type: 'Binary Star', distance: 59, description: 'A binary star system, part of Aries.' },
//  { id: 'star38', name: 'Botein', posX: '', posY: '', connectedStarId: [], luminance: 0.4, color: 'white', type: 'Main Sequence', distance: 185, description: 'A faint star located in Aries.' },
//  ],

 
//  libra: [
//  { id: 'star43', name: 'Zubenelgenubi', posX: '', posY: '', connectedStarId: ['star44', 'star45'], luminance: 0.5, color: 'yellow', type: 'Giant', distance: 75, description: 'The brightest star in Libra, also known as Alpha Librae.' },
//  { id: 'star44', name: 'Zubeneschamali', posX: '', posY: '', connectedStarId: [], luminance: 0.6, color: 'blue', type: 'Giant', distance: 66, description: 'A double star that is the second brightest in Libra.' },
//  { id: 'star45', name: 'Beta Librae', posX: '', posY: '', connectedStarId: [], luminance: 0.4, color: 'white', type: 'Main Sequence', distance: 500, description: 'A bright star located in the scales, also known as Beta Librae.' },
//  { id: 'star46', name: 'Gamma Librae', posX: '', posY: '', connectedStarId: [], luminance: 0.3, color: 'white', type: 'Main Sequence', distance: 126, description: 'A faint star in Libra.' },
//  { id: 'star47', name: 'Delta Librae', posX: '', posY: '', connectedStarId: [], luminance: 0.3, color: 'orange', type: 'Main Sequence', distance: 70, description: 'A dimmer star in Libra.' },
//  ],

//  taurus: [
//  { id: 'star1', name: 'Aldebaran', posX: '', posY: '', luminance: 0.8, color: 'yellow', type: 'Giant', distance: 65, description: 'The eye of the bull, a red giant star. },
//  { id: 'star2', name: 'El Nath', posX: '', posY: '', luminance: 0.5, color: 'white', type: 'B-type main-sequence', distance: 130, description: 'Marks the tip of the horn of Taurus. },
//  { id: 'star3', name: 'Zeta Tauri', posX: '', posY: '', luminance: 0.4, color: 'white', type: 'B-type main-sequence', distance: 440, description: 'A binary star system in Taurus. },
//  { id: 'star4', name: 'Elnath', posX: '', posY: '', luminance: 0.6, color: 'yellow', type: 'Giant', distance: 130, description: 'Located on the border with the constellation Auriga. },
//  ],

//  cancer: [
//  { id: 'star1', name: 'Tarf', posX: '', posY: '', luminance: 0.3, color: 'white', type: 'Giant', distance: 280, description: 'The brightest star in Cancer. },
//  { id: 'star2', name: 'Acubens', posX: '', posY: '', luminance: 0.2, color: 'white', type: 'B-type main-sequence', distance: 170, description: 'A binary star system in Cancer. },
//  { id: 'star3', name: 'Beta Cancri', posX: '', posY: '', luminance: 0.1, color: 'white', type: 'Giant', distance: 500, description: 'Another notable star in the constellation. },
//  { id: 'star4', name: 'Delta Cancri', posX: '', posY: '', luminance: 0.4, color: 'white', type: 'Giant', distance: 650, description: 'A double star system. },
//  ],

//  virgo: [
//  { id: 'star1', name: 'Spica', posX: '', posY: '', luminance: 0.9, color: 'yellow', type: 'B-type giant', distance: 250, description: 'The brightest star in Virgo. },
//  { id: 'star2', name: 'Porrima', posX: '', posY: '', luminance: 0.5, color: 'white', type: 'Binary star', distance: 38, description: 'A binary star known for its orbital period. },
//  { id: 'star3', name: 'Zavijava', posX: '', posY: '', luminance: 0.4, color: 'white', type: 'Giant', distance: 39, description: 'A double star system. },
//  { id: 'star4', name: 'Beta Virginis', posX: '', posY: '', luminance: 0.3, color: 'white', type: 'Giant', distance: 90, description: 'Another notable star in the constellation. },
//  ],

//  scorpius: [
//  { id: 'star1',name: 'Antares', posX: '', posY: '', luminance: 0.8, color: 'red', type: 'Red supergiant', distance: 550, description: 'The heart of the Scorpion. },
//  { id: 'star2', name: 'Shaula', posX: '', posY: '', luminance: 0.6, color: 'white', type: 'B-type giant', distance: 700, description: 'One of the brightest stars in Scorpius. },
//  { id: 'star3', name: 'Lesath', posX: '', posY: '', luminance: 0.5, color: 'white', type: 'B-type giant', distance: 500, description: 'A binary star system. },
//  { id: 'star4', name: 'Sargas', posX: '', posY: '', luminance: 0.4, color: 'white', type: 'Giant', distance: 80, description: 'Another prominent star in Scorpius. },
//  ],

//  ursaMinor: [
//  { id: 'star1', name: 'Polaris', posX: '', posY: '', luminance: 0.5, color: 'white', type: 'Supergiant', distance: 433, description: 'The North Star, located at the end of the Little Dipper. },
//  { id: 'star2', name: 'Kochab', posX: '', posY: '', luminance: 0.3, color: 'white', type: 'Giant', distance: 130, description: 'One of the brightest stars in Ursa Minor. },
//  { id: 'star3', name: 'Pherkad', posX: '', posY: '', luminance: 0.4, color: 'white', type: 'Giant', distance: 130, description: 'Often referred to as the "Guardians of the Pole". },
//  { id: 'star4', name: 'Yildun', posX: '', posY: '', luminance: 0.2, color: 'white', type: 'Main-sequence', distance: 90, description: 'A relatively faint star in the constellation. },
//  ],
 
//  sagittarius: [
//  { id: 'star1', name: 'Kaus Australis', posX: '', posY: '', luminance: 0.6, color: 'yellow', type: 'Giant', distance: 143, description: 'The brightest star in Sagittarius, known as the southern bow. },
//  { id: 'star2', name: 'Kaus Media', posX: '', posY: '', luminance: 0.5, color: 'white', type: 'Giant', distance: 155, description: 'Another prominent star in the constellation. },
//  { id: 'star3', name: 'Kaus Borealis', posX: '', posY: '', luminance: 0.4, color: 'white', type: 'Giant', distance: 138, description: 'Forms part of the bow of the archer. },
//  { id: 'star4', name: 'Ascella', posX: '', posY: '', luminance: 0.3, color: 'white', type: 'Giant', distance: 87, description: 'Represents the archer\'s elbow. },
//  ],
 
//  phoenix: [
//  { id: 'star1', name: 'Ankaa', posX: '', posY: '', luminance: 0.5, color: 'orange', type: 'Giant', distance: 75, description: 'The brightest star in the constellation Phoenix. },
//  { id: 'star2', name: 'Beta Phoenicis', posX: '', posY: '', luminance: 0.3, color: 'white', type: 'Giant', distance: 45, description: 'Another notable star in Phoenix. },
//  { id: 'star3', name: 'Alpha Phoenicis', posX: '', posY: '', luminance: 0.2, color: 'white', type: 'Giant', distance: 80, description: 'One of the fainter stars in the constellation. },
//  { id: 'star4', name: 'Gamma Phoenicis', posX: '', posY: '', luminance: 0.4, color: 'white', type: 'Giant', distance: 100, description: 'A notable star in Phoenix. },
//  ]

//  // bootes: [
//  // { id: 'star39', name: 'Arcturus', posX: '', posY: '', connectedStarId: ['star40', 'star41'], luminance: 1.0, color: 'orange', type: 'Giant', distance: 37, description: 'The brightest star in Boötes and the fourth-brightest star in the night sky.' },
//  // { id: 'star40', name: 'Izar', posX: '', posY: '', connectedStarId: [], luminance: 0.6, color: 'white', type: 'Binary Star', distance: 200, description: 'A beautiful binary star, also known as Epsilon Boötis.' },
//  // { id: 'star41', name: 'Seginus', posX: '', posY: '', connectedStarId: [], luminance: 0.5, color: 'yellow', type: 'Giant', distance: 100, description: 'A bright star located in the northern part of Boötes.' },
//  // { id: 'star42', name: 'Muphrid', posX: '', posY: '', connectedStarId: [], luminance: 0.4, color: 'white', type: 'Giant', distance: 47, description: 'A giant star that is part of Boötes constellation.' },
//  // ],

//  // lyra: [
//  // { id: 'star48', name: 'Vega', posX: '', posY: '', connectedStarId: ['star49', 'star50', 'star51'], luminance: 1.0, color: 'blue', type: 'Main Sequence', distance: 25, description: 'The brightest star in Lyra, part of the Summer Triangle.' },
//  // { id: 'star49', name: 'Sheliak', posX: '', posY: '', connectedStarId: [], luminance: 0.5, color: 'white', type: 'Giant', distance: 138, description: 'A bright star in Lyra, known for its variability.' },
//  // { id: 'star50', name: 'Sulafat', posX: '', posY: '', connectedStarId: [], luminance: 0.4, color: 'orange', type: 'Main Sequence', distance: 240, description: 'A star located in Lyra, known for its brightness.' },
//  // { id: 'star51', name: 'Delta Lyrae posX: '', posY: ''connectedStarId: [],, luminance: 0.5, color: 'blue', ', type: 'Giant', distance: 110, description: 'A binary star in Lyra.' },
//  // { id: 'star52', name: 'Epsilon Lyrae posX: '', posY: '', connectedStarId: [], luminance: 0.5, color: 'white', ', type: 'Binary', distance: 162, description: 'A well-known binary star system in Lyra.' },
//  // ],

//  // puppis: [
//  // { id: 'star53', name: 'Naos', posX: '', posY: '', connectedStarId: ['star54', 'star55'], luminance: 0.8, color: 'yellow', type: 'Giant', distance: 60, description: 'The brightest star in Puppis, part of the Argo constellation.' },
//  // { id: 'star54', name: 'Achernar', posX: '', posY: '', connectedStarId: [], luminance: 0.7, color: 'orange', type: 'Giant', distance: 139, description: 'A bright star that is the southernmost in the constellation.' },
//  // { id: 'star55', name: 'Gomeisa', posX: '', posY: '', connectedStarId: [], luminance: 0.6, color: 'white', type: 'Giant', distance: 200, description: 'A bright giant star in Puppis.' },
//  // { id: 'star56', name: 'LHS 420 posX: '', posY: '', connectedStarId: [], luminance: 0.5, color: 'blue', ', type: 'Dwarf', distance: 400, description: 'A faint star located in Puppis.' },
//  // { id: 'star57', name: 'Kappa Puppis posX: '', posY: '', connectedStarId: [], luminance: 0.4, color: 'white', ', type: 'Main Sequence', distance: 145, description: 'A faint star in Puppis.' },
//  // ],

//  // pegasus: [
//  // { id: 'star58', name: 'Enif', posX: '', posY: '', connectedStarId: ['star59', 'star60', 'star61'], luminance: 1.0, color: 'white', type: 'Giant', distance: 700, description: 'The brightest star in Pegasus, located at the nose of the horse.' },
//  // { id: 'star59', name: 'Markab', posX: '', posY: '', connectedStarId: [], luminance: 0.6, color: 'yellow', type: 'Giant', distance: 180, description: 'A bright star in Pegasus, located at the wing.' },
//  // { id: 'star60', name: 'Scheat', posX: '', posY: '', connectedStarId: [], luminance: 0.5, color: 'blue', type: 'Giant', distance: 196, description: 'A red giant star located in Pegasus.' },
//  // { id: 'star61', name: 'Matar', posX: '', posY: '', connectedStarId: [], luminance: 0.4, color: 'orange', type: 'Main Sequence', distance: 600, description: 'A star located in the constellation Pegasus.' },
//  // { id: 'star62', name: 'Alpha Pegasi posX: '', posY: '', connectedStarId: [], luminance: 0.3, color: 'white', ', type: 'Main Sequence', distance: 1000, description: 'A faint star in Pegasus.' },
//  // ],
// };
