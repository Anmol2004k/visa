export interface Landmark {
  name: string;
  description: string;
  image: string;
  icon: string;
}

export interface CountryDestination {
  id: string;
  name: string;
  flagCode: string;
  region: RegionName;
  description: string;
  coverImage: string;
  landmarks: [Landmark, Landmark, Landmark];
  visaTypes: string[];
  highlight?: boolean;
}

export type RegionName =
  | 'Australia & Oceania'
  | 'North & South America'
  | 'United Kingdom & Europe'
  | 'Middle East'
  | 'Asia'
  | 'Africa'
  | 'Russia & Central Asia';

export const REGIONS_LIST: { id: RegionName; label: string; icon: string }[] = [
  { id: 'Australia & Oceania', label: 'Australia & Oceania', icon: 'ri-earth-line' },
  { id: 'North & South America', label: 'North & South America', icon: 'ri-global-line' },
  { id: 'United Kingdom & Europe', label: 'United Kingdom & Europe', icon: 'ri-community-line' },
  { id: 'Middle East', label: 'Middle East', icon: 'ri-building-line' },
  { id: 'Asia', label: 'Asia', icon: 'ri-compass-line' },
  { id: 'Africa', label: 'Africa', icon: 'ri-sun-line' },
  { id: 'Russia & Central Asia', label: 'Russia & Central Asia', icon: 'ri-flight-land-line' },
];

export const COUNTRIES_GALLERY: CountryDestination[] = [
  // ==========================================
  // AUSTRALIA & OCEANIA (3)
  // ==========================================
  {
    id: 'australia',
    name: 'Australia',
    flagCode: 'au',
    region: 'Australia & Oceania',
    highlight: true,
    description:
      'A dynamic continent known for iconic coastal metropolises, pristine coral reefs, and world-class universities providing structured pathways for education, skilled careers, and unforgettable adventures.',
    coverImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Subclass 500 Student Visa', 'Visitor Visa (Subclass 600)', 'Skilled Independent (Subclass 189/190)', 'Business Innovation (Subclass 188)'],
    landmarks: [
      {
        name: 'Sydney Opera House',
        description: 'World-renowned architectural masterpiece gracing Sydney Harbour with expressive white sail shells.',
        image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'Great Barrier Reef',
        description: 'The planet’s largest living coral reef ecosystem spanning over 2,300 kilometres of tropical waters.',
        image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-sailboat-line',
      },
      {
        name: 'Uluru-Kata Tjuta',
        description: 'Sacred red sandstone monolith rising majestically from the heart of Australia’s Red Centre.',
        image: 'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d7?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-landscape-line',
      },
    ],
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    flagCode: 'nz',
    region: 'Australia & Oceania',
    highlight: true,
    description:
      'Renowned for dramatic alpine fjords, emerald valleys, indigenous Maori heritage, and progressive post-study career opportunities across both the North and South islands.',
    coverImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Fee Paying Student Visa', 'Visitor Visa', 'Skilled Migrant Category', 'Working Holiday Visa'],
    landmarks: [
      {
        name: 'Milford Sound',
        description: 'Breathtaking glacial fjord with towering cliff faces, rainforests, and plunging waterfalls.',
        image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-water-percent-line',
      },
      {
        name: 'Hobbiton Movie Set',
        description: 'Picturesque pastoral hills in Matamata preserving the charming Shire film location.',
        image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-home-line',
      },
      {
        name: 'Mount Cook (Aoraki)',
        description: 'The highest peak in New Zealand surrounded by glacial lakes in the Southern Alps.',
        image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-mountain-line',
      },
    ],
  },
  {
    id: 'fiji',
    name: 'Fiji',
    flagCode: 'fj',
    region: 'Australia & Oceania',
    description:
      'An archipelago of more than 300 idyllic tropical islands in the South Pacific, famous for hospitable island communities, turquoise lagoons, and eco-tourism opportunities.',
    coverImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Tourist / Holiday Visa', 'Business Visitor Visa', 'Residence Permit', 'Work Permit'],
    landmarks: [
      {
        name: 'Mamanuca Islands',
        description: 'Postcard-perfect volcanic archipelago featuring palm-fringed coral reefs and calm lagoons.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-sun-line',
      },
      {
        name: 'Sri Siva Subramaniya Temple',
        description: 'The largest Hindu temple complex in the Southern Hemisphere located in vibrant Nadi.',
        image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-government-line',
      },
      {
        name: 'Garden of the Sleeping Giant',
        description: 'Horticultural paradise nestled beneath the Sabeto Range cultivating thousands of orchids.',
        image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-plant-line',
      },
    ],
  },

  // ==========================================
  // NORTH & SOUTH AMERICA (6)
  // ==========================================
  {
    id: 'united-states',
    name: 'United States',
    flagCode: 'us',
    region: 'North & South America',
    highlight: true,
    description:
      'A global powerhouse in higher education, technology, finance, and enterprise, home to Ivy League institutions and diverse geographic wonders from coast to coast.',
    coverImage: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['F-1 Student Visa', 'B-1/B-2 Visitor Visa', 'H-1B Specialty Occupation', 'L-1 Intra-Company Transfer', 'EB-5 Immigrant Investor'],
    landmarks: [
      {
        name: 'Statue of Liberty',
        description: 'Colossal neoclassical beacon of freedom and welcoming emblem in New York Harbor.',
        image: 'https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-monument-line',
      },
      {
        name: 'Grand Canyon',
        description: 'Immense geologic chasm carved by the Colorado River across millions of years in Arizona.',
        image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-landscape-line',
      },
      {
        name: 'Golden Gate Bridge',
        description: 'Iconic suspension bridge spanning the entrance to San Francisco Bay in international orange.',
        image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-community-line',
      },
    ],
  },
  {
    id: 'canada',
    name: 'Canada',
    flagCode: 'ca',
    region: 'North & South America',
    highlight: true,
    description:
      'Distinguished by pristine natural beauty, welcoming cosmopolitan cities, progressive immigration policies, and globally acclaimed universities offering long-term post-study work permits.',
    coverImage: 'https://images.unsplash.com/photo-1517935703635-27190760921d?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Study Permit (SDS & Non-SDS)', 'Visitor Visa / eTA', 'Post-Graduation Work Permit (PGWP)', 'Express Entry / PNP'],
    landmarks: [
      {
        name: 'Niagara Falls',
        description: 'Thundering trio of natural waterfalls straddling the international boundary with Ontario.',
        image: 'https://images.unsplash.com/photo-1533094602577-198d3beab8ea?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-water-percent-line',
      },
      {
        name: 'Banff National Park',
        description: 'Glacial turquoise lakes and snow-capped peaks in the heart of the Canadian Rockies.',
        image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-mountain-line',
      },
      {
        name: 'CN Tower',
        description: 'Toronto’s iconic 553-metre communications and observation landmark dominating the skyline.',
        image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
    ],
  },
  {
    id: 'mexico',
    name: 'Mexico',
    flagCode: 'mx',
    region: 'North & South America',
    description:
      'A culturally vibrant nation blending ancient Maya and Aztec civilizations with modern commercial trade hubs, rich culinary traditions, and Pacific and Caribbean coasts.',
    coverImage: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Tourist Visa (FMM)', 'Temporary Resident Visa', 'Student Visa', 'Permanent Resident Visa'],
    landmarks: [
      {
        name: 'Chichen Itza',
        description: 'Pre-Columbian Mayan city featuring the grand stepped pyramid of El Castillo.',
        image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Teotihuacan Pyramids',
        description: 'Mesoamerican sacred archaeological site with monumental Pyramids of the Sun and Moon.',
        image: 'https://images.unsplash.com/photo-1569420067341-a128e469504c?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-monument-line',
      },
      {
        name: 'Cancun & Riviera Maya',
        description: 'Caribbean coastline celebrated for white-sand shores, cenotes, and coral reefs.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-sun-line',
      },
    ],
  },
  {
    id: 'brazil',
    name: 'Brazil',
    flagCode: 'br',
    region: 'North & South America',
    description:
      'South America’s largest nation, famous for the Amazon Rainforest, vibrant Rio Carnival, world-class agricultural and industrial sectors, and dramatic coastal landscapes.',
    coverImage: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Visitor Visa (VIVIS)', 'Temporary Work Visa (VITEM V)', 'Student Visa (VITEM IV)', 'Investor Visa (VIPER)'],
    landmarks: [
      {
        name: 'Christ the Redeemer',
        description: 'Monumental Art Deco statue atop Corcovado mountain embracing the city of Rio de Janeiro.',
        image: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-monument-line',
      },
      {
        name: 'Iguazu Falls',
        description: 'Magnificent network of 275 thunderous cascades straddling the border with Argentina.',
        image: 'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-water-percent-line',
      },
      {
        name: 'Sugarloaf Mountain',
        description: 'Granite peak jutting out into Guanabara Bay accessed by historic panoramic cable cars.',
        image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-mountain-line',
      },
    ],
  },
  {
    id: 'argentina',
    name: 'Argentina',
    flagCode: 'ar',
    region: 'North & South America',
    description:
      'A country of passionate tango culture, European-influenced boulevards in Buenos Aires, expansive pampas, and the dramatic glacial pinnacles of southern Patagonia.',
    coverImage: 'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Tourist Visa', 'Digital Nomad Visa', 'Student Visa', 'Temporary Residence'],
    landmarks: [
      {
        name: 'Perito Moreno Glacier',
        description: 'Actively advancing ice giant forming a massive glacial wall in Los Glaciares National Park.',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-snowy-line',
      },
      {
        name: 'Teatro Colón',
        description: 'Acoustically legendary opera house considered among the finest performance venues on earth.',
        image: 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'Caminito (La Boca)',
        description: 'Vibrant street museum lined with brightly painted conventillos and live street tango.',
        image: 'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-palette-line',
      },
    ],
  },
  {
    id: 'chile',
    name: 'Chile',
    flagCode: 'cl',
    region: 'North & South America',
    description:
      'Stretching along South America’s western flank, Chile encompasses the hyper-arid Atacama Desert, fertile wine valleys, and the granite spires of Torres del Paine.',
    coverImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Tourist Visa', 'Temporary Work Visa', 'Student Visa', 'Retirement & Investment Visa'],
    landmarks: [
      {
        name: 'Torres del Paine',
        description: 'Iconic granite towers rising above azure alpine lakes in Chilean Patagonia.',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-mountain-line',
      },
      {
        name: 'Valparaíso Funiculars',
        description: 'Historic hillside elevators servicing a colourful Bohemian seaport full of street murals.',
        image: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-community-line',
      },
      {
        name: 'Atacama Desert Valle de la Luna',
        description: 'Otherworldly salt-sculpted lunar landscape famed for the clearest stargazing on Earth.',
        image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-moon-line',
      },
    ],
  },

  // ==========================================
  // UNITED KINGDOM & EUROPE (21)
  // ==========================================
  {
    id: 'united-kingdom',
    name: 'United Kingdom',
    flagCode: 'gb',
    region: 'United Kingdom & Europe',
    highlight: true,
    description:
      'A historic center of global finance, legal systems, and academic prestige, offering one-year master degrees, the Graduate Route visa, and rich royal landmarks.',
    coverImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Student Visa (Tier 4)', 'Standard Visitor Visa', 'Skilled Worker Visa', 'Innovator Founder Visa'],
    landmarks: [
      {
        name: 'Big Ben & Westminster',
        description: 'Great Clock tower and the seat of the UK Parliament alongside the River Thames.',
        image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-time-line',
      },
      {
        name: 'Tower Bridge',
        description: 'Victorian bascule bridge featuring high-level walkways with glass floor river views.',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'Edinburgh Castle',
        description: 'Historic fortress perched atop the volcanic Castle Rock dominating Scotland’s capital.',
        image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
    ],
  },
  {
    id: 'ireland',
    name: 'Ireland',
    flagCode: 'ie',
    region: 'United Kingdom & Europe',
    highlight: true,
    description:
      'Europe’s premier technology and pharma hub, offering English-taught higher education, hospitable communities, and a two-year post-study work authorization for postgraduates.',
    coverImage: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Irish Study Visa (Stamp 2)', 'Short Stay ‘C’ Visit Visa', 'Critical Skills Employment Permit', 'General Employment Permit'],
    landmarks: [
      {
        name: 'Cliffs of Moher',
        description: 'Dramatic sea cliffs plunging 214 meters straight into the Atlantic Ocean along County Clare.',
        image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-landscape-line',
      },
      {
        name: 'Trinity College Long Room',
        description: 'Magnificent 18th-century library housing the ancient 9th-century illuminated Book of Kells.',
        image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-book-open-line',
      },
      {
        name: 'Dublin Castle',
        description: 'Historic government complex founded in the 13th century on an ancient Viking settlement.',
        image: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
    ],
  },
  {
    id: 'france',
    name: 'France',
    flagCode: 'fr',
    region: 'United Kingdom & Europe',
    highlight: true,
    description:
      'The world capital of haute cuisine, art, fashion, and philosophy, featuring world-leading grand écoles, vibrant Mediterranean coastlines, and centuries of cultural heritage.',
    coverImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Long-Stay Student Visa (VLS-TS)', 'Schengen Short-Stay Visa', 'Talent Passport (Passeport Talent)', 'Visitor Long-Stay Visa'],
    landmarks: [
      {
        name: 'Eiffel Tower',
        description: 'Gustave Eiffel’s wrought-iron lattice monument rising proudly above the Champ de Mars.',
        image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-monument-line',
      },
      {
        name: 'Louvre Museum',
        description: 'The world’s largest art museum housed in a former royal palace with I. M. Pei’s glass pyramid.',
        image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'French Riviera (Côte d\'Azur)',
        description: 'Glamorous Mediterranean coastline from Saint-Tropez to Monaco with azure seas.',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-sun-line',
      },
    ],
  },
  {
    id: 'germany',
    name: 'Germany',
    flagCode: 'de',
    region: 'United Kingdom & Europe',
    highlight: true,
    description:
      'Europe’s industrial and engineering engine, famous for tuition-free public universities, pioneering automotive technologies, and an 18-month job search visa for international graduates.',
    coverImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['German National Student Visa', 'EU Blue Card', 'Job Seeker Visa (Opportunity Card)', 'Schengen Business & Tourist Visa'],
    landmarks: [
      {
        name: 'Brandenburg Gate',
        description: '18th-century neoclassical monument in Berlin representing German unity and peace.',
        image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Neuschwanstein Castle',
        description: 'Fairytale 19th-century Romanesque Revival palace perched on a rugged Bavarian hill.',
        image: 'https://images.unsplash.com/photo-1543832923-44667a44c804?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'Cologne Cathedral',
        description: 'Magnificent twin-spired Gothic cathedral on the Rhine, a UNESCO World Heritage site.',
        image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-church-line',
      },
    ],
  },
  {
    id: 'italy',
    name: 'Italy',
    flagCode: 'it',
    region: 'United Kingdom & Europe',
    highlight: true,
    description:
      'The cradle of the Renaissance, celebrated for unmatched UNESCO archaeological treasures, historic university traditions, culinary excellence, and vibrant northern manufacturing corridors.',
    coverImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['National Student Visa (Type D)', 'Schengen Tourist Visa', 'Elective Residence Visa', 'Investor Visa for Italy'],
    landmarks: [
      {
        name: 'Colosseum (Rome)',
        description: 'Monumental ancient amphitheatre that staged gladiatorial contests in the Roman Empire.',
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Grand Canal (Venice)',
        description: 'Historic waterway lined with Renaissance palaces traversed by traditional gondolas.',
        image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-sailboat-line',
      },
      {
        name: 'Leaning Tower of Pisa',
        description: 'Freestanding bell tower famous worldwide for its unintended four-degree tilt.',
        image: 'https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
    ],
  },
  {
    id: 'spain',
    name: 'Spain',
    flagCode: 'es',
    region: 'United Kingdom & Europe',
    description:
      'A sunny European haven offering a high quality of life, Gaudí architecture, top-tier business schools, vibrant tapas culture, and welcoming digital nomad opportunities.',
    coverImage: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Student Visa', 'Digital Nomad Visa', 'Golden Visa / Real Estate Investor', 'Non-Lucrative Residence Visa'],
    landmarks: [
      {
        name: 'Sagrada Família',
        description: 'Antoni Gaudí’s breathtaking, intricately sculpted basilica under construction in Barcelona.',
        image: 'https://images.unsplash.com/photo-1583779457094-0cef1bad7155?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-church-line',
      },
      {
        name: 'Alhambra (Granada)',
        description: 'Stunning Moorish palace and fortress complex featuring intricate Arabesque courtyards.',
        image: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Plaza Mayor (Madrid)',
        description: 'Grand arcaded central plaza in Madrid, historic venue for royal ceremonies and markets.',
        image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-community-line',
      },
    ],
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    flagCode: 'ch',
    region: 'United Kingdom & Europe',
    description:
      'Famed for alpine majesty, precision horology, private banking, and world-renowned hospitality and polytechnic institutes like ETH Zurich nestled among glacial valleys.',
    coverImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['National Visa D (Study)', 'Schengen Tourist & Business Visa', 'Work Permit (Non-EU Quotas)', 'Lump-Sum Tax Residency'],
    landmarks: [
      {
        name: 'The Matterhorn',
        description: 'Nearly symmetrical pyramidal alpine peak towering 4,478 meters above Zermatt.',
        image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-mountain-line',
      },
      {
        name: 'Lake Geneva & Jet d\'Eau',
        description: 'Iconic 140-meter water fountain surging from the crystal-clear waters of Lake Geneva.',
        image: 'https://images.unsplash.com/photo-1573108724029-4c450cf8144f?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-water-percent-line',
      },
      {
        name: 'Jungfraujoch',
        description: 'Top of Europe railway observatory between the Monch and Jungfrau mountain peaks.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-landscape-line',
      },
    ],
  },
  {
    id: 'netherlands',
    name: 'Netherlands',
    flagCode: 'nl',
    region: 'United Kingdom & Europe',
    description:
      'A progressive, cycling-friendly maritime country with hundreds of English-taught degree courses, cutting-edge water engineering, canal-laced cities, and top European logistics.',
    coverImage: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['MVV Student Visa', 'Orientation Year (Zoekjaar) Visa', 'Highly Skilled Migrant Permit', 'Startup Visa'],
    landmarks: [
      {
        name: 'Amsterdam Canals',
        description: 'UNESCO 17th-century concentric canal network crossed by historic gabled merchant houses.',
        image: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-sailboat-line',
      },
      {
        name: 'Keukenhof Tulip Gardens',
        description: 'The Garden of Europe showcasing millions of blooming tulips, daffodils, and hyacinths.',
        image: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-plant-line',
      },
      {
        name: 'Zaanse Schans Windmills',
        description: 'Open-air historic conservation area preserving authentic working Dutch windmills.',
        image: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-refresh-line',
      },
    ],
  },
  {
    id: 'portugal',
    name: 'Portugal',
    flagCode: 'pt',
    region: 'United Kingdom & Europe',
    description:
      'Perched on the Iberian Atlantic, Portugal combines warm sunny climates, scenic coastal cliffs, historic maritime monasteries, and a rapidly expanding tech ecosystem in Lisbon and Porto.',
    coverImage: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['D8 Digital Nomad Visa', 'D7 Passive Income Visa', 'National Student Visa (D4)', 'Golden Visa Fund Route'],
    landmarks: [
      {
        name: 'Pena Palace (Sintra)',
        description: 'Romanticist castle on the peaks of Sintra with vivid yellow and red fairytale ramparts.',
        image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd81?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'Belém Tower (Lisbon)',
        description: '16th-century fortified tower on the Tagus River, jewel of Portuguese Manueline architecture.',
        image: 'https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Dom Luís I Bridge (Porto)',
        description: 'Double-deck metal arch bridge spanning the Douro River between Porto and Vila Nova de Gaia.',
        image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd81?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-community-line',
      },
    ],
  },
  {
    id: 'greece',
    name: 'Greece',
    flagCode: 'gr',
    region: 'United Kingdom & Europe',
    description:
      'The birthplace of Western democracy, classical philosophy, and the Olympic games, surrounded by thousands of sun-drenched Aegean and Ionian islands with whitewashed villages.',
    coverImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Schengen Tourist Visa', 'National Student Visa', 'Golden Visa Property Investment', 'Digital Nomad Visa'],
    landmarks: [
      {
        name: 'The Acropolis & Parthenon',
        description: 'Ancient citadel above Athens containing the classical Doric temple dedicated to Athena.',
        image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Santorini Caldera',
        description: 'Volcanic island renowned for cliffside white houses, blue-domed churches, and Aegean sunsets.',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-sun-line',
      },
      {
        name: 'Meteora Monasteries',
        description: 'Eastern Orthodox monasteries precariously built on top of towering natural sandstone rock pillars.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-church-line',
      },
    ],
  },
  {
    id: 'austria',
    name: 'Austria',
    flagCode: 'at',
    region: 'United Kingdom & Europe',
    description:
      'A land of imperial Habsburg palaces, classical symphonies in Vienna, snow-covered Tyrolean slopes, and premier music conservatories with high living standards.',
    coverImage: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Student Residence Permit', 'Red-White-Red Card for Skilled Workers', 'Schengen Visitor Visa', 'Job Seeker Visa'],
    landmarks: [
      {
        name: 'Schönbrunn Palace',
        description: '1,441-room Baroque summer residence of the Habsburg monarchs with magnificent gardens.',
        image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'Hallstatt Alpine Village',
        description: 'Fairytale lakeside village tucked into the Salzkammergut mountains with 7,000 years of salt mining.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-landscape-line',
      },
      {
        name: 'St. Stephen\'s Cathedral (Stephansdom)',
        description: 'Gothic masterpiece in the heart of Vienna with its iconic multi-coloured tiled roof.',
        image: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-church-line',
      },
    ],
  },
  {
    id: 'belgium',
    name: 'Belgium',
    flagCode: 'be',
    region: 'United Kingdom & Europe',
    description:
      'The administrative heart of the European Union and NATO, boasting medieval Flemish trading towns, world-famous chocolatiers, and prestigious multilingual universities.',
    coverImage: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Long-Stay Study Visa (Type D)', 'Schengen Business/Tourist Visa', 'Single Permit (Work & Residence)', 'EU Blue Card'],
    landmarks: [
      {
        name: 'Grand Place (Brussels)',
        description: 'Opulent central square enclosed by ornate 17th-century guildhalls and the Gothic Town Hall.',
        image: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'Canals of Bruges',
        description: 'Picturesque medieval waterways winding past Gothic stone architecture in romantic Bruges.',
        image: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-sailboat-line',
      },
      {
        name: 'The Atomium',
        description: 'Giant 102-meter futuristic steel structure depicting an iron crystal magnified 165 billion times.',
        image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-compass-line',
      },
    ],
  },
  {
    id: 'sweden',
    name: 'Sweden',
    flagCode: 'se',
    region: 'United Kingdom & Europe',
    description:
      'A Scandinavian leader in environmental sustainability, design innovation, and digital gaming, home to Nobel Prize traditions and archipelagos stretching across thousands of pristine islands.',
    coverImage: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Residence Permit for Higher Education', 'Work Permit', 'Schengen Tourist Visa', 'Researcher Residence Permit'],
    landmarks: [
      {
        name: 'Gamla Stan (Stockholm)',
        description: 'Well-preserved 13th-century Old Town with cobblestone alleys and ochre-coloured merchant homes.',
        image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-community-line',
      },
      {
        name: 'Vasa Museum',
        description: 'Maritime museum housing the almost fully intact 64-gun warship Vasa that sank in 1628.',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-sailboat-line',
      },
      {
        name: 'Icehotel in Jukkasjärvi',
        description: 'World’s first hotel crafted annually entirely from pure ice and snow from the Torne River.',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-snowy-line',
      },
    ],
  },
  {
    id: 'norway',
    name: 'Norway',
    flagCode: 'no',
    region: 'United Kingdom & Europe',
    description:
      'Famous for magnificent glacial fjords carved between jagged mountains, the Aurora Borealis, high safety standards, and progressive renewable energy engineering.',
    coverImage: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Study Permit', 'Skilled Worker Residence Permit', 'Schengen Tourist Visa', 'Seasonal Work Permit'],
    landmarks: [
      {
        name: 'Geirangerfjord',
        description: 'Majestic UNESCO fjord with deep blue waters, snow-capped peaks, and the Seven Sisters waterfall.',
        image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-water-percent-line',
      },
      {
        name: 'Preikestolen (Pulpit Rock)',
        description: 'Steep 604-meter cliff top overlooking Lysefjorden, offering spectacular panoramic vistas.',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-landscape-line',
      },
      {
        name: 'Bryggen in Bergen',
        description: 'Historic wooden Hanseatic wharf lining the eastern side of the Vågen harbor in Bergen.',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-community-line',
      },
    ],
  },
  {
    id: 'denmark',
    name: 'Denmark',
    flagCode: 'dk',
    region: 'United Kingdom & Europe',
    description:
      'Consistently ranked among the happiest nations worldwide, Denmark excels in green transition architecture, minimalist Scandinavian design, and high-ranking research academies.',
    coverImage: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Higher Education Residence Permit', 'Fast-Track Work Scheme', 'Pay Limit Scheme', 'Schengen Short Stay'],
    landmarks: [
      {
        name: 'Nyhavn (Copenhagen)',
        description: '17th-century canal and entertainment district lined with brightly coloured townhouses and wooden ships.',
        image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-sailboat-line',
      },
      {
        name: 'Tivoli Gardens',
        description: 'Historic amusement park and pleasure garden opened in 1843 in central Copenhagen.',
        image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-sparkling-line',
      },
      {
        name: 'Kronborg Castle',
        description: 'Renaissance stronghold guarding the Sound, made immortal as Elsinore in Shakespeare’s Hamlet.',
        image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
    ],
  },
  {
    id: 'finland',
    name: 'Finland',
    flagCode: 'fi',
    region: 'United Kingdom & Europe',
    description:
      'The land of a thousand lakes and pristine forests, known for global benchmark educational excellence, warm sauna culture, and leading technology startups.',
    coverImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Residence Permit for Studies', 'Specialist Work Permit', 'Startup Permit', 'Schengen Tourist Visa'],
    landmarks: [
      {
        name: 'Suomenlinna Sea Fortress',
        description: 'Inhabited maritime fortress built across six islands in Helsinki harbor, founded in 1748.',
        image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-shield-line',
      },
      {
        name: 'Santa Claus Village (Rovaniemi)',
        description: 'Official hometown of Santa Claus located right on the Arctic Circle in snowy Lapland.',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-gift-line',
      },
      {
        name: 'Helsinki Cathedral',
        description: 'Striking neoclassical white cathedral towering above Senate Square with green zinc domes.',
        image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-church-line',
      },
    ],
  },
  {
    id: 'poland',
    name: 'Poland',
    flagCode: 'pl',
    region: 'United Kingdom & Europe',
    description:
      'Central Europe’s fastest-growing economy, boasting meticulously restored Gothic town squares, deep scholarly legacies in Krakow and Warsaw, and cost-effective higher education.',
    coverImage: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['National Student Visa (Type D)', 'Temporary Residence Permit', 'Poland Business Harbour', 'Schengen Visa'],
    landmarks: [
      {
        name: 'Krakow Main Market Square',
        description: 'Grandest medieval town square in Europe anchored by the Renaissance Cloth Hall (Sukiennice).',
        image: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-community-line',
      },
      {
        name: 'Wawel Royal Castle',
        description: 'Historic seat of Polish kings on the Vistula River displaying centuries of royal architecture.',
        image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Wieliczka Salt Mine',
        description: 'Underground salt mine operating since the 13th century featuring chapels carved entirely of rock salt.',
        image: 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
    ],
  },
  {
    id: 'czechia',
    name: 'Czechia',
    flagCode: 'cz',
    region: 'United Kingdom & Europe',
    description:
      'A fairytale land in the heart of Europe featuring Prague’s hundred spires, ancient universities founded in 1348, classical music festivals, and picturesque Moravian wine hills.',
    coverImage: 'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Long-Term Visa for Studies', 'Employee Card', 'Zivno (Freelancer Visa)', 'Schengen Short Stay'],
    landmarks: [
      {
        name: 'Charles Bridge (Prague)',
        description: 'Historic stone arch bridge crossing the Vltava River decorated with 30 statues of saints.',
        image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Prague Castle Complex',
        description: 'The largest ancient castle complex in the world containing St. Vitus Cathedral.',
        image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'Český Krumlov Old Town',
        description: 'UNESCO medieval jewel looped by the Vltava with a towering Renaissance castle.',
        image: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-landscape-line',
      },
    ],
  },
  {
    id: 'hungary',
    name: 'Hungary',
    flagCode: 'hu',
    region: 'United Kingdom & Europe',
    description:
      'Straddling the blue Danube, Hungary features the majestic Parliament in Budapest, historic thermal baths, acclaimed medical universities, and accessible European residency pathways.',
    coverImage: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Student Residence Permit', 'White Card (Digital Nomad)', 'Guest Investor Program', 'Employment Residence Permit'],
    landmarks: [
      {
        name: 'Hungarian Parliament Building',
        description: 'Neo-Gothic architectural marvel gracing the Danube bank in Budapest.',
        image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'Buda Castle & Fisherman\'s Bastion',
        description: 'Fairytale panoramic terrace overlooking the Danube and Pest skyline.',
        image: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Széchenyi Thermal Bath',
        description: 'The largest medicinal bath in Europe powered by two natural thermal springs.',
        image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-water-percent-line',
      },
    ],
  },
  {
    id: 'croatia',
    name: 'Croatia',
    flagCode: 'hr',
    region: 'United Kingdom & Europe',
    description:
      'Featuring over a thousand Adriatic islands, pristine turquoise national parks, Roman emperor palaces, and a popular digital nomad residence program on the Mediterranean.',
    coverImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Digital Nomad Residence Permit', 'Schengen Short-Stay Visa', 'Student Residence Permit', 'Work and Residence Permit'],
    landmarks: [
      {
        name: 'Dubrovnik Old City Walls',
        description: 'Massive medieval stone walls surrounding the Pearl of the Adriatic.',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Plitvice Lakes National Park',
        description: 'Chain of 16 terraced lakes joined by waterfalls extending into a limestone canyon.',
        image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-water-percent-line',
      },
      {
        name: 'Diocletian\'s Palace (Split)',
        description: 'Ancient Roman palace complex erected by Emperor Diocletian in the 4th century AD.',
        image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
    ],
  },
  {
    id: 'romania',
    name: 'Romania',
    flagCode: 'ro',
    region: 'United Kingdom & Europe',
    description:
      'Home to the rugged Carpathian Mountains, charming Transylvanian Saxon villages, rapid IT sector growth, and high-quality European veterinary and medical universities.',
    coverImage: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Long-Stay Study Visa (D/SD)', 'Work Visa (D/AM)', 'Digital Nomad Visa', 'Short-Stay Tourist Visa (C)'],
    landmarks: [
      {
        name: 'Bran Castle (Transylvania)',
        description: 'Dramatic fortress perched on high rock cliffs legendary as Dracula’s Castle.',
        image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Palace of the Parliament (Bucharest)',
        description: 'Colossal neoclassical government building, the heaviest building in the world.',
        image: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'Transfăgărășan Mountain Highway',
        description: 'Paved mountain road crossing the southern Carpathians with dramatic hairpin turns.',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-landscape-line',
      },
    ],
  },

  // ==========================================
  // MIDDLE EAST (8)
  // ==========================================
  {
    id: 'united-arab-emirates',
    name: 'United Arab Emirates',
    flagCode: 'ae',
    region: 'Middle East',
    highlight: true,
    description:
      'A global crossroads of trade, luxury tourism, aviation, and financial services, home to ultramodern Dubai and cultural Abu Dhabi with long-term Golden Visa options.',
    coverImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['UAE 10-Year Golden Visa', 'Green Residence Visa', 'Tourist & Visitor Visa (30/60 Days)', 'Employment Visa'],
    landmarks: [
      {
        name: 'Burj Khalifa (Dubai)',
        description: 'The tallest skyscraper in the world soaring 828 meters into the desert sky.',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'Sheikh Zayed Grand Mosque',
        description: 'Architectural wonder in Abu Dhabi featuring 82 white marble domes and 24-carat gold chandeliers.',
        image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'Palm Jumeirah',
        description: 'Iconic palm-tree-shaped artificial archipelago extending into the Arabian Gulf.',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-sun-line',
      },
    ],
  },
  {
    id: 'saudi-arabia',
    name: 'Saudi Arabia',
    flagCode: 'sa',
    region: 'Middle East',
    highlight: true,
    description:
      'Undergoing historic transformation through Vision 2030, Saudi Arabia features ancient Nabataean ruins in AlUla, holy pilgrimage cities, and visionary mega-projects like NEOM.',
    coverImage: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Tourist eVisa', 'Business & Commercial Visa', 'Premium Residency (Green Card)', 'Work Visa (Iqama)'],
    landmarks: [
      {
        name: 'Hegra (AlUla)',
        description: 'UNESCO World Heritage site with monumental carved Nabataean tombs in sandstone cliffs.',
        image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Kingdom Centre Tower (Riyadh)',
        description: 'Iconic 302-meter skyscraper topped with a soaring sky-bridge overlooking Riyadh.',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'Al-Balad (Historic Jeddah)',
        description: '7th-century trading quarter famous for multi-storey coral stone houses and rawasheen balconies.',
        image: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-community-line',
      },
    ],
  },
  {
    id: 'qatar',
    name: 'Qatar',
    flagCode: 'qa',
    region: 'Middle East',
    description:
      'A gleaming Peninsula nation on the Arabian Gulf renowned for world-class cultural institutions like the Museum of Islamic Art, vibrant souqs, and global sports tournaments.',
    coverImage: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Hayya Entry Visa', 'Tourist Visa', 'Business & Work Residence', 'Real Estate Residency'],
    landmarks: [
      {
        name: 'Museum of Islamic Art (Doha)',
        description: 'I. M. Pei-designed architectural monument rising out of Doha Bay on a private island.',
        image: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'Souq Waqif',
        description: 'Centuries-old market labyrinth in Doha filled with spice vendors, falconers, and textiles.',
        image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-store-2-line',
      },
      {
        name: 'Katara Cultural Village',
        description: 'Expansive cultural precinct featuring Greco-Roman amphitheatres and international galleries.',
        image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
    ],
  },
  {
    id: 'kuwait',
    name: 'Kuwait',
    flagCode: 'kw',
    region: 'Middle East',
    description:
      'A prosperous Gulf nation blending historic seafaring traditions and pearl diving heritage with landmark modern towers, contemporary malls, and vibrant corporate commerce.',
    coverImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Tourist eVisa', 'Business Visit Visa', 'Employment Residency', 'Family Visa'],
    landmarks: [
      {
        name: 'Kuwait Towers',
        description: 'Three slender reinforced-concrete towers symbolizing modern Kuwait with distinctive blue-green spheres.',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'Grand Mosque of Kuwait',
        description: 'The largest official mosque in Kuwait spanning 45,000 square meters with traditional Islamic design.',
        image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'Al Shaheed Park',
        description: 'The largest urban green park in Kuwait City celebrating Kuwaiti ecology and heritage.',
        image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-plant-line',
      },
    ],
  },
  {
    id: 'bahrain',
    name: 'Bahrain',
    flagCode: 'bh',
    region: 'Middle East',
    description:
      'The island Kingdom of Two Seas, Bahrain is a financial and fintech hub connecting the Gulf with UNESCO Dilmun burial mounds and Formula 1 international prestige.',
    coverImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Tourist eVisa', 'Golden Residency Visa', 'Work Permit', 'Investor Visa'],
    landmarks: [
      {
        name: 'Bahrain Fort (Qal\'at al-Bahrain)',
        description: 'Ancient port and capital of the Dilmun civilization, continuously inhabited for over 4,000 years.',
        image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Bahrain World Trade Center',
        description: 'Twin 240-meter towers integrated with three full-scale aerodynamic wind turbines.',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'Al Fateh Grand Mosque',
        description: 'One of the largest mosques in the world, accommodating over 7,000 worshippers under a fiberglass dome.',
        image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
    ],
  },
  {
    id: 'oman',
    name: 'Oman',
    flagCode: 'om',
    region: 'Middle East',
    description:
      'A Sultanate revered for dramatic mountain wadis, historic mudbrick fortresses, fragrant frankincense groves, and pristine dolphin-filled coastlines on the Arabian Sea.',
    coverImage: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Tourist eVisa', 'Investor Residency Program', 'Employment Visa', 'Express Visa'],
    landmarks: [
      {
        name: 'Sultan Qaboos Grand Mosque (Muscat)',
        description: 'Magnificent sandstone mosque featuring a 21-tonne hand-woven Persian carpet and crystal chandelier.',
        image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'Nizwa Fort',
        description: '17th-century cylindrical castle fortress built over an earlier 12th-century stronghold.',
        image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Wadi Shab',
        description: 'Spectacular turquoise canyon with freshwater pools and a hidden waterfall inside a cave.',
        image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-water-percent-line',
      },
    ],
  },
  {
    id: 'turkiye',
    name: 'Türkiye',
    flagCode: 'tr',
    region: 'Middle East',
    description:
      'Spanning both Europe and Asia across the Bosphorus Strait, Türkiye blends Byzantine and Ottoman palaces, otherworldly hot-air balloon valleys in Cappadocia, and turquoise coastlines.',
    coverImage: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Tourist eVisa', 'Student Residence Permit', 'Citizenship by Investment', 'Short-Term Residence'],
    landmarks: [
      {
        name: 'Hagia Sophia (Istanbul)',
        description: '6th-century architectural wonder that served as cathedral and imperial mosque through the ages.',
        image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Cappadocia Fairy Chimneys',
        description: 'Tufa rock formations and underground cities famous for sunrise hot-air balloon flights.',
        image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-landscape-line',
      },
      {
        name: 'Pamukkale Travertines',
        description: 'Cascading snow-white mineral terraces created by natural calcium-rich thermal waters.',
        image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-water-percent-line',
      },
    ],
  },
  {
    id: 'jordan',
    name: 'Jordan',
    flagCode: 'jo',
    region: 'Middle East',
    description:
      'A tranquil haven in the Levant, Jordan holds the ancient Rose-Red City of Petra, the buoyant mineral-dense Dead Sea, and Mars-like sandstone valleys of Wadi Rum.',
    coverImage: 'https://images.unsplash.com/photo-1579606032824-34865243179e?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Jordan Pass / Tourist Visa', 'Student Visa', 'Investor Residence Permit', 'Work Permit'],
    landmarks: [
      {
        name: 'The Treasury (Petra)',
        description: 'Al-Khazneh, intricately carved into rose sandstone canyon walls by the ancient Nabataeans.',
        image: 'https://images.unsplash.com/photo-1579606032824-34865243179e?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Wadi Rum Desert',
        description: 'Vast red desert wilderness with monolithic granite mountains known as the Valley of the Moon.',
        image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-landscape-line',
      },
      {
        name: 'The Dead Sea',
        description: 'Lowest land elevation on Earth, famous for hyper-saline waters that allow effortless floating.',
        image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-water-percent-line',
      },
    ],
  },

  // ==========================================
  // ASIA (16)
  // ==========================================
  {
    id: 'japan',
    name: 'Japan',
    flagCode: 'jp',
    region: 'Asia',
    highlight: true,
    description:
      'An inspiring synthesis of hyper-modern bullet trains, robotics, and neon skyscrapers with tranquil Zen gardens, ancient Shinto shrines, and refined culinary mastery.',
    coverImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['College Student Visa', 'Highly Skilled Professional', 'Short-Term Tourist Visa', 'Specified Skilled Worker'],
    landmarks: [
      {
        name: 'Mount Fuji',
        description: 'Japan’s sacred 3,776-meter stratovolcano rising symmetrically above Lake Kawaguchi.',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-mountain-line',
      },
      {
        name: 'Tokyo Tower',
        description: 'Eiffel-inspired communications tower dominating the Minato district skyline in bright white and orange.',
        image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'Fushimi Inari Shrine (Kyoto)',
        description: 'Iconic mountain pathway lined with thousands of vermilion torii gates dedicated to Inari.',
        image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
    ],
  },
  {
    id: 'singapore',
    name: 'Singapore',
    flagCode: 'sg',
    region: 'Asia',
    highlight: true,
    description:
      'A futuristic Asian financial city-state and innovation capital, renowned for lush garden skyscrapers, high safety, and Asia’s top-ranking universities (NUS and NTU).',
    coverImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Student’s Pass (STP)', 'Employment Pass (EP)', 'ONE Pass (Tech Leaders)', 'Short-Stay Tourist Visa'],
    landmarks: [
      {
        name: 'Marina Bay Sands',
        description: 'Triple-tower landmark topped by the 340-meter SkyPark and famous rooftop infinity pool.',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'Gardens by the Bay',
        description: 'Horticultural spectacle featuring 50-meter Supertree structures and the Cloud Forest conservatory.',
        image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-plant-line',
      },
      {
        name: 'Jewel Changi Airport',
        description: 'Nature-themed airport complex anchored by the 40-meter indoor Rain Vortex waterfall.',
        image: 'https://images.unsplash.com/photo-1533094602577-198d3beab8ea?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-flight-takeoff-line',
      },
    ],
  },
  {
    id: 'south-korea',
    name: 'South Korea',
    flagCode: 'kr',
    region: 'Asia',
    description:
      'The vibrant home of K-culture, semiconductors, and high-speed digital infrastructure, pairing Seoul’s historic Joseon palaces with dynamic universities and entertainment hubs.',
    coverImage: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['D-2 General Student Visa', 'K-ETA / Short-Term Tourist', 'E-7 Professional Employment', 'F-2-7 Points Residency'],
    landmarks: [
      {
        name: 'Gyeongbokgung Palace (Seoul)',
        description: 'The grandest royal palace of the Joseon dynasty, built in 1395 against Mount Bugak.',
        image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'N Seoul Tower',
        description: 'Communications tower atop Namsan Mountain offering 360-degree views of greater Seoul.',
        image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'Jeju Island Hallasan',
        description: 'Volcanic island jewel featuring the shield volcano Hallasan, lava tubes, and coastal waterfalls.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-landscape-line',
      },
    ],
  },
  {
    id: 'china',
    name: 'China',
    flagCode: 'cn',
    region: 'Asia',
    description:
      'An ancient civilization and economic colossus stretching from Beijing’s imperial halls to Shanghai’s futuristic skyline, offering extensive international scholarship programmes.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['X1/X2 Student Visa', 'L Tourist Visa', 'Z Work Visa', 'M Commercial Trade Visa'],
    landmarks: [
      {
        name: 'The Great Wall of China',
        description: 'Monumental series of fortifications winding over 20,000 kilometres across mountain ridges.',
        image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'The Forbidden City (Beijing)',
        description: 'Imperial palace complex that served 24 emperors across the Ming and Qing dynasties.',
        image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'The Bund & Pudong Skyline (Shanghai)',
        description: 'Historic colonial riverside promenade gazing across to the futuristic Shanghai Tower.',
        image: 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
    ],
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    flagCode: 'my',
    region: 'Asia',
    description:
      'A multicultural Southeast Asian melting pot featuring Kuala Lumpur’s iconic twin towers, ancient Borneo rainforests, and branch campuses of renowned British and Australian universities.',
    coverImage: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Student Pass (EMGS)', 'Malaysia My Second Home (MM2H)', 'Tourist / Social Visit Pass', 'Employment Pass'],
    landmarks: [
      {
        name: 'Petronas Twin Towers',
        description: '88-storey Islamic-geometric twin skyscrapers linked by a double-decker skybridge.',
        image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'Batu Caves',
        description: 'Limestone hill complex of cave temples guarded by a 42-meter golden statue of Lord Murugan.',
        image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Mount Kinabalu (Borneo)',
        description: 'Towering 4,095-meter granite peak crowned with extraordinary alpine biodiversity in Sabah.',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-mountain-line',
      },
    ],
  },
  {
    id: 'thailand',
    name: 'Thailand',
    flagCode: 'th',
    region: 'Asia',
    description:
      'The Land of Smiles, celebrated for golden Buddhist temples, bustling Bangkok street food markets, tropical Andaman islands, and welcoming destination programs for visitors and nomads.',
    coverImage: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Destination Thailand Visa (DTV)', 'Education Visa (Non-ED)', 'Tourist Visa (TR)', 'Elite Residence Visa'],
    landmarks: [
      {
        name: 'The Grand Palace (Bangkok)',
        description: 'Opulent royal complex holding the sacred Emerald Buddha (Wat Phra Kaew).',
        image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Wat Arun (Temple of Dawn)',
        description: 'Iconic riverside temple covered in colourful porcelain mosaic pieces along the Chao Phraya.',
        image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'Phi Phi Islands (Maya Bay)',
        description: 'Spectacular limestone karsts sheltering turquoise lagoons in the Andaman Sea.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-sun-line',
      },
    ],
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    flagCode: 'vn',
    region: 'Asia',
    description:
      'Fast emerging as a global manufacturing hub, Vietnam combines limestone seascape towers in Ha Long Bay, lantern-lit heritage in Hoi An, and vibrant entrepreneurial dynamism in Hanoi and Ho Chi Minh City.',
    coverImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Tourist eVisa (90-Day Multiple)', 'Student Visa (DH)', 'Business Visa (DN)', 'Work Permit & Temporary Residence'],
    landmarks: [
      {
        name: 'Ha Long Bay',
        description: 'Emerald waters studded with thousands of towering limestone islands topped by rainforests.',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-sailboat-line',
      },
      {
        name: 'Golden Bridge (Da Nang)',
        description: 'Gilded pedestrian walkway held aloft by two colossal weathered stone hands in the Ba Na Hills.',
        image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-community-line',
      },
      {
        name: 'Hội An Ancient Town',
        description: 'Exceptionally well-preserved 15th-to-19th century trading port illuminated by silk lanterns.',
        image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
    ],
  },
  {
    id: 'indonesia',
    name: 'Indonesia',
    flagCode: 'id',
    region: 'Asia',
    description:
      'The world’s largest island archipelago, spanning volcanic peaks, ancient Buddhist temples like Borobudur, and Bali’s renowned creative, spiritual, and digital nomad communities.',
    coverImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['B211A Visit Visa', 'Digital Nomad (E33G Remote Worker)', 'Second Home Visa', 'Student Visa (KITAS)'],
    landmarks: [
      {
        name: 'Borobudur Temple (Java)',
        description: 'The world’s largest Buddhist temple complex dating from the 9th century decorated with 504 Buddha statues.',
        image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Tanah Lot (Bali)',
        description: 'Ancient Hindu pilgrimage temple perched dramatically atop an offshore sea rock formation.',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Mount Bromo',
        description: 'Active volcanic caldera rising from the Sea of Sand in Bromo Tengger Semeru National Park.',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-mountain-line',
      },
    ],
  },
  {
    id: 'philippines',
    name: 'Philippines',
    flagCode: 'ph',
    region: 'Asia',
    description:
      'An archipelago of more than 7,000 islands famed for English-proficiency education, medical and nursing academies, turquoise lagoons in Palawan, and welcoming island culture.',
    coverImage: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Student Visa (9F)', 'Special Resident Retiree\'s Visa (SRRV)', 'Tourist Visa (9A)', 'Pre-Arranged Employment (9G)'],
    landmarks: [
      {
        name: 'El Nido & Coron (Palawan)',
        description: 'Towering karst limestone islands enclosing crystal-clear marine sanctuaries and hidden beaches.',
        image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-sun-line',
      },
      {
        name: 'Chocolate Hills (Bohol)',
        description: 'Over 1,200 conical limestone hills that turn cocoa brown in the dry season.',
        image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-landscape-line',
      },
      {
        name: 'Banaue Rice Terraces',
        description: '2,000-year-old mountain terraces carved into the Cordilleras by indigenous Ifugao ancestors.',
        image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-plant-line',
      },
    ],
  },
  {
    id: 'nepal',
    name: 'Nepal',
    flagCode: 'np',
    region: 'Asia',
    description:
      'Nestled along the high Himalayas, Nepal features eight of the world’s ten highest peaks including Mount Everest, alongside ancient pagoda temples in Kathmandu and Lumbini pilgrimage sites.',
    coverImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Tourist Visa (On Arrival / Online)', 'Student Visa', 'Business Visa', 'Non-Tourist Visa'],
    landmarks: [
      {
        name: 'Mount Everest Base Camp',
        description: 'Iconic gateway to the roof of the world at 5,364 meters in the Khumbu Himalayan region.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-mountain-line',
      },
      {
        name: 'Boudhanath Stupa (Kathmandu)',
        description: 'One of the largest spherical stupas in the world, the spiritual heart of Tibetan Buddhism.',
        image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Pokhara & Lake Phewa',
        description: 'Tranquil alpine lake mirroring the snow-capped Annapurna and Machapuchare mountain ranges.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-water-percent-line',
      },
    ],
  },
  {
    id: 'sri-lanka',
    name: 'Sri Lanka',
    flagCode: 'lk',
    region: 'Asia',
    description:
      'The Pearl of the Indian Ocean, celebrated for UNESCO ancient rock citadels, rolling emerald Ceylon tea plantations, sacred Buddhist relics, and wildlife-rich national parks.',
    coverImage: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Electronic Travel Authorization (ETA)', 'Residence Visa', 'Student Visa', 'Business Visa'],
    landmarks: [
      {
        name: 'Sigiriya Rock Fortress',
        description: 'Ancient 5th-century palace citadel built atop a sheer 200-meter granite column with fresco paintings.',
        image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Nine Arches Bridge (Ella)',
        description: 'Colonial-era stone railway viaduct curved gracefully through lush high-altitude tea plantations.',
        image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-community-line',
      },
      {
        name: 'Temple of the Sacred Tooth Relic',
        description: 'Golden-roofed Buddhist temple in royal Kandy housing the sacred tooth relic of the Buddha.',
        image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-church-line',
      },
    ],
  },
  {
    id: 'bangladesh',
    name: 'Bangladesh',
    flagCode: 'bd',
    region: 'Asia',
    description:
      'A rapidly growing South Asian economy, Bangladesh features the world’s largest mangrove forest in the Sundarbans, the longest natural sea beach in Cox’s Bazar, and a booming textile and tech export industry.',
    coverImage: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Tourist Visa', 'Student Visa', 'Business Visa', 'Employment Visa'],
    landmarks: [
      {
        name: 'The Sundarbans Mangrove',
        description: 'The world’s largest coastal mangrove forest, UNESCO sanctuary for the wild Royal Bengal Tiger.',
        image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-plant-line',
      },
      {
        name: 'Lalbagh Fort (Dhaka)',
        description: 'Incomplete 17th-century Mughal fort complex with the tomb of Pari Bibi on the Buriganga River.',
        image: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Cox\'s Bazar Beach',
        description: 'Unbroken 120-kilometre golden sand sea beach stretching along the Bay of Bengal.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-sun-line',
      },
    ],
  },
  {
    id: 'cambodia',
    name: 'Cambodia',
    flagCode: 'kh',
    region: 'Asia',
    description:
      'Rich with the legacy of the Khmer Empire, Cambodia holds the monumental stone temples of Angkor, tranquil Tonle Sap floating villages, and rapid infrastructural development in Phnom Penh.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Tourist eVisa (Type T)', 'Ordinary Visa (Type E)', 'Student Visa', 'Business Visa'],
    landmarks: [
      {
        name: 'Angkor Wat (Siem Reap)',
        description: 'The largest religious monument in the world, classical apex of high Khmer temple architecture.',
        image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Bayon Temple',
        description: 'Richly decorated Khmer temple known for its 216 serene, gigantic smiling stone faces.',
        image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Royal Palace of Phnom Penh',
        description: 'Traditional Khmer golden spire palace complex housing the Silver Pagoda.',
        image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
    ],
  },
  {
    id: 'laos',
    name: 'Laos',
    flagCode: 'la',
    region: 'Asia',
    description:
      'A serene landlocked Southeast Asian jewel embraced by the Mekong River, renowned for Buddhist heritage in Luang Prabang, turquoise tiered waterfalls, and untouched karst landscapes.',
    coverImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Tourist eVisa', 'Business Visa (NI-B2)', 'Work Permit', 'Student Visa'],
    landmarks: [
      {
        name: 'Kuang Si Falls',
        description: 'Three-tiered waterfall cascading into crystal-clear turquoise swimming pools near Luang Prabang.',
        image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-water-percent-line',
      },
      {
        name: 'Wat Xieng Thong',
        description: '16th-century golden royal temple symbolizing classical Luang Prabang architecture.',
        image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Pha That Luang (Vientiane)',
        description: 'Gold-covered Buddhist stupa in the capital city, the most sacred national monument of Laos.',
        image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
    ],
  },
  {
    id: 'hong-kong',
    name: 'Hong Kong',
    flagCode: 'hk',
    region: 'Asia',
    description:
      'A premier international financial hub where dense vertical skyscrapers meet subtropical national parks, Victoria Harbour, and world-class universities ranked among the world’s top 50.',
    coverImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Student Visa', 'General Employment Policy (GEP)', 'Top Talent Pass Scheme (TTPS)', 'Quality Migrant Admission Scheme'],
    landmarks: [
      {
        name: 'Victoria Peak & Peak Tram',
        description: 'Historic funicular railway ascending to Hong Kong’s highest summit overlooking Victoria Harbour.',
        image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-mountain-line',
      },
      {
        name: 'Tian Tan Buddha (Big Buddha)',
        description: 'Colossal 34-meter bronze Buddha seated serenely atop Lantau Island alongside Po Lin Monastery.',
        image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Victoria Harbour Skyline',
        description: 'World-famous vertical skyline illuminated nightly by the Symphony of Lights laser show.',
        image: 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
    ],
  },
  {
    id: 'taiwan',
    name: 'Taiwan',
    flagCode: 'tw',
    region: 'Asia',
    description:
      'A global semiconductor titan and vibrant democracy, offering night market gourmet culture, high-speed rail, scenic mountain gorges, and world-recognized engineering faculties.',
    coverImage: 'https://images.unsplash.com/photo-1470004914212-259972391527?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Employment Gold Card', 'Visitor Visa', 'Student Resident Visa', 'Entrepreneur Visa'],
    landmarks: [
      {
        name: 'Taipei 101',
        description: 'Bamboo-inspired 508-meter skyscraper engineering wonder equipped with a 660-tonne tuned mass damper.',
        image: 'https://images.unsplash.com/photo-1470004914212-259972391527?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'Taroko Gorge',
        description: 'Stunning 19-kilometre marble canyon carved by the Liwu River in Taroko National Park.',
        image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-landscape-line',
      },
      {
        name: 'Sun Moon Lake',
        description: 'Taiwan’s largest alpine lake surrounded by misty mountain temples and cycling paths.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-water-percent-line',
      },
    ],
  },

  // ==========================================
  // AFRICA (6)
  // ==========================================
  {
    id: 'south-africa',
    name: 'South Africa',
    flagCode: 'za',
    region: 'Africa',
    highlight: true,
    description:
      'The Rainbow Nation, blessed with majestic Table Mountain, world-famous Big Five safari reserves in Kruger, renowned wine estates, and top research institutions in Cape Town and Johannesburg.',
    coverImage: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Visitor’s Visa', 'Critical Skills Work Visa', 'Study Visa', 'Business Visa'],
    landmarks: [
      {
        name: 'Table Mountain (Cape Town)',
        description: 'Flat-topped sandstone landmark overlooking the Atlantic and Cape Peninsula.',
        image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-mountain-line',
      },
      {
        name: 'Kruger National Park',
        description: 'One of Africa’s largest game reserves, teeming with lions, leopards, rhinos, elephants, and buffalos.',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-sun-line',
      },
      {
        name: 'Cape Point & Cape of Good Hope',
        description: 'Dramatic rocky promontory at the southern tip of the Cape Peninsula where oceans meet.',
        image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-landscape-line',
      },
    ],
  },
  {
    id: 'egypt',
    name: 'Egypt',
    flagCode: 'eg',
    region: 'Africa',
    highlight: true,
    description:
      'Cradle of human civilization on the fertile banks of the Nile, home to world-famous pharaonic pyramids, bustling Cairo bazars, and vibrant Red Sea diving havens in Sharm El Sheikh.',
    coverImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Tourist eVisa / Visa on Arrival', 'Student Visa', 'Business Visa', 'Work Permit'],
    landmarks: [
      {
        name: 'Pyramids of Giza',
        description: 'The sole surviving wonder of the ancient world built as colossal royal tombs around 2560 BC.',
        image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'The Great Sphinx',
        description: 'Monolithic limestone statue with the body of a lion and head of Pharaoh Khafre on the Giza plateau.',
        image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-monument-line',
      },
      {
        name: 'Luxor Temple & Karnak',
        description: 'Vast open-air museum complex of ancient sandstone temples and hypostyle halls along the Nile.',
        image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
    ],
  },
  {
    id: 'morocco',
    name: 'Morocco',
    flagCode: 'ma',
    region: 'Africa',
    description:
      'A gateway between Europe and Africa, Morocco enchants visitors with labyrinthine imperial medinas in Marrakech and Fes, Atlas mountain passes, and Sahara desert dunes under star-filled skies.',
    coverImage: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Tourist eVisa', 'Student Visa', 'Business Visa', 'Long-Stay Residence Permit'],
    landmarks: [
      {
        name: 'Jemaa el-Fnaa (Marrakech)',
        description: 'Vibrant UNESCO square teeming with storytellers, musicians, spice merchants, and food stalls.',
        image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-store-2-line',
      },
      {
        name: 'Chefchaouen (The Blue City)',
        description: 'Enchanting Rif mountain town where streets and buildings are bathed in distinctive blue hues.',
        image: 'https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-community-line',
      },
      {
        name: 'Hassan II Mosque (Casablanca)',
        description: 'Grand oceanfront mosque with the world’s second tallest minaret (210m) jutting into the Atlantic.',
        image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
    ],
  },
  {
    id: 'kenya',
    name: 'Kenya',
    flagCode: 'ke',
    region: 'Africa',
    description:
      'The safari heartland of East Africa, home to the Great Wildebeest Migration in the Maasai Mara, snowy Mount Kenya, and Nairobi as the regional hub for diplomacy and tech innovation.',
    coverImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Electronic Travel Authorization (eTA)', 'Student Internship Visa', 'Work Permit (Class D/G)', 'Special Pass'],
    landmarks: [
      {
        name: 'Maasai Mara National Reserve',
        description: 'World-famous savanna theatre for the annual Great Migration of millions of wildebeest and zebras.',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-sun-line',
      },
      {
        name: 'Mount Kenya',
        description: 'Second-highest peak in Africa with rugged glacier-clad summits surrounded by unique alpine flora.',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-mountain-line',
      },
      {
        name: 'Diani Beach (Mombasa)',
        description: 'Pristine white sand coastal strip with coral reefs and offshore sandbars on the Indian Ocean.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-sun-line',
      },
    ],
  },
  {
    id: 'mauritius',
    name: 'Mauritius',
    flagCode: 'mu',
    region: 'Africa',
    description:
      'A jewel of the Indian Ocean, Mauritius combines multilingual African, Indian, and French heritage, an offshore financial services hub, and luxury resort shorelines.',
    coverImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Premium Visa (Digital Nomad 1-Year)', 'Student Visa', 'Occupation Permit (Professional/Investor)', 'Tourist Visa'],
    landmarks: [
      {
        name: 'Le Morne Brabant',
        description: 'UNESCO World Heritage basaltic monolith guarding a striking underwater waterfall sand optical illusion.',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-mountain-line',
      },
      {
        name: 'Seven Coloured Earths (Chamarel)',
        description: 'Geological formation of dunes formed by seven distinct colours of mineralized sand.',
        image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-palette-line',
      },
      {
        name: 'Black River Gorges National Park',
        description: 'Lush tropical rainforest reserve home to endangered native birds and dramatic waterfalls.',
        image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-plant-line',
      },
    ],
  },
  {
    id: 'seychelles',
    name: 'Seychelles',
    flagCode: 'sc',
    region: 'Africa',
    description:
      'An exclusive archipelago of 115 granite and coral islands in the Indian Ocean, famous for giant Aldabra tortoises, vanilla plantations, and sculpted pink granite boulders on Anse Source d\'Argent.',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Visitor’s Permit (Visa-Free Entry)', 'Gainful Occupational Permit (GOP)', 'Permanent Residence', 'Business Investor Visa'],
    landmarks: [
      {
        name: 'Anse Source d\'Argent (La Digue)',
        description: 'One of the most photographed beaches on Earth, framed by dramatic weather-sculpted granite boulders.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-sun-line',
      },
      {
        name: 'Vallée de Mai (Praslin)',
        description: 'Prehistoric palm forest sanctuary home to the legendary Coco de Mer, the world’s largest seed.',
        image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-plant-line',
      },
      {
        name: 'Morne Seychellois National Park',
        description: 'Lush mist-covered mountain peak rising above Mahé island with panoramic ocean vistas.',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-landscape-line',
      },
    ],
  },

  // ==========================================
  // RUSSIA & CENTRAL ASIA (3)
  // ==========================================
  {
    id: 'russia',
    name: 'Russia',
    flagCode: 'ru',
    region: 'Russia & Central Asia',
    description:
      'The largest nation on Earth, spanning 11 time zones from the baroque imperial grandeur of Saint Petersburg and Moscow’s Red Square to deep Lake Baikal and Siberian landscapes.',
    coverImage: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Tourist Visa', 'Student Visa', 'Highly Qualified Specialist (HQS) Work Visa', 'Business Visa'],
    landmarks: [
      {
        name: 'Saint Basil\'s Cathedral (Moscow)',
        description: 'Famous onion-domed architectural icon in Red Square built under Ivan the Terrible.',
        image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-church-line',
      },
      {
        name: 'The Hermitage & Winter Palace',
        description: 'Baroque imperial palace in St. Petersburg housing one of the world’s greatest art collections.',
        image: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'Lake Baikal',
        description: 'The world’s deepest and oldest freshwater lake containing 20% of Earth’s unfrozen surface water.',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-water-percent-line',
      },
    ],
  },
  {
    id: 'kazakhstan',
    name: 'Kazakhstan',
    flagCode: 'kz',
    region: 'Russia & Central Asia',
    description:
      'The largest landlocked nation in the world and an economic powerhouse in Central Asia, blending futuristic architecture in Astana with Tian Shan mountain ranges and ancient Silk Road heritage.',
    coverImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Tourist eVisa / Visa-Free', 'Work Visa (C3)', 'Student Visa (B9)', 'Business Visa (B1/B2)'],
    landmarks: [
      {
        name: 'Baiterek Tower (Astana)',
        description: 'Futuristic 105-meter monument embodying the Kazakh folk legend of the magical Samruk bird.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-building-line',
      },
      {
        name: 'Charyn Canyon',
        description: 'Dramatic 154-kilometre red sandstone gorge known as the Valley of Castles.',
        image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-landscape-line',
      },
      {
        name: 'Big Almaty Lake',
        description: 'Turquoise natural alpine reservoir perched 2,511 meters high in the Trans-Ili Alatau mountains.',
        image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-water-percent-line',
      },
    ],
  },
  {
    id: 'uzbekistan',
    name: 'Uzbekistan',
    flagCode: 'uz',
    region: 'Russia & Central Asia',
    description:
      'The architectural heart of the Silk Road, adorned with majestic turquoise-tiled madrasahs, soaring minarets, and ancient desert oases in legendary Samarkand, Bukhara, and Khiva.',
    coverImage: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=800&q=80',
    visaTypes: ['Tourist eVisa', 'Business Visa', 'Student Visa', 'Work Permit'],
    landmarks: [
      {
        name: 'Registan Square (Samarkand)',
        description: 'Heart of the ancient city framed by three monumental Islamic madrasahs covered in azure mosaic tiles.',
        image: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
      {
        name: 'Itchan Kala (Khiva)',
        description: 'UNESCO-preserved inner walled oasis town boasting over 50 historic monuments and 250 old houses.',
        image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-community-line',
      },
      {
        name: 'Po-i-Kalyan Complex (Bukhara)',
        description: 'Historic Islamic complex featuring the 48-meter Kalyan Minaret that spared destruction by Genghis Khan.',
        image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
        icon: 'ri-ancient-gate-line',
      },
    ],
  },
];

/**
 * Configurable mechanism for registering additional custom destinations
 * without modifying components.
 */
export const registerCustomDestination = (newCountry: CountryDestination): CountryDestination[] => {
  const existing = COUNTRIES_GALLERY.find((c) => c.id === newCountry.id);
  if (!existing) {
    COUNTRIES_GALLERY.push(newCountry);
  }
  return COUNTRIES_GALLERY;
};
