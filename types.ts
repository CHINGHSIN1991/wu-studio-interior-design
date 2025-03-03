export type ProjectCategory = 'home' | 'business'
export type MeasureUnit = 'm' | 'tp'
export interface Img {
  src: string;
  alt: string;
}

export interface ProjectFrontmatter {
  layout: string;
  title: string;
  date: string;
  designer: string;
  cover: string;
  images: string[];
  description: string;
  draft: boolean;
  category: string;
}

export interface Project {
  frontmatter: ProjectFrontmatter;
  url: string;
  content?: string;
}

export interface Temp {
  title: string,
  category: ProjectCategory,
  description: string,
  location: string,
  aria: {
    value: number,
    unit: MeasureUnit,
  },
  completionDate: Date,
  designer: string[],
  photography: string[],
}

export interface CarouselData {
  title: string,
  description: string,
  url: string,
  link?: string,
  order: number,
  active: boolean,
  draft: boolean
}

export interface CarouselItem {
  id: string,
  collection: string,
  data: CarouselData,
  body?: string,
  filePath?: string,
  rendered?: unknown
}