import {
  CountryInfo,
  ServiceItem,
  TrustPoint,
  SimpleStep,
  StudentStory,
} from '../types';

export const COMPANY_CONFIG = {
  name: 'Instant Visa Sonipat',
  legalName: 'Instant Visa Overseas Education & Immigration Consultancy Pvt. Ltd.',
  tagline: 'Your Journey Abroad Starts With the Right Guidance.',
  subTagline: 'Expert overseas education & student visa counseling in Sonipat for top global universities.',
  
  // Direct Action contact details
  phone: '+91 98120 44555',
  phoneRaw: '+919812044555',
  email: 'admissions@instantvisasonipat.com',
  
  // WhatsApp config
  whatsappNumber: '+919812044555',
  whatsappDisplay: '+91 98120 44555',
  whatsappPrefillText: 'Hello Instant Visa Sonipat! I want to get a free counseling session for studying abroad.',
  
  // Sonipat physical office
  locationCity: 'Model Town, Sonipat',
  officeAddress: 'SCO 42, 1st Floor, Near Subhash Chowk, Model Town Road, Sonipat, Haryana 131001',
  landmarkNote: 'Near Subhash Chowk, 5 mins from Sonipat Railway Station',
  workingHours: 'Mon – Sat: 9:30 AM – 6:30 PM',
  
  // High-res visual assets
  heroImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
  counselorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  campusImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',

  // Mandatory Regulatory Disclaimer
  disclaimer:
    'Regulatory Notice: Visa approvals and university admission offers are decided solely by the respective foreign government embassies and university boards. Instant Visa Sonipat provides genuine guidance and does not guarantee visa outcomes.',
};

export const COUNTRIES_DATA: CountryInfo[] = [
  {
    id: 'usa',
    name: 'USA',
    flagCode: '🇺🇸',
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800&q=80',
    oneLiner: 'Up to 3-year STEM OPT work permit & world-leading research universities.',
    stayBack: 'Up to 3 Years (STEM)',
    tuition: '$22k – $45k / yr',
    intake: 'Fall (Aug) & Spring (Jan)',
    visaType: 'F-1 Student Visa',
    topCourses: ['Computer Science', 'Data Analytics', 'MBA', 'Robotics'],
  },
  {
    id: 'uk',
    name: 'UK',
    flagCode: '🇬🇧',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    oneLiner: '1-year fast-track Masters and 2-year Graduate Route post-study work visa.',
    stayBack: '2 Years (3 for PhD)',
    tuition: '£13k – £25k / yr',
    intake: 'Sep/Oct & Jan/Feb',
    visaType: 'Student Visa (Tier 4)',
    topCourses: ['Business Analytics', 'Finance', 'Law', 'AI & Computing'],
  },
  {
    id: 'canada',
    name: 'Canada',
    flagCode: '🇨🇦',
    image: 'https://images.unsplash.com/photo-1517935703635-27190760921d?auto=format&fit=crop&w=800&q=80',
    oneLiner: 'Post-Graduation Work Permit (PGWP) up to 3 years and clear career pathways.',
    stayBack: 'Up to 3 Years (PGWP)',
    tuition: 'CAD $16k – $32k / yr',
    intake: 'Sep (Fall) & Jan (Winter)',
    visaType: 'Study Permit (SDS / Non-SDS)',
    topCourses: ['Information Technology', 'Supply Chain', 'Engineering', 'Healthcare'],
  },
  {
    id: 'australia',
    name: 'Australia',
    flagCode: '🇦🇺',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
    oneLiner: 'High quality of life, Group of Eight universities, and 2–4 years stay-back.',
    stayBack: '2 to 4 Years',
    tuition: 'AUD $24k – $42k / yr',
    intake: 'Feb/Mar & Jul/Aug',
    visaType: 'Subclass 500 Student Visa',
    topCourses: ['Information Systems', 'Cybersecurity', 'Nursing', 'Accounting'],
  },
  {
    id: 'germany',
    name: 'Germany',
    flagCode: '🇩🇪',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80',
    oneLiner: 'Tuition-free public universities and an 18-month European job seeker permit.',
    stayBack: '18 Months Stay-Back',
    tuition: '€0 to €3,000 / yr (Public)',
    intake: 'Winter (Sep) & Summer (Mar)',
    visaType: 'German National Visa',
    topCourses: ['Automotive & Mechanical', 'Data Science', 'Renewable Energy'],
  },
  {
    id: 'newzealand',
    name: 'New Zealand',
    flagCode: '🇳🇿',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    oneLiner: 'High-demand Green List occupations and up to 3 years post-study stay-back.',
    stayBack: 'Up to 3 Years',
    tuition: 'NZD $24k – $35k / yr',
    intake: 'Feb & Jul',
    visaType: 'Fee Paying Student Visa',
    topCourses: ['Civil Engineering', 'Agri-Tech', 'Hospitality', 'IT'],
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'admissions',
    title: 'University Admissions',
    icon: 'GraduationCap',
    description: 'Direct institutional shortlisting matched with your academic scores, budget, and career goals.',
  },
  {
    id: 'visa',
    title: 'Visa Guidance',
    icon: 'ShieldCheck',
    description: 'Complete visa file preparation, DS-160/CAS verification, and embassy mock interview drills.',
  },
  {
    id: 'courses',
    title: 'Course Selection',
    icon: 'Compass',
    description: 'STEM-eligible, high-demand courses with strong post-study employment prospects.',
  },
  {
    id: 'documents',
    title: 'Documentation',
    icon: 'FileText',
    description: 'Professional guidance on SOPs, Letters of Recommendation, and financial solvency affidavits.',
  },
  {
    id: 'application',
    title: 'Application Support',
    icon: 'CheckCircle2',
    description: 'Fast-track application filing with fee waiver assistance and continuous tracking.',
  },
];

