type HeroData = {
  title: string;
  highlight: string;
  buttonText: string;
  buttonLink: string;
};

type Axis = {
  title: string;
  axes: Axes[];
};

type Axes = {
  title: string;
  icon: string;
};

export type HomepageData = {
  hero: HeroData;
  axes: Axis;
};

export type CivicData = {
  sections: {
    title: string;
    subtitle?: string;
    description: string;
    buttonText?: string;
    buttonLink?: string;
  }[];
  image: string;
};
export type TeamMember = {
  name: string;
  role: string;
};

export type TeamData = {
  title: string;
  quote: string;
  description: string;
  note: string;
  members: TeamMember[];
  buttonText: string;
  buttonLink: string;
  image: string;
};
export type AlliancesData = {
  title: string;
  logos: string[];
};
export type AboutData = {
  text: string;
  showShape?: boolean;
  shapeColor?: string;
};
export type MissionVisionData = {
  missionTitle?: string;
  mission: string;
  visionTitle?: string;
  vision: string;
};
export type ProgramItem = {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
};
export type ProgramsData = {
  sectionTitle?: string;
  items: ProgramItem[];
};
export type OrganigramData = {
  title?: string;
  image: {
    src: string;
    alt?: string;
  };
  cta?: {
    text: string;
    link: string; // ruta interna o URL absoluta
    variant?: "primary" | "secondary" | "outline-primary" | "outline-secondary";
  };
  subtitle?: string; // mensaje debajo de la imagen (opcional)
};
// types.ts
export type AxisItem = {
  title: string; // admite HTML (ej. <a ...>WhatsApp</a>)
  icon: string; // ruta a SVG/PNG, absoluta o relativa (ej. "/images/icon-saltillo1.svg")
};

export type AxesData = {
  title: string;
  theme?: "primary" | "secondary";
  axes: AxisItem[];
};
export type CentroData = {
  title: string;
  videoUrl: string; // Vimeo o YouTube; ReactPlayer lo maneja
  paragraphs: string[]; // párrafos del texto
  highlightIndices?: number[]; // índices de paragraphs que se renderizan en negritas y color secundario
};
export type ReportBreakdownItem = {
  label: string; // ej. "luminarias"
  value: number; // ej. 1381
  prefix?: string; // ej. "Mover " para "Mover 74 autos abandonados"
};
export type ReportStatsData = {
  period: string; // ej. "2022 a 2024"
  totalReports: number; // ej. 2700
  intro?: string; // texto antes del total (opcional)
  repairedTitle?: string; // "Gracias a nuestra intervención se han reparado:"
  breakdown: ReportBreakdownItem[];
  ctaLine?: string; // línea motivacional
  whatsappText?: string; // texto previo al link
  whatsappLink: string; // URL wa.me
};
