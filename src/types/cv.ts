export interface CV {
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

export interface Basics {
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
<<<<<<< HEAD
  startDate: string;
  endDate: string | null;
  summary: string;
  url?: string;
=======
  startDate: DateStr;
  endDate: DateStr | null;
  summary: string;
  highlights: Highlight[];
  url?: undefined;
>>>>>>> 40e6ebf70c6bedc83c245672043cb40dab10480c
}

type DateStr = `${string}-${string}-${string}`;

export interface Volunteer {
  organization: string;
  position: string;
  url: string;
  startDate: DateStr;
  endDate: DateStr;
  summary: string;
  highlights: Highlight[];
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
  releaseDate: DateStr;
  url: string;
  summary: string;
}

export interface Education {
  institution: string;
  college: string;
  url: string;
  area: string;
  studyType: string;
  startDate: DateStr;
  endDate: DateStr;
  score: string;
  courses: Array<string>;
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
  highlights: Highlight[];
  url: string;
  github: string;
}

export interface Interests {
  name: string;
  keywords: Array<string>;
}

export interface References {
  name: string;
  reference: string;
}

type Highlight = Array<String>;
