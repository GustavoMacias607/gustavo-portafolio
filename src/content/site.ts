export type Locale = 'es' | 'en';
export type Localized = Record<Locale, string>;
export const bilingual = (es: string, en: string): Localized => ({ es, en });

export const profile = {
  name: 'Gustavo Macías',
  email: 'gamacias02@gmail.com',
  github: 'https://github.com/GustavoMacias607',
  linkedin: 'https://www.linkedin.com/in/gustavo-adolfo-macias-munan/' as string | null,
  english: bilingual('B1 · Intermedio', 'B1 · Intermediate'),
  // Optional custom domain. Vercel supplies its production origin automatically.
  siteUrl: null as string | null,
  location: bilingual('Jalisco, México', 'Jalisco, Mexico'),
};

export function localizedPath(locale: Locale, path = '/') {
  return `${locale === 'en' ? '/en' : ''}${path === '/' ? '/' : `${path.replace(/\/$/, '')}/`}`;
}

export const navigation = [
  { id: 'about', label: bilingual('Sobre mí', 'About') },
  { id: 'projects', label: bilingual('Proyectos', 'Projects') },
  { id: 'experience', label: bilingual('Experiencia', 'Experience') },
  { id: 'stack', label: bilingual('Stack', 'Stack') },
  { id: 'contact', label: bilingual('Contacto', 'Contact') },
];

export const copy = {
  hero: bilingual(
    'Desarrollo aplicaciones web y APIs con enfoque en backend, arquitectura y soluciones que resuelven problemas reales.',
    'I build web applications and APIs with a focus on backend development, software architecture, and solving real-world problems.',
  ),
  viewProjects: bilingual('Ver proyectos', 'View projects'),
  viewResume: bilingual('Ver CV', 'View resume'),
  resume: bilingual('CV', 'Resume'),
  aboutTitle: bilingual('Detrás del código,\nun problema por resolver.', 'Behind the code,\na problem to solve.'),
  about: [
    bilingual('Soy Ingeniero en Informática y desarrollador de software, enfocado actualmente en desarrollo backend con C# y ASP.NET Core. Me interesa construir aplicaciones y APIs con una arquitectura clara, reglas de negocio bien definidas y bases de código mantenibles.', "I'm a Computer Engineering graduate and software developer currently focused on backend development with C# and ASP.NET Core. I'm interested in building applications and APIs with clear architecture, well-defined business rules, and maintainable codebases."),
    bilingual('He trabajado desarrollando soluciones web para procesos reales y también cuento con experiencia profesional en soporte e infraestructura TI. A lo largo de mis proyectos he trabajado con .NET, Node.js, React, SQL, Docker, Android y otras tecnologías, lo que me ha permitido conocer diferentes áreas del desarrollo de software.', "I've worked on web solutions for real-world processes and also have professional experience in IT support and infrastructure. Across my projects, I've worked with .NET, Node.js, React, SQL, Docker, Android, and other technologies, giving me experience across different areas of software development."),
  ],
  projectsTitle: bilingual('Ideas que se convierten\nen software.', 'Ideas, turned\ninto software.'),
  projectsLead: bilingual('Una selección de proyectos, las decisiones detrás de ellos y lo que resuelven.', 'Selected projects, the decisions behind them, and the problems they solve.'),
  caseStudy: bilingual('Explorar proyecto', 'Explore project'),
  allProjects: bilingual('Todos los proyectos', 'All projects'),
  moreProjects: bilingual('Otras formas de construir.', 'More ways to build.'),
  experienceTitle: bilingual('Experiencia en contextos reales.', 'Experience in real-world settings.'),
  stackTitle: bilingual('Las herramientas,\nal servicio de la solución.', 'The right tools,\nfor the problem at hand.'),
  educationTitle: bilingual('Una base sólida.\nAprendizaje continuo.', 'A solid foundation.\nAlways learning.'),
  contactTitle: bilingual('¿Construimos algo?', "Let's build something."),
  contact: bilingual('Estoy abierto a oportunidades de desarrollo de software y a colaborar en proyectos interesantes. Puedes contactarme directamente por correo o encontrarme en LinkedIn y GitHub.', "I'm open to software development opportunities and interesting project collaborations. Feel free to reach out by email or connect with me on LinkedIn and GitHub."),
  skip: bilingual('Saltar al contenido', 'Skip to content'),
};

