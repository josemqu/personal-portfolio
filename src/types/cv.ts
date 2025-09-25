export interface CV {
  titles: Titles;
  basics: Basics;
  work: Array<Work>;
  volunteer: Array<Volunteer>;
  education: Array<Education>;
  awards: Array<Awards>;
  certificates: Certificates;
  publications: Array<Publications>;
  skills: Array<Skills>;
  languages: Array<Languages>;
  interests: Array<Interests>;
  references: Array<References>;
  projects: Array<Projects>;
}

export interface Titles {
  about: string;
  work: string;
  education: string;
  volunteer: string;
  awards: string;
  certificates: string;
  publications: string;
  skills: string;
  languages: string;
  interests: string;
  references: string;
  projects: string;
  now: string;
  viewProject: string;
  viewCode: string;
  viewApp: string;
  inPlayStore: string;
}

export interface Basics {
  language: string;
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string[];
  location: Location;
  profiles: Array<Profiles>;
}

export interface Location {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

export interface Profiles {
  network: string;
  username: string;
  url: string;
}

export interface Work {
  name: string;
  position: string;
  startDate: string;
  endDate?: string | null;
  summary: string | string[];
  url?: string | null;
}

export interface Volunteer {
  organization: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
}

export interface Skills {
  name: string;
  level: string;
  keywords: Array<string>;
}

export interface Awards {
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

export interface Certificates {
  name: string;
  date: string;
  issuer: string;
  url: string;
}

export interface Publications {
  name: string;
  publisher: string;
  releaseDate: string;
  url: string;
  summary: string;
}

export interface Education {
  institution: string;
  college: string;
  url: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  score: string;
}

export interface Languages {
  language: Language;
  fluency: string;
}

type Language =
  | "Spanish"
  | "English"
  | "German"
  | "France"
  | "Italian"
  | "Korean"
  | "Portuguese"
  | "Chinese"
  | "Arabic"
  | "Dutch"
  | "Finnish"
  | "Russian"
  | "Turkish"
  | "Hindi"
  | "Bengali"
  | string;

export interface Projects {
  name: string;
  isActive: boolean;
  description: string;
  highlights: string[];
  url?: string;
  github?: string;
  playStore?: string;
  appStore?: string;
}

export interface Interests {
  name: string;
  keywords: Array<string>;
}

export interface References {
  name: string;
  reference: string;
}
