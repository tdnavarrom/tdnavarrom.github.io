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
      subtitle: 'Security Researcher &nbsp;·&nbsp; DevOps Engineer',
      cta1: 'Get in touch',
      cta2: 'View experience',
      cv: 'Download CV'
    },
    pub: {
      title: 'Publications',
      acceptance: 'Acceptance ratio: 257 / 1740 ≈ 14.8%',
      thesisStatus: 'Status: Thesis accepted · Paper TBA'
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
      p1: "I'm a <strong>DevOps and cloud engineer</strong> who loves cybersecurity, based in Montreal. I graduated with an <strong>M.A.Sc. in Information Security</strong> from Concordia University, researching <strong>eBPF</strong>-based kernel and container security, with industry experience at <strong>Ericsson</strong>, <strong>Pyxis</strong>, and <strong>Universidad EAFIT</strong>.",
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
      hybrid: 'Hybrid',
      grad:   { title: 'Graduate Research Student',
        b1: 'Selected for a Mitacs Accelerate research internship (Sep–Dec 2023) with Ericsson.',
        b2: 'Designed and executed resource-exhaustion attacks (fork bombs, futex floods, file-descriptor exhaustion) against containerized workloads using stress-ng and custom tooling.',
        b3: 'Used Docker and Podman for testing cross-container vulnerabilities and exploits.',
        b4: 'Used eBPF for detecting kernel attacks and building mitigation solutions.',
        b5: 'Researched and authored a thesis (KubeBPF) on in-kernel machine learning detection and mitigation of cross-container and kernel resource-exhaustion attacks.',
        b6: 'Co-authored CONTEXTS, a provenance-graph attack investigation paper accepted at IEEE S&P 2025.' },
      devops: { title: 'DevOps Engineer',
        b1: 'Built AWS infrastructure-as-code with Terraform and Terragrunt for a card payment processing client, provisioning RDS, EBS, and Auto Scaling Groups behind Network Load Balancers for high availability and scalability of regulated financial workloads.',
        b2: 'Automated deployment and server configuration with Ansible and Docker for a cryptocurrency exchange client, supporting secure, highly available production environments.',
        b3: 'Configured AWS Security Groups and CloudWatch monitoring for network security and observability across both client engagements.' },
      epm:    { title: 'Data Scientist Intern',
        b1: 'Built machine learning models in Python, Matlab, and R for hydrological forecasting.',
        b2: 'Analyzed model outputs to assess forecasting accuracy and guide improvements.',
        b3: 'Developed a web-scraping tool to extract hydrological data from XM.com.co.',
        b4: 'Built an API connector to retrieve data from XM.com.co for analysis.' },
      ra:     { title: 'Research Assistant',
        b1: 'Administered Linux systems for the Apolo HPC cluster, auditing packages for security vulnerabilities.',
        b2: "Deployed private web applications in Docker to harden the cluster's security posture.",
        b3: 'Built a Bash-based "LMOD module generator" to streamline application module creation for cluster users.',
        b4: 'Automated server provisioning and configuration with Ansible and Vagrant.',
        b5: 'Installed and maintained HPC applications for researchers, companies, and students using the cluster.' }
    },
    edu: {
      title: 'Education',
      graduated: 'Graduated',
      mscTitle: 'Master of Applied Science (M.A.Sc.)',
      mscField: 'Information System Security',
      bsTitle: 'Bachelor of Science (B.S.)', bsField: 'Computer Science and Engineering · GPA 4.28/5'
    },
    skills: {
      title: 'Skills & Technologies',
      cloud: 'DevOps', programming: 'Programming',
      backend: 'Back-end', frontend: 'Front-end',
      frameworks: 'Frameworks & Tools', security: 'Security',
      data: 'Data & Machine Learning'
    },
    languages: {
      title: 'Languages',
      nativeBadge: 'Native', fluentBadge: 'Fluent · C1', intermediateBadge: 'Intermediate · B1', basicBadge: 'Basic'
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
      subtitle: 'Investigador de Seguridad &nbsp;·&nbsp; Ingeniero DevOps',
      cta1: 'Hablemos',
      cta2: 'Ver experiencia',
      cv: 'Descargar CV'
    },
    pub: {
      title: 'Publicaciones',
      acceptance: 'Tasa de aceptación: 257 / 1740 ≈ 14.8%',
      thesisStatus: 'Estado: Tesis aceptada · Artículo por confirmar'
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
      p1: 'Soy <strong>ingeniero DevOps y de nube</strong> apasionado por la ciberseguridad, radicado en Montreal. Me gradué con una <strong>Maestría (M.A.Sc.) en Seguridad Informática</strong> de la Universidad Concordia, investigando seguridad de kernel y contenedores basada en <strong>eBPF</strong>, con experiencia en industria en <strong>Ericsson</strong>, <strong>Pyxis</strong> y la <strong>Universidad EAFIT</strong>.',
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
      hybrid: 'Híbrido',
      grad:   { title: 'Estudiante de Investigación de Posgrado',
        b1: 'Seleccionado para una pasantía de investigación Mitacs Accelerate (sep.–dic. 2023) con Ericsson.',
        b2: 'Diseño y ejecución de ataques de agotamiento de recursos (fork bombs, inundaciones de futex, agotamiento de descriptores de archivo) contra cargas de trabajo en contenedores, usando stress-ng y herramientas propias.',
        b3: 'Uso de Docker y Podman para pruebas de vulnerabilidades y exploits entre contenedores.',
        b4: 'Uso de eBPF para la detección de ataques al kernel y soluciones de mitigación.',
        b5: 'Investigación y redacción de una tesis (KubeBPF) sobre detección y mitigación mediante aprendizaje automático en el kernel de ataques entre contenedores y de agotamiento de recursos del kernel.',
        b6: 'Coautor de CONTEXTS, un artículo sobre investigación de ataques mediante grafos de proveniencia, aceptado en IEEE S&P 2025.' },
      devops: { title: 'Ingeniero DevOps',
        b1: 'Construcción de infraestructura como código en AWS (Terraform, Terragrunt) para un cliente de procesamiento de pagos con tarjeta, aprovisionando RDS, EBS y Auto Scaling Groups detrás de Network Load Balancers para alta disponibilidad y escalabilidad de cargas de trabajo financieras reguladas.',
        b2: 'Automatización del despliegue y la configuración de servidores (Ansible, Docker) para un cliente de intercambio de criptomonedas, garantizando entornos de producción seguros y de alta disponibilidad.',
        b3: 'Configuración de Security Groups de AWS y monitoreo con CloudWatch para la seguridad de red y la observabilidad en ambos clientes.' },
      epm:    { title: 'Pasante de Ciencia de Datos',
        b1: 'Construcción de modelos de machine learning en Python, Matlab y R para pronóstico hidrológico.',
        b2: 'Análisis de los resultados de los modelos para evaluar su precisión y orientar mejoras.',
        b3: 'Desarrollo de una herramienta de web scraping para extraer datos hidrológicos de XM.com.co.',
        b4: 'Construcción de un conector de API para obtener datos de XM.com.co y analizarlos.' },
      ra:     { title: 'Asistente de Investigación',
        b1: 'Administración de sistemas Linux para el clúster HPC Apolo, auditando paquetes en busca de vulnerabilidades de seguridad.',
        b2: 'Despliegue de aplicaciones web privadas en Docker para reforzar la seguridad del clúster.',
        b3: 'Creación de un "generador de módulos LMOD" en Bash para agilizar la creación de módulos de aplicaciones para los usuarios del clúster.',
        b4: 'Automatización del aprovisionamiento y configuración de servidores con Ansible y Vagrant.',
        b5: 'Instalación y mantenimiento de aplicaciones HPC para investigadores, empresas y estudiantes que usan el clúster.' }
    },
    edu: {
      title: 'Educación',
      graduated: 'Graduado',
      mscTitle: 'Maestría en Ciencias Aplicadas (M.A.Sc.)',
      mscField: 'Seguridad de Sistemas de Información',
      bsTitle: 'Pregrado', bsField: 'Ingeniería en Ciencias de la Computación · GPA 4.28/5'
    },
    skills: {
      title: 'Habilidades y Tecnologías',
      cloud: 'DevOps', programming: 'Programación',
      backend: 'Back-end', frontend: 'Front-end',
      frameworks: 'Frameworks y Herramientas', security: 'Seguridad',
      data: 'Datos y Machine Learning'
    },
    languages: {
      title: 'Idiomas',
      nativeBadge: 'Nativo', fluentBadge: 'Fluido · C1', intermediateBadge: 'Intermedio · B1', basicBadge: 'Básico'
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
      subtitle: 'Chercheur en Sécurité &nbsp;·&nbsp; Ingénieur DevOps',
      cta1: 'Me contacter',
      cta2: "Voir l'expérience",
      cv: 'Télécharger CV'
    },
    pub: {
      title: 'Publications',
      acceptance: "Taux d'acceptation : 257 / 1740 ≈ 14.8%",
      thesisStatus: 'Statut : Thèse acceptée · Article à confirmer'
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
      p1: "Je suis <strong>ingénieur DevOps et cloud</strong> passionné par la cybersécurité, basé à Montréal. J'ai obtenu une <strong>Maîtrise (M.A.Sc.) en Sécurité de l'Information</strong> de l'Université Concordia, où j'ai mené des recherches sur la sécurité du noyau et des conteneurs basée sur <strong>eBPF</strong>, avec une expérience en industrie chez <strong>Ericsson</strong>, <strong>Pyxis</strong> et à l'<strong>Université EAFIT</strong>.",
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
      hybrid: 'Hybride',
      grad:   { title: 'Étudiant-chercheur aux cycles supérieurs',
        b1: 'Sélectionné pour un stage de recherche Mitacs Accelerate (sep.–déc. 2023) avec Ericsson.',
        b2: "Conception et exécution d'attaques par épuisement de ressources (fork bombs, inondations de futex, épuisement de descripteurs de fichiers) contre des charges de travail conteneurisées, à l'aide de stress-ng et d'outils développés sur mesure.",
        b3: 'Utilisation de Docker et Podman pour tester les vulnérabilités et exploits inter-conteneurs.',
        b4: "Utilisation d'eBPF pour la détection d'attaques noyau et les solutions de mitigation.",
        b5: "Recherche et rédaction d'une thèse (KubeBPF) sur la détection et la mitigation par apprentissage automatique dans le noyau des attaques inter-conteneurs et d'épuisement des ressources noyau.",
        b6: "Coauteur de CONTEXTS, un article sur l'investigation d'attaques par graphes de provenance, accepté à IEEE S&P 2025." },
      devops: { title: 'Ingénieur DevOps',
        b1: "Construction d'infrastructure as code sur AWS (Terraform, Terragrunt) pour un client de traitement de paiements par carte, provisionnant RDS, EBS et des Auto Scaling Groups derrière des Network Load Balancers pour une haute disponibilité et une haute évolutivité des charges de travail financières réglementées.",
        b2: "Automatisation du déploiement et de la configuration des serveurs (Ansible, Docker) pour un client d'échange de cryptomonnaies, garantissant des environnements de production sécurisés et hautement disponibles.",
        b3: "Configuration des Security Groups AWS et surveillance CloudWatch pour la sécurité réseau et l'observabilité chez les deux clients." },
      epm:    { title: 'Stagiaire en science des données',
        b1: 'Construction de modèles de machine learning en Python, Matlab et R pour la prévision hydrologique.',
        b2: "Analyse des résultats des modèles afin d'évaluer leur précision et d'orienter les améliorations.",
        b3: "Développement d'un outil de web scraping pour extraire des données hydrologiques de XM.com.co.",
        b4: "Développement d'un connecteur API pour récupérer des données depuis XM.com.co et les analyser." },
      ra:     { title: 'Assistant de recherche',
        b1: 'Administration des systèmes Linux du cluster HPC Apolo, avec audit des paquets à la recherche de vulnérabilités de sécurité.',
        b2: "Déploiement d'applications web privées avec Docker pour renforcer la sécurité du cluster.",
        b3: "Création d'un « générateur de modules LMOD » en Bash pour simplifier la création de modules d'applications pour les utilisateurs du cluster.",
        b4: 'Automatisation du provisionnement et de la configuration des serveurs avec Ansible et Vagrant.',
        b5: "Installation et maintenance d'applications HPC pour les chercheurs, entreprises et étudiants utilisant le cluster." }
    },
    edu: {
      title: 'Formation',
      graduated: 'Diplômé',
      mscTitle: 'Maîtrise ès sciences appliquées (M.A.Sc.)',
      mscField: "Sécurité des Systèmes d'Information",
      bsTitle: 'Baccalauréat', bsField: 'Génie Informatique · GPA 4.28/5'
    },
    skills: {
      title: 'Compétences et Technologies',
      cloud: 'DevOps', programming: 'Programmation',
      backend: 'Back-end', frontend: 'Front-end',
      frameworks: 'Frameworks et Outils', security: 'Sécurité',
      data: 'Données et Machine Learning'
    },
    languages: {
      title: 'Langues',
      nativeBadge: 'Natif', fluentBadge: 'Courant · C1', intermediateBadge: 'Intermédiaire · B1', basicBadge: 'Notions de base'
    },
    certs: { title: 'Certificats' },
    contact: {
      title: 'Contactez-moi',
      sub: 'Que ce soit pour une collaboration de recherche, une opportunité professionnelle, ou simplement pour dire bonjour — ma boîte mail est ouverte.'
    },
  }
};