export const experience = [
  {
    role: bilingual('Full Stack Developer Jr.', 'Full Stack Developer Jr.'),
    organization: 'CFE — Comisión Federal de Electricidad',
    type: bilingual('Residencia profesional', 'Professional residency'),
    period: bilingual('2024 — 2025', '2024 — 2025'),
    featured: true,
    points: [
      bilingual('Desarrollo de SIFCAO para formular presupuestos de obra: catálogos, tarjetas de precio unitario, proyectos y comparación de proveedores.', 'Developed SIFCAO for construction cost estimation: catalogs, unit-price cards, projects, and supplier comparisons.'),
      bilingual('Levantamiento de requerimientos con usuarios, modelado de datos, lógica de negocio e interfaces web.', 'Gathered requirements with users and worked on data modeling, business logic, and web interfaces.'),
      bilingual('Automatización de cálculos y reportes PDF/Excel; reducción aproximada del proceso de presupuestación de 15 días a horas.', 'Automated calculations and PDF/Excel reports, reducing the estimation process from approximately 15 days to hours.'),
    ],
    stack: ['PHP', 'MySQL', 'JavaScript', 'jQuery'],
  },
  {
    role: bilingual('IT Support Jr.', 'IT Support Jr.'),
    organization: null,
    type: bilingual('Soporte e infraestructura TI', 'IT support & infrastructure'),
    period: bilingual('Marzo — Mayo 2026', 'March — May 2026'),
    featured: false,
    points: [
      bilingual('Atención de incidencias de Windows, Microsoft 365, impresoras y asistencia remota a usuarios.', 'Resolved Windows, Microsoft 365, and printer issues and provided remote user support.'),
      bilingual('Apoyo en respaldo y sincronización de archivos con SharePoint y OneDrive.', 'Supported file backup and synchronization with SharePoint and OneDrive.'),
      bilingual('Diagnóstico de conectividad y apoyo en infraestructura con equipos Fortinet y Cisco.', 'Troubleshot connectivity and supported infrastructure using Fortinet and Cisco equipment.'),
    ],
    stack: ['Windows', 'Microsoft 365', 'Networking', 'Fortinet'],
  },
  {
    role: bilingual('Frontend Developer', 'Frontend Developer'),
    organization: null,
    type: bilingual('Colaboraciones independientes · Por proyecto', 'Independent collaborations · Project-based'),
    period: bilingual('2023 — 2025', '2023 — 2025'),
    featured: false,
    points: [bilingual('Participé en proyectos web independientes apoyando principalmente en desarrollo frontend, implementación de interfaces y funcionalidades con JavaScript, React, Next.js y Tailwind CSS.', 'Contributed to independent web projects, mainly building frontend interfaces and functionality with JavaScript, React, Next.js, and Tailwind CSS.')],
    stack: ['JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
];

export const techGroups = [
  { title: bilingual('Backend', 'Backend'), code: '01', primary: true, tools: ['C#', 'ASP.NET Core', 'Node.js', 'Express', 'PHP', 'REST APIs'] },
  { title: bilingual('Frontend', 'Frontend'), code: '02', tools: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'] },
  { title: bilingual('Bases de datos & ORM', 'Databases & ORM'), code: '03', tools: ['SQL Server', 'PostgreSQL', 'MySQL', 'SQLite', 'Entity Framework Core'] },
  { title: bilingual('Herramientas & DevOps', 'Tools & DevOps'), code: '04', tools: ['Git', 'GitHub', 'Docker', 'Visual Studio', 'VS Code'] },
  { title: bilingual('Mobile & videojuegos', 'Mobile & game development'), code: '05', tools: ['Android', 'Kotlin', 'Java', 'Unity'] },
  { title: bilingual('TI & infraestructura', 'IT & infrastructure'), code: '06', tools: ['Windows', 'Microsoft 365', 'SharePoint', 'OneDrive', 'Fortinet', 'Cisco', 'Networking'] },
];

export const courses = [
  { title: 'Construyendo Web APIs RESTful con ASP.NET Core 9', author: 'Felipe Gavilán', year: '2026', hours: '27 h', credential: 'https://ude.my/UC-ccd74100-51fa-4363-b3c8-0983676cc2dd' as string | null },
  { title: 'JavaScript Moderno — Guía Definitiva, Construye +20 Proyectos', author: 'Juan Pablo De la Torre', year: '2026', hours: '52.5 h', credential: 'https://ude.my/UC-bf5d931f-6c6b-400a-b493-49a17b508a77' as string | null },
  { title: 'Universidad Desarrollo Web — FrontEnd Web Developer', author: 'Global Mentoring · Ubaldo Acosta', year: '2022', hours: '30.5 h', credential: 'https://ude.my/UC-999da4da-784a-45fc-b70e-0a19cf660f13' as string | null },
];