export const TRUST_POINTS: TrustPoint[] = [
  {
    id: '1',
    title: '100% Genuine File Policy',
    description: 'Strict zero-fake-document protocol ensuring your visa record remains clean for life.',
    icon: 'Shield',
  },
  {
    id: '2',
    title: 'Local Sonipat Office',
    description: 'Walk in directly on Model Town Road to meet senior advisors with your family.',
    icon: 'MapPin',
  },
  {
    id: '3',
    title: 'Direct University Processing',
    description: 'Direct applications to top accredited universities with zero hidden agent markups.',
    icon: 'Building',
  },
  {
    id: '4',
    title: 'Embassy Mock Drills',
    description: 'Intensive 1-on-1 interview practice so you face visa officers with complete confidence.',
    icon: 'Users',
  },
];

export const SIMPLE_PROCESS: SimpleStep[] = [
  {
    step: 1,
    label: 'Choose',
    title: 'Profile & Course Mapping',
    desc: 'Pick your dream country and university aligned with your career goals.',
    icon: 'Compass',
  },
  {
    step: 2,
    label: 'Apply',
    title: 'Direct Admission Filing',
    desc: 'Submit polished SOPs, transcripts, and secure your official offer letter.',
    icon: 'Send',
  },
  {
    step: 3,
    label: 'Prepare',
    title: 'Visa & Financial File',
    desc: 'Structured funds check, GIC/blocked accounts, and embassy interview drills.',
    icon: 'FileCheck',
  },
  {
    step: 4,
    label: 'Go',
    title: 'Fly to Your Campus',
    desc: 'Pre-departure briefing, packing checklist, and foreign currency guidance.',
    icon: 'Plane',
  },
];

export const STUDENT_STORIES: StudentStory[] = [
  {
    id: 's1',
    name: 'Aman D.',
    country: 'USA',
    flag: '🇺🇸',
    universityOrStatus: 'Admitted • MS in Computer Science (Fall 2025)',
    quote: 'The F-1 mock interviews in Sonipat made all the difference. Zero stress on visa day!',
    intake: 'Fall 2025 Intake',
    city: 'Sonipat',
  },
  {
    id: 's2',
    name: 'Pooja M.',
    country: 'UK',
    flag: '🇬🇧',
    universityOrStatus: 'Admitted • MSc International Business (Sep 2025)',
    quote: 'Transparent fees and genuine university shortlisting. Got my offer letter within 12 days.',
    intake: 'September 2025 Intake',
    city: 'Panipat',
  },
  {
    id: 's3',
    name: 'Sahil K.',
    country: 'Germany',
    flag: '🇩🇪',
    universityOrStatus: 'APS Verification & Public University Track',
    quote: 'They handled my German APS certificate and blocked account seamlessly right here in Sonipat.',
    intake: 'Winter 2025 Intake',
    city: 'Sonipat',
  },
];
