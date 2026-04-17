const translations = {
  en: {
    nav: {
      home: 'Home', about: 'About', hobbies: 'Hobbies',
      experience: 'Experience', education: 'Education', skills: 'Skills',
      languages: 'Languages', certifications: 'Certificates', contact: 'Contact'
    },
    hero: {
      greeting: "Hi, I'm",
      subtitle: 'Graduate Research Student @ Concordia University<br>Cloud Engineer &nbsp;·&nbsp; AWS &nbsp;·&nbsp; Linux &nbsp;·&nbsp; Cyber Security',
      cta1: 'Get in touch',
      cta2: 'View experience'
    },
    about: {
      title: 'About Me',
      p1: "I'm a graduate researcher and cloud engineer based in Montreal. Currently pursuing an <strong>MSc in Information Security</strong> at Concordia University, where I work at the <strong>NSERC/Ericsson Industrial Research Chair in SDN/NFV Security</strong>, developing and evaluating novel security solutions for software-defined networking and network function virtualization.",
      p2: "Before joining Concordia, I worked as a <strong>DevOps Engineer at Pyxis</strong>, designing and maintaining cloud-based infrastructures on AWS and Linux. I also completed a <strong>Mitacs Research Internship at Ericsson</strong> working on industry-driven security challenges for telecom and cloud-native networks.",
      p3: "Earlier in my career I was a Research Assistant at the <strong>Apolo Scientific Computing Center</strong> at Universidad EAFIT, contributing to energy market research and HPC workloads. I hold a <strong>Bachelor's in Computer Science</strong> from EAFIT, where I received the Premio Desarrollo de Software.",
      statExp: 'Years of experience',
      statSec: 'Information Security',
      statCerts: 'Certificates',
      statAward: 'Premio Desarrollo de Software'
    },
    hobbies: {
      title: 'Hobbies & Interests',
      football: { name: 'Football', desc: 'Lifelong fan and watcher.' },
      music:    { name: 'Music',    desc: 'Guitar enthusiast.' },
      hiking:   { name: 'Hiking',   desc: 'Exploring trails around Montreal and beyond.' },
      gaming:   { name: 'Gaming',   desc: 'Strategy and RPG titles when off the clock.' },
      travel:   { name: 'Travel',   desc: 'Discovering new places and cultures.' },
      combat:   { name: 'Combat Sports', desc: 'Fan of boxing and MMA.' }
    },
    exp: {
      title: 'Experience',
      filterAll: 'All', filterAcademic: 'Academic', filterIndustry: 'Industry',
      grad:   { title: 'Graduate Research Student',    desc: 'Developing and evaluating novel security solutions for software-defined networking and network function virtualization. Contributing to the NSERC/Ericsson Industrial Research Chair focused on securing next-generation network architectures.' },
      mitacs: { title: 'Mitacs Research Intern',       desc: 'Collaborated with Ericsson researchers on industry-driven security challenges for modern telecom and cloud-native network infrastructure.' },
      devops: { title: 'DevOps Engineer',              desc: 'Designed, implemented, and maintained cloud-based infrastructures using AWS and Linux. Collaborated with engineers and stakeholders to ensure the quality and security of software products and services.' },
      epm:    { title: 'Intern — Energy Markets',      desc: 'Supported the energy markets management area with data analysis and software tooling for electricity market operations.' },
      ra:     { title: 'Research Assistant',           desc: 'Participated in projects related to energy markets, data analysis, and software development. Contributed to HPC workloads at the Apolo Scientific Computing Center across three consecutive terms.' }
    },
    edu: {
      title: 'Education',
      inProgress: 'In Progress', graduated: 'Graduated',
      mscTitle: 'Master of Science',
      mscField: 'Computer & Information Systems Security / Information Assurance',
      bsTitle: "Bachelor's Degree", bsField: 'Computer Science'
    },
    skills: {
      title: 'Skills & Technologies',
      cloud: 'Cloud & Infrastructure', programming: 'Programming Languages',
      frameworks: 'Frameworks & Tools', security: 'Cyber Security & Research',
      data: 'Data & Machine Learning'
    },
    languages: {
      title: 'Languages',
      nativeBadge: 'Native', fluentBadge: 'Fluent · C1', intermediateBadge: 'Intermediate · B1'
    },
    certs: { title: 'Certificates' },
    contact: {
      title: 'Get in Touch',
      sub: "Whether it's a research collaboration, job opportunity, or just to say hello — my inbox is open."
    },
    footer: { built: 'Built with HTML & CSS' }
  },

  es: {
    nav: {
      home: 'Inicio', about: 'Sobre mí', hobbies: 'Pasatiempos',
      experience: 'Experiencia', education: 'Educación', skills: 'Habilidades',
      languages: 'Idiomas', certifications: 'Certificados', contact: 'Contacto'
    },
    hero: {
      greeting: '¡Hola, soy',
      subtitle: 'Estudiante de Investigación @ Universidad Concordia<br>Ingeniero de Nube · AWS · Linux · Ciberseguridad',
      cta1: 'Hablemos',
      cta2: 'Ver experiencia'
    },
    about: {
      title: 'Sobre mí',
      p1: 'Soy investigador y ingeniero de nube radicado en Montreal, parcero. Actualmente cursando una <strong>Maestría en Seguridad Informática</strong> en la Universidad Concordia, donde trabajo en la <strong>Cátedra Industrial NSERC/Ericsson en Seguridad SDN/NFV</strong>, desarrollando y evaluando soluciones bacanas de seguridad para redes definidas por software y virtualización de funciones de red.',
      p2: 'Antes de llegar a Concordia, trabajé como <strong>Ingeniero DevOps en Pyxis</strong>, diseñando y manteniendo infraestructuras en la nube con AWS y Linux. También hice una <strong>Pasantía de Investigación Mitacs en Ericsson</strong>, trabajando en retos de seguridad para redes de telecomunicaciones y cloud-native.',
      p3: 'Más atrás en mi carrera fui Asistente de Investigación en el <strong>Centro de Computación Científica Apolo</strong> de la Universidad EAFIT, contribuyendo a investigación en mercados de energía y cargas HPC. Tengo un <strong>Pregrado en Ciencias de la Computación</strong> de la EAFIT, donde recibí el Premio Desarrollo de Software.',
      statExp: 'Años de experiencia',
      statSec: 'Seguridad Informática',
      statCerts: 'Certificaciones',
      statAward: 'Premio Desarrollo de Software'
    },
    hobbies: {
      title: 'Pasatiempos e Intereses',
      football: { name: 'Fútbol',            desc: 'Futbolero de toda la vida, fiel seguidor del fútbol.' },
      music:    { name: 'Música',             desc: 'Guitarrista apasionado, amante de la buena música.' },
      hiking:   { name: 'Senderismo',         desc: 'Explorando los caminos de Montreal y otros rumbos.' },
      gaming:   { name: 'Videojuegos',        desc: 'Juegos de estrategia y RPG cuando hay tiempo libre.' },
      travel:   { name: 'Viajes',             desc: 'Descubriendo nuevos lugares y culturas por el mundo.' },
      combat:   { name: 'Deportes de Combate', desc: 'Fanático del boxeo y las artes marciales mixtas.' }
    },
    exp: {
      title: 'Experiencia',
      filterAll: 'Todos', filterAcademic: 'Académica', filterIndustry: 'Industria',
      grad:   { title: 'Estudiante de Investigación de Posgrado', desc: "Desarrollando y evaluando soluciones de seguridad para redes SDN y NFV. Contribuyendo a la Cátedra Industrial NSERC/Ericsson enfocada en asegurar arquitecturas de red de siguiente generación." },
      mitacs: { title: 'Pasante de Investigación Mitacs',         desc: 'Trabajé con investigadores de Ericsson en retos de seguridad para infraestructura de telecomunicaciones y redes cloud-native modernas.' },
      devops: { title: 'Ingeniero DevOps',                        desc: "Diseñé, implementé y mantuve infraestructuras cloud con AWS y Linux. Colaboré con ingenieros y stakeholders pa' garantizar la calidad y seguridad de productos y servicios de software." },
      epm:    { title: 'Pasante — Mercados de Energía',           desc: 'Apoyé el área de gestión de mercados de energía con análisis de datos y herramientas de software para operaciones en la bolsa de energía.' },
      ra:     { title: 'Asistente de Investigación',              desc: 'Participé en proyectos de mercados de energía, análisis de datos y desarrollo de software. Contribuí a cargas HPC en el Centro Apolo durante tres términos seguidos.' }
    },
    edu: {
      title: 'Educación',
      inProgress: 'En curso', graduated: 'Graduado',
      mscTitle: 'Maestría en Ciencias',
      mscField: 'Seguridad de Sistemas e Información / Garantía de Información',
      bsTitle: 'Pregrado', bsField: 'Ciencias de la Computación'
    },
    skills: {
      title: 'Habilidades y Tecnologías',
      cloud: 'Nube e Infraestructura', programming: 'Lenguajes de Programación',
      frameworks: 'Frameworks y Herramientas', security: 'Ciberseguridad e Investigación',
      data: 'Datos y Machine Learning'
    },
    languages: {
      title: 'Idiomas',
      nativeBadge: 'Nativo', fluentBadge: 'Fluido · C1', intermediateBadge: 'Intermedio · B1'
    },
    certs: { title: 'Certificados' },
    contact: {
      title: '¡Hablemos, parce!',
      sub: 'Si querés hablar de investigación, oportunidades laborales o simplemente saludar — mi bandeja está abierta.'
    },
    footer: { built: 'Hecho con HTML y CSS' }
  },

  fr: {
    nav: {
      home: 'Accueil', about: 'À propos', hobbies: 'Loisirs',
      experience: 'Expérience', education: 'Formation', skills: 'Compétences',
      languages: 'Langues', certifications: 'Certificats', contact: 'Contact'
    },
    hero: {
      greeting: 'Bonjour, je suis',
      subtitle: 'Étudiant chercheur @ Université Concordia<br>Ingénieur Cloud · AWS · Linux · Cybersécurité',
      cta1: 'Me contacter',
      cta2: "Voir l'expérience"
    },
    about: {
      title: 'À propos',
      p1: "Je suis chercheur en master et ingénieur cloud basé à Montréal. Je poursuis actuellement une <strong>Maîtrise en Sécurité de l'Information</strong> à l'Université Concordia, où je travaille à la <strong>Chaire de Recherche Industrielle CRSNG/Ericsson en Sécurité SDN/NFV</strong>, développant et évaluant des solutions de sécurité innovantes pour les réseaux définis par logiciel et la virtualisation des fonctions réseau.",
      p2: "Avant de rejoindre Concordia, j'ai travaillé comme <strong>Ingénieur DevOps chez Pyxis</strong>, concevant et maintenant des infrastructures cloud sur AWS et Linux. J'ai également effectué un <strong>Stage de Recherche Mitacs chez Ericsson</strong>, travaillant sur des défis de sécurité pour les réseaux télécom et cloud-native.",
      p3: "Plus tôt dans ma carrière, j'étais Assistant de Recherche au <strong>Centre de Calcul Scientifique Apolo</strong> de l'Université EAFIT, contribuant à la recherche sur les marchés de l'énergie et aux charges HPC. Je suis titulaire d'une <strong>Licence en Informatique</strong> de l'EAFIT, où j'ai reçu le Premio Desarrollo de Software.",
      statExp: "Années d'expérience",
      statSec: "Sécurité de l'Information",
      statCerts: 'Certificats',
      statAward: 'Premio Desarrollo de Software'
    },
    hobbies: {
      title: 'Loisirs et Intérêts',
      football: { name: 'Football',          desc: 'Fan et spectateur passionné du beau jeu.' },
      music:    { name: 'Musique',            desc: 'Guitariste passionné et amateur de bonne musique.' },
      hiking:   { name: 'Randonnée',          desc: 'Explorer les sentiers de Montréal et au-delà.' },
      gaming:   { name: 'Jeux vidéo',         desc: 'Jeux de stratégie et RPG pendant les temps libres.' },
      travel:   { name: 'Voyages',            desc: 'Découvrir de nouveaux endroits et cultures.' },
      combat:   { name: 'Sports de Combat',   desc: "Fan de boxe et d'arts martiaux mixtes." }
    },
    exp: {
      title: 'Expérience',
      filterAll: 'Tous', filterAcademic: 'Académique', filterIndustry: 'Industrie',
      grad:   { title: 'Étudiant chercheur en master',       desc: "Développement et évaluation de solutions de sécurité innovantes pour les réseaux SDN et NFV. Contribution à la Chaire de Recherche Industrielle NSERC/Ericsson axée sur la sécurisation des architectures réseau de nouvelle génération." },
      mitacs: { title: 'Stagiaire de Recherche Mitacs',      desc: "Collaboration avec des chercheurs d'Ericsson sur des défis de sécurité pour les infrastructures télécom modernes et les réseaux cloud-native." },
      devops: { title: 'Ingénieur DevOps',                   desc: "Conception, implémentation et maintenance d'infrastructures cloud avec AWS et Linux. Collaboration avec des ingénieurs et parties prenantes pour garantir la qualité et la sécurité des produits logiciels." },
      epm:    { title: "Stagiaire — Marchés de l'Énergie",   desc: "Soutien à la gestion des marchés de l'énergie avec l'analyse de données et des outils logiciels pour les opérations du marché de l'électricité." },
      ra:     { title: 'Assistant de Recherche',             desc: "Participation à des projets liés aux marchés de l'énergie, à l'analyse de données et au développement logiciel. Contribution aux charges HPC au Centre Apolo pendant trois trimestres consécutifs." }
    },
    edu: {
      title: 'Formation',
      inProgress: 'En cours', graduated: 'Diplômé',
      mscTitle: 'Master of Science',
      mscField: "Sécurité des Systèmes d'Information / Assurance de l'Information",
      bsTitle: 'Licence', bsField: 'Informatique'
    },
    skills: {
      title: 'Compétences et Technologies',
      cloud: 'Cloud et Infrastructure', programming: 'Langages de Programmation',
      frameworks: 'Frameworks et Outils', security: 'Cybersécurité et Recherche',
      data: 'Données et Machine Learning'
    },
    languages: {
      title: 'Langues',
      nativeBadge: 'Natif', fluentBadge: 'Courant · C1', intermediateBadge: 'Intermédiaire · B1'
    },
    certs: { title: 'Certificats' },
    contact: {
      title: 'Contactez-moi',
      sub: 'Que ce soit pour une collaboration de recherche, une opportunité professionnelle, ou simplement pour dire bonjour — ma boîte mail est ouverte.'
    },
    footer: { built: 'Fait avec HTML et CSS' }
  }
};
