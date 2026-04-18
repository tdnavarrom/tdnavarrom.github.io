/* ================================================================
   translations.js — All UI strings for EN / ES / FR
   Used by i18n.js: applyLang() looks up keys via dot-notation paths
   (e.g. "nav.home", "hero.subtitle") and injects them into the DOM.
   To add a new language: copy one block, change the key, translate.
   ================================================================ */
const translations = {
  en: {
    nav: {
      home: 'Home', about: 'About', hobbies: 'Hobbies',
      experience: 'Experience', publications: 'Publications', extracurricular: 'Extracurricular', education: 'Education', skills: 'Skills',
      languages: 'Languages', certifications: 'Certificates', contact: 'Contact'
    },
    hero: {
      greeting: "Hi, I'm",
      subtitle: 'Graduate Research Student @ Concordia University<br>Cloud Engineer &nbsp;·&nbsp; AWS &nbsp;·&nbsp; Linux &nbsp;·&nbsp; Cyber Security',
      cta1: 'Get in touch',
      cta2: 'View experience',
      cv: 'Download CV'
    },
    pub: {
      title: 'Publications',
      acceptance: 'Acceptance ratio: 257 / 1740 ≈ 14.8%'
    },
    extracurricular: {
      title: 'Extracurricular Activities',
      thirdPlace: '🥉 3rd',
      ctf:    { title: 'CTF Participant',
        b1: 'Participated in NorthSec 2024 and NorthSec 2025 CTFs.',
        b2: 'Participated in PolyPwn 2025 and 2026 CTF (3rd place in the 2026 edition).',
        b3: 'Participated in @HAck 2024 CTF.' },
      athack: { title: '@Hack CTF Organizer',
        b1: 'Helped organize the @Hack CTF event with over 300 participants.',
        b2: 'Gave support on challenges and guided participants throughout the competition.' },
      gemis:  { title: 'GEMIS Member & Financial Director',
        b1: 'Organized social events and award shows for 150+ CS students each semester at Universidad EAFIT.',
        b2: 'Elected Financial Director (Jan–Jul 2021), managing the budget for student events and gatherings.' }
    },
    about: {
      title: 'About Me',
      p1: "I'm a <strong>DevOps and cloud engineer</strong> who loves cybersecurity, based in Montreal. Currently pursuing an <strong>MSc in Information Security</strong> at Concordia University, with research and industry experience at <strong>Ericsson</strong>, <strong>Pyxis</strong>, and <strong>Universidad EAFIT</strong>.",
      p2: "I love <strong>traveling</strong> and learning about new cultures and languages — especially escaping to <strong>Argentina</strong> and <strong>Brazil</strong>. I also enjoy playing <strong>guitar</strong>, following football and combat sports, hiking, and competing in <strong>CTF</strong> cybersecurity competitions.",
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
      grad:   { title: 'Graduate Research Student',
        b1: 'Developing and evaluating novel security solutions for SDN and NFV.',
        b2: 'Contributing to the NSERC/Ericsson Industrial Research Chair in network security.',
        b3: 'Researching next-generation security architectures for telecom and cloud-native systems.' },
      mitacs: { title: 'Mitacs Research Intern',
        b1: 'Used Ansible as an automation tool for deployment of server tools and configuration.',
        b2: 'Used Docker for testing vulnerabilities and exploits.',
        b3: 'Used Kubernetes for app deployments and vulnerabilities research.',
        b4: 'Researched Kernel and 5G vulnerabilities.' },
      devops: { title: 'DevOps Engineer',
        b1: 'Used Terraform and Terragrunt for IaaC construction and deployment in AWS.',
        b2: 'Used Ansible as an automation tool for deployment of server tools and configuration.',
        b3: 'AWS Networking and Configuration for High Availability and High Scalability.',
        b4: 'Used Docker for environmental configuration and deployment of applications in AWS.' },
      epm:    { title: 'Intern — Energy Markets',
        b1: 'Used Data Science programming languages: Python, Matlab, and R.',
        b2: 'Built Machine Learning Models for hydrological forecasting.',
        b3: 'Performed data analysis of model results.',
        b4: 'Built a web scraping tool to extract data from XM.com.co.',
        b5: 'Built an API connector tool to fetch and analyse data from XM.com.co.' },
      ra:     { title: 'Research Assistant',
        b1: 'Linux System Admin — reviewed packages for vulnerabilities.',
        b2: 'Deployed private web apps in Docker to secure the cluster.',
        b3: 'Created "LMOD module generator" script for app usage [Bash].',
        b4: 'Used Ansible and Vagrant for deployment of server tools and configuration.',
        b5: 'Installed HPC applications for cluster users.' }
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
  },

  es: {
    nav: {
      home: 'Inicio', about: 'Sobre mí', hobbies: 'Pasatiempos',
      experience: 'Experiencia', publications: 'Publicaciones', extracurricular: 'Extracurricular', education: 'Educación', skills: 'Habilidades',
      languages: 'Idiomas', certifications: 'Certificados', contact: 'Contacto'
    },
    hero: {
      greeting: '¡Hola, soy',
      subtitle: 'Estudiante de Investigación @ Universidad Concordia<br>Ingeniero de Nube · AWS · Linux · Ciberseguridad',
      cta1: 'Hablemos',
      cta2: 'Ver experiencia',
      cv: 'Descargar CV'
    },
    pub: {
      title: 'Publicaciones',
      acceptance: 'Tasa de aceptación: 257 / 1740 ≈ 14.8%'
    },
    extracurricular: {
      title: 'Actividades Extracurriculares',
      thirdPlace: '🥉 3ro',
      ctf:    { title: 'Participante en CTFs',
        b1: 'Participé en los CTFs NorthSec 2024 y 2025.',
        b2: 'Participé en PolyPwn 2025 y 2026 (3er puesto en la edición 2026).',
        b3: 'Participé en el CTF @HAck 2024.' },
      athack: { title: 'Organizador del CTF @Hack',
        b1: 'Ayudé a organizar el evento CTF @Hack con más de 300 participantes.',
        b2: 'Brindé soporte en retos y acompañé a los participantes durante la competencia.' },
      gemis:  { title: 'Miembro de GEMIS y Director Financiero',
        b1: 'Organicé eventos sociales y premiaciones para más de 150 estudiantes de Sistemas por semestre en la EAFIT.',
        b2: 'Fui elegido Director Financiero (ene–jul 2021), manejando el presupuesto de los eventos estudiantiles.' }
    },
    about: {
      title: 'Sobre mí',
      p1: 'Soy <strong>ingeniero DevOps y de nube</strong> apasionado por la ciberseguridad, radicado en Montreal. Actualmente cursando una <strong>Maestría en Seguridad Informática</strong> en la Universidad Concordia, con experiencia en investigación e industria en <strong>Ericsson</strong>, <strong>Pyxis</strong> y la <strong>Universidad EAFIT</strong>.',
      p2: 'Me encanta <strong>viajar</strong> y aprender sobre nuevas culturas e idiomas — especialmente escaparme a <strong>Argentina</strong> y <strong>Brasil</strong>. También disfruto tocar <strong>guitarra</strong>, seguir el fútbol y los deportes de combate, hacer senderismo y competir en <strong>CTF</strong> de ciberseguridad.',
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
      grad:   { title: 'Estudiante de Investigación de Posgrado',
        b1: 'Desarrollando y evaluando soluciones de seguridad para redes SDN y NFV.',
        b2: 'Contribuyendo a la Cátedra Industrial NSERC/Ericsson en seguridad de redes.',
        b3: 'Investigando arquitecturas de seguridad de nueva generación para sistemas cloud-native.' },
      mitacs: { title: 'Pasante de Investigación Mitacs',
        b1: 'Uso de Ansible como herramienta de automatización para despliegue de herramientas y configuración de servidores.',
        b2: 'Uso de Docker para pruebas de vulnerabilidades y exploits.',
        b3: 'Uso de Kubernetes para despliegues de apps e investigación de vulnerabilidades.',
        b4: 'Investigación de vulnerabilidades en Kernel y 5G.' },
      devops: { title: 'Ingeniero DevOps',
        b1: 'Uso de Terraform y Terragrunt para construcción y despliegue de IaaC en AWS.',
        b2: 'Uso de Ansible como herramienta de automatización para configuración de servidores.',
        b3: 'Networking y configuración en AWS para Alta Disponibilidad y Alta Escalabilidad.',
        b4: 'Uso de Docker para configuración de entornos y despliegue de aplicaciones en AWS.' },
      epm:    { title: 'Pasante — Mercados de Energía',
        b1: 'Uso de lenguajes de ciencia de datos: Python, Matlab y R.',
        b2: 'Construcción de modelos de Machine Learning para pronóstico hidrológico.',
        b3: 'Análisis de datos de los resultados de los modelos.',
        b4: 'Desarrollo de herramienta de web scraping para extraer datos de XM.com.co.',
        b5: 'Desarrollo de conector API para obtener y analizar datos de XM.com.co.' },
      ra:     { title: 'Asistente de Investigación',
        b1: 'Administración de sistemas Linux — revisión de paquetes para vulnerabilidades.',
        b2: 'Despliegue de aplicaciones web privadas en Docker para asegurar el clúster.',
        b3: 'Creación del script "LMOD module generator" para uso de apps en Bash.',
        b4: 'Uso de Ansible y Vagrant para despliegue de herramientas y configuración de servidores.',
        b5: 'Instalación de aplicaciones HPC para usuarios del clúster.' }
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
  },

  fr: {
    nav: {
      home: 'Accueil', about: 'À propos', hobbies: 'Loisirs',
      experience: 'Expérience', publications: 'Publications', extracurricular: 'Parascolaire', education: 'Formation', skills: 'Compétences',
      languages: 'Langues', certifications: 'Certificats', contact: 'Contact'
    },
    hero: {
      greeting: 'Bonjour, je suis',
      subtitle: 'Étudiant chercheur @ Université Concordia<br>Ingénieur Cloud · AWS · Linux · Cybersécurité',
      cta1: 'Me contacter',
      cta2: "Voir l'expérience",
      cv: 'Télécharger CV'
    },
    pub: {
      title: 'Publications',
      acceptance: "Taux d'acceptation : 257 / 1740 ≈ 14.8%"
    },
    extracurricular: {
      title: 'Activités Parascolaires',
      thirdPlace: '🥉 3e',
      ctf:    { title: 'Participant aux CTFs',
        b1: 'Participation aux CTFs NorthSec 2024 et 2025.',
        b2: 'Participation à PolyPwn 2025 et 2026 (3e place en 2026).',
        b3: 'Participation au CTF @HAck 2024.' },
      athack: { title: 'Organisateur du CTF @Hack',
        b1: "Contribution à l'organisation du CTF @Hack avec plus de 300 participants.",
        b2: 'Soutien aux participants sur les challenges tout au long de la compétition.' },
      gemis:  { title: 'Membre GEMIS et Directeur Financier',
        b1: "Organisation d'événements sociaux et de cérémonies de remise de prix pour 150+ étudiants en informatique par semestre à l'EAFIT.",
        b2: 'Élu Directeur Financier (jan–juil 2021), gérant le budget des événements étudiants.' }
    },
    about: {
      title: 'À propos',
      p1: "Je suis <strong>ingénieur DevOps et cloud</strong> passionné par la cybersécurité, basé à Montréal. Je poursuis une <strong>Maîtrise en Sécurité de l'Information</strong> à l'Université Concordia, avec une expérience en recherche et en industrie chez <strong>Ericsson</strong>, <strong>Pyxis</strong> et à l'<strong>Université EAFIT</strong>.",
      p2: "J'adore <strong>voyager</strong> et découvrir de nouvelles cultures et langues — surtout m'évader en <strong>Argentine</strong> et au <strong>Brésil</strong>. J'aime aussi jouer de la <strong>guitare</strong>, suivre le football et les sports de combat, randonner, et participer à des <strong>CTF</strong> en cybersécurité.",
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
      grad:   { title: 'Étudiant chercheur en master',
        b1: 'Développement et évaluation de solutions de sécurité innovantes pour les réseaux SDN et NFV.',
        b2: 'Contribution à la Chaire de Recherche Industrielle NSERC/Ericsson en sécurité réseau.',
        b3: "Recherche d'architectures de sécurité de nouvelle génération pour les systèmes cloud-native." },
      mitacs: { title: 'Stagiaire de Recherche Mitacs',
        b1: "Utilisation d'Ansible comme outil d'automatisation pour le déploiement d'outils serveur.",
        b2: 'Utilisation de Docker pour tester des vulnérabilités et des exploits.',
        b3: "Utilisation de Kubernetes pour le déploiement d'applications et la recherche de vulnérabilités.",
        b4: 'Recherche de vulnérabilités dans le Kernel et la 5G.' },
      devops: { title: 'Ingénieur DevOps',
        b1: 'Utilisation de Terraform et Terragrunt pour la construction et le déploiement IaaC dans AWS.',
        b2: "Utilisation d'Ansible pour l'automatisation du déploiement d'outils et de la configuration.",
        b3: 'Configuration réseau AWS pour Haute Disponibilité et Haute Scalabilité.',
        b4: "Utilisation de Docker pour la configuration d'environnements et le déploiement dans AWS." },
      epm:    { title: "Stagiaire — Marchés de l'Énergie",
        b1: 'Utilisation de langages de science des données : Python, Matlab et R.',
        b2: "Construction de modèles de Machine Learning pour la prévision hydrologique.",
        b3: 'Analyse des données des résultats des modèles.',
        b4: "Développement d'un outil de web scraping pour extraire des données de XM.com.co.",
        b5: "Développement d'un connecteur API pour récupérer et analyser les données de XM.com.co." },
      ra:     { title: 'Assistant de Recherche',
        b1: 'Administration système Linux — audit de paquets pour les vulnérabilités.',
        b2: 'Déploiement de web apps privées sous Docker pour sécuriser le cluster.',
        b3: 'Création du script "LMOD module generator" pour l\'usage d\'applications [Bash].',
        b4: "Utilisation d'Ansible et Vagrant pour le déploiement d'outils serveur et la configuration.",
        b5: 'Installation des applications HPC pour les utilisateurs du cluster.' }
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
  }
};
