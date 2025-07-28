

export interface ChecklistType {
  text: string;
}


export interface Seo {
  [key: string]: string;
}

export interface CtaText {
  en: string;
  bn: string;
}

export type Checklist = ChecklistType;


export interface AboutBlock {
  id?: string;
  title?: string;
  description?: string;
  [key: string]: any;
}

export interface SectionBlock {
  type: string;
  name?: string;
  description?: string;
  order_idx?: number;
  values?: AboutBlock[];  // <-- This is important!
  [key: string]: any;
}

export type Medium = {
  id?: string | number;
  resource_type: "video" | "image";
  resource_value: string;
  thumbnail_url?: string;
};


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
