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
  cover: Img;
  images: Img[];
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