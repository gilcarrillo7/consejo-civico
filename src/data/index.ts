import { HomepageData, TeamData, AlliancesData } from "../types";

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
