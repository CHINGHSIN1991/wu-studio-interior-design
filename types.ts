export type ProjectCategory = 'home' | 'business'
export type MeasureUnit = 'm' | 'tp'

export interface ProjectData {
  title: string;
  date: string;
  designers: string[];
  photographers?: string[];
  location: string;
  category: string;
  completionDate: string;
  cover: string;
  images: string[];
  description: string;
  draft: boolean;
}

export interface Project {
  id: string;
  data: ProjectData;
  filePath: string;
  digest: string;
  collection: string;
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