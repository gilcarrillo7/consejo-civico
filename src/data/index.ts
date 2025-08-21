import {
  HomepageData,
  TeamData,
  AlliancesData,
  AboutData,
  MissionVisionData,
  ProgramsData,
  OrganigramData,
  AxesData,
  CentroData,
  ReportStatsData,
} from "../types";

export const homepageFallback: HomepageData = {
  hero: {
    title:
      "Promovemos la vinculación y participación ciudadana para construir una mejor sociedad.",
    highlight: "participación ciudadana",
    buttonText: "Conoce más",
    buttonLink: "/quienes_somos",
  },
  axes: {
    title: "Conoce nuestros ejes de trabajo",
    axes: [
      { title: "Seguridad", icon: "icon-seguridad.svg" },
      { title: "Justicia", icon: "icon-justicia.svg" },
      { title: "Transparencia", icon: "icon-transparencia.svg" },
      { title: "Ciudadanía", icon: "icon-ciudadania.svg" },
    ],
  },
};
export const civicFallback = {
  sections: [
    {
      title: "Nuestra ciudad es resultado de la corresponsabilidad.",
      subtitle: "Centro de Integración Ciudadana Saltillo",
      description:
        "CIC es una plataforma que enlaza a la ciudadanía con las autoridades para mejorar su entorno y sus comunidades a través de la canalización de tus reportes ciudadanos.",
      buttonText: "Leer más",
      buttonLink: "/centro_integracion_ciudadana",
    },
    {
      title: "Saltillo, ¿Cómo vamos?",
      description:
        "Contribuimos al fortalecimiento de la democracia evaluando los resultados del gobierno municipal, fomentando la participación ciudadana, aportando datos y espacios de rendición de cuentas.",
    },
  ],
  image: "civico.gif",
};

export const teamFallback: TeamData = {
  title: "Nuestro equipo",
  quote:
    "La sociedad organizada tiene el poder de cambiar lo que sea que se proponga.",
  description:
    "Nuestro equipo impulsa los cambios que la ciudadanía de Saltillo necesita. Para representarte, necesitamos que tú y tu entorno social participen en nuestros programas.",
  note: "¡La ciudad y tu comunidad se verán beneficiadas por tu acción!",
  members: [
    {
      name: "Sara Martha Arizpe Ramos",
      role: "Directora Ejecutiva",
    },
    {
      name: "Edgar Alejandro Calvillo Cepeda",
      role: "Coordinador Administrativo",
    },
    {
      name: "Felipe de Jesús López Delgado",
      role: "Coordinador de Innovación",
    },
    {
      name: "Ana Izel Fraire González",
      role: "Coordinadora de Comunicación",
    },
  ],
  buttonText: "Contacto",
  buttonLink: "/contacto",
  image: "equipo.png",
};

export const alliancesFallback: AlliancesData = {
  title: "Alianzas",
  logos: Array.from({ length: 35 }, (_, i) => `alianza${i + 1}.png`),
};

export const aboutFallback: AboutData = {
  text: "Somos una asociación civil sin fines de lucro conformada por instituciones, cámaras empresariales, academia y organizaciones de la sociedad civil. Juntos, sumamos esfuerzos para construir una mejor sociedad apoyando las causas de nuestros miembros, y a su vez, representando a la ciudadanía ante las autoridades y las instituciones prestadoras de servicios ciudadanos.",
  showShape: true,
  shapeColor: "#312783",
};
export const missionVisionFallback: MissionVisionData = {
  missionTitle: "Misión:",
  mission:
    "Contribuir a la consolidación de un mejor país y sus instituciones a través de la participación ciudadana para la incidencia en políticas públicas.",
  visionTitle: "Visión:",
  vision:
    "Ser una organización de representación y activación ciudadana, líder en el desarrollo de iniciativas estratégicas e innovadoras para la incidencia en políticas públicas en materia de Seguridad, Justicia, Ciudadanía, Transparencia y Rendición de Cuentas, en el Estado de Coahuila y en México.",
};
// data.ts
export const programsFallback: ProgramsData = {
  sectionTitle: "Nuestros programas",
  items: [
    {
      title: "Centro de Integración Ciudadana Saltillo",
      description:
        "Un puente entre ciudadanía y gobierno, entre reportes ciudadanos y soluciones.",
      buttonText: "Leer más",
      buttonLink: "/centro_integracion_ciudadana",
    },
    {
      title: "Saltillo, ¿Cómo vamos?",
      description:
        "Aportamos datos para mejorar la toma de decisiones públicas.",
    },
  ],
};
// data.ts
export const organigramFallback: OrganigramData = {
  title: "Organigrama institucional",
  image: {
    src: "/organigrama.jpg",
    alt: "Organigrama institucional",
  },
  subtitle:
    "¡Escríbenos y sumemos esfuerzos para construir una mejor sociedad!",
  cta: {
    text: "Contacto",
    link: "/contacto",
    variant: "primary",
  },
};
// data.ts
export const axesCentroFallback: AxesData = {
  title: "¿Cómo funciona?",
  theme: "secondary",
  axes: [
    { title: "Detecta el problema.", icon: "/images/icon-saltillo1.svg" },
    {
      title:
        'Comparte la ubicación, envía una foto y cuenta de qué se trata a través de nuestro <a href="https://wa.me/5218445060242" target="_blank" rel="noopener noreferrer" class="font-bold underline">WhatsApp</a>.',
      icon: "/images/icon-saltillo2.svg",
    },
    {
      title:
        "Nuestro equipo canalizará tu reporte con las autoridades responsables.",
      icon: "/images/icon-saltillo4.svg",
    },
    {
      title: "Las autoridades se harán cargo y brindarán la solución.",
      icon: "/images/icon-saltillo3.svg",
    },
  ],
};
// data.ts
export const centroFallback: CentroData = {
  title: "Centro de Integración Ciudadana Saltillo",
  videoUrl: "https://vimeo.com/1103510859",
  paragraphs: [
    "A través de un reporte ciudadano, en conjunto contigo, le solicitamos a nuestras autoridades atender cuestiones públicas pendientes en Saltillo.",
    "Desde 2012, la ciudadanía participa en nuestro programa reportando baches, luminarias dañadas, semáforos descompuestos, residuos acumulados, entre otros, y nosotros los canalizamos. Si bien la respuesta de las autoridades toma tiempo dependiendo de la temática, mientras más personas observemos y reportemos, más visibilidad tendremos.",
    "Contribuir al bienestar de tu comunidad nunca fue tan fácil y rápido.",
  ],
  highlightIndices: [2],
};
export const reportStatsFallback: ReportStatsData = {
  period: "2022 a 2024",
  totalReports: 2700,
  intro: "De 2022 a 2024, hemos logrado canalizar exitosamente más de",
  repairedTitle: "Gracias a nuestra intervención se han reparado:",
  breakdown: [
    { label: "luminarias", value: 1381 },
    { label: "semáforos descompuestos", value: 576 },
    { label: "baches", value: 352 },
    { label: "fugas de agua", value: 331 },
    { label: "autos abandonados", value: 74, prefix: "Mover " },
    { label: "alcantarillas", value: 49, prefix: "Tapar " },
  ],
  ctaLine:
    "Sé parte de la solución y comienza a enviar tus reportes. ¡Es muy fácil!",
  whatsappText: "Lo puedes hacer a través de nuestro",
  whatsappLink: "https://wa.me/5218445060242",
};
