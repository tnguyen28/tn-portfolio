export interface ExperienceData {
  title: string;
  companyName: string;
  dateRange: string;
  description: string[];
  tech: TechItem[];
  location: string;
}

export interface TechItem {
  name: string;
  icon?: any;
}
