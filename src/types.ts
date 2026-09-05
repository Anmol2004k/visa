export type PageId = 'home' | 'about' | 'work' | 'contact';

export interface CountryInfo {
  id: string;
  name: string;
  flagCode: string;
  image: string;
  oneLiner: string;
  stayBack: string;
  tuition: string;
  intake: string;
  visaType: string;
  topCourses: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface TrustPoint {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SimpleStep {
  step: number;
  label: 'Choose' | 'Apply' | 'Prepare' | 'Go';
  title: string;
  desc: string;
  icon: string;
}

export interface StudentStory {
  id: string;
  name: string;
  country: string;
  flag: string;
  universityOrStatus: string;
  quote: string;
  intake: string;
  city: string;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  country: string;
  message: string;
}
