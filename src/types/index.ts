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
