export type ProjectCategory = 'home' | 'business'
export type MeasureUnit = 'm' | 'tp'

export interface Project {
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