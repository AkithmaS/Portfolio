import pantrypal     from '@/assets/images/pantrypal.png'
import rentme        from '@/assets/images/rentme.jpg'
import helacraft     from '@/assets/images/helacraft.jpg'
import swiftlogistic from '@/assets/images/swiftlogistic.png'
import cli           from '@/assets/images/cli.png'

export const projectsData = [
  /* ── Tab One ── */
  {
    id: 1,
    title: 'PantryPal',
    category: 'Tab One',
    description:
      'AI-powered pantry and meal planning platform that generates recipes from available ingredients.',
    image: pantrypal,
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Google Gemini AI'],
    github: 'https://github.com/AkithmaS/PantryPal',
    demo: null,
  },
  {
    id: 2,
    title: 'RentMe',
    category: 'Tab One',
    description:
      'Luxury car rental management system with booking, vehicle tracking, and role-based access control.',
    image: rentme,
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    github: 'https://github.com/AkithmaS/RentMe',
    demo: null,
  },
  {
    id: 3,
    title: 'HelaCraft',
    category: 'Tab One',
    description:
      'E-commerce marketplace connecting Sri Lankan artisans with customers for handmade product sales.',
    image: helacraft,
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    github: 'https://github.com/madhushankast/HelaCraft',
    demo: null,
  },

  /* ── Tab Two ── */
  {
    id: 4,
    title: 'SwiftTrack',
    category: 'Tab Two',
    description:
      'Microservices-based logistics middleware enabling real-time order tracking and system integration.',
    image: swiftlogistic,
    tech: ['Java', 'Spring Boot', 'RabbitMQ', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/gethmiPerera/swiftlogistics',
    demo: null,
    objectFit: 'contain',
  },
  {
    id: 5,
    title: 'Ludo-CS',
    category: 'Tab Two',
    description:
      'Command-line Ludo game featuring advanced gameplay mechanics, AI-driven rules, and custom board logic.',
    image: cli,
    tech: ['C'],
    github: 'https://github.com/AkithmaS/LUDO-using-C',
    demo: null,
  },
  {
    id: 6,
    title: 'NexusEnroll',
    category: 'Tab Two',
    description:
      'Backend-focused university enrollment system designed with a scalable 3-tier architecture, automating course registration, validation, and academic management workflows.',
    image: cli,
    tech: ['Java', 'Python'],
    github: 'https://github.com/gethmiPerera/NexusEnroll-New',
    demo: null,
  },
]

export const projectTabs = ['Tab One', 'Tab Two']
