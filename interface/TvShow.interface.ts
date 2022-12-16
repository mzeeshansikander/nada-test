export interface IImage {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
}

export interface IMedia {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: any[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended?: any;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel?: any;
  dvdCountry?: any;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}

export interface Schedule {
  time: string;
  days: string[];
}

export interface Rating {
  average?: any;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite?: any;
}

export interface Externals {
  tvrage?: any;
  thetvdb: number;
  imdb?: any;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Self {
  href: string;
}

export interface Previousepisode {
  href: string;
}

export interface Nextepisode {
  href: string;
}

export interface Links {
  self: Self;
  previousepisode: Previousepisode;
  nextepisode: Nextepisode;
}
