export interface Medium {
  url: string;
  type: string;
}

export interface Checklist {
  text: string;
}

export interface Seo {
  [key: string]: string;
}

export interface CtaText {
  en: string;
  bn: string;
}

export interface Section {
  type: string;
  title?: string;
  description?: string;
  items?: string[];
  instructors?: Instructor[];
}

export interface Instructor {
  name: string;
  designation?: string;
  image?: string;
}

export interface Data {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Medium[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
}
