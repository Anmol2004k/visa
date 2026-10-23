import { COMPANY_CONFIG, COUNTRIES_DATA } from '../data/config';
import { PageId } from '../types';

export interface SeoMetadata {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  jsonLd: Record<string, unknown>[];
}

export function getDynamicSeoData(
  activePage: PageId,
  selectedCountryId?: string
): SeoMetadata {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://jsrworldvisas.com';
  const currentPath = activePage === 'home' ? '' : `/${activePage}`;
  const canonicalUrl = `${origin}${currentPath}`;
  
  const currentCountry = selectedCountryId 
    ? COUNTRIES_DATA.find((c) => c.id.toLowerCase() === selectedCountryId.toLowerCase()) 
    : undefined;

  // 1. Primary EducationalConsultant / LocalBusiness Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['EducationalConsultant', 'LocalBusiness', 'ProfessionalService'],
    '@id': `${origin}/#organization`,
    name: 'JSR World Visas',
    alternateName: [
      'Overseas Education Consultant in Sonipat',
      'JSR World Visas Sonipat',
      'JSR World Visas Melbourne',
      'Study Abroad Consultant Sonipat',
      'International Visa Application Consultancy'
    ],
    legalName: COMPANY_CONFIG.legalName,
    url: origin,
    logo: `${origin}/favicon.ico`,
    image: [
      COMPANY_CONFIG.heroImage,
      COMPANY_CONFIG.counselorImage,
      COMPANY_CONFIG.campusImage
    ],
    description:
      'JSR World Visas provides worldwide visa application support. Head office in Melbourne, Victoria, Australia and branch office in Kundli, District Sonipat, Haryana, India. Coordinated by our Australia-based specialist team.',
    telephone: COMPANY_CONFIG.phone,
    email: COMPANY_CONFIG.email,
    priceRange: '₹₹',
    currenciesAccepted: 'INR, AUD, USD',
    paymentAccepted: 'Bank Transfer, Net Banking, UPI, Credit Card',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '60 Corrigan Avenue, Brooklyn',
      addressLocality: 'Melbourne',
      addressRegion: 'Victoria',
      postalCode: '3012',
      addressCountry: 'AU'
    },
    subOrganization: {
      '@type': 'LocalBusiness',
      name: 'JSR World Visas - India Branch Office',
      telephone: '+91 98107 55659',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Shop 1, c/o Mukhija Associates, Rodeo Drive',
        addressLocality: 'Kundli, Sonipat',
        addressRegion: 'Haryana',
        postalCode: '131029',
        addressCountry: 'IN'
      }
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.8741,
      longitude: 77.1264
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '09:30',
        closes: '18:30'
      }
    ],
    areaServed: [
      { '@type': 'City', name: 'Sonipat' },
      { '@type': 'AdministrativeArea', name: 'Model Town Sonipat' },
      { '@type': 'AdministrativeArea', name: 'Murthal' },
      { '@type': 'AdministrativeArea', name: 'Kundli' },
      { '@type': 'AdministrativeArea', name: 'Rai' },
      { '@type': 'AdministrativeArea', name: 'Ganaur' },
      { '@type': 'AdministrativeArea', name: 'Samalkha' },
      { '@type': 'City', name: 'Panipat' },
      { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
      { '@type': 'State', name: 'Haryana' }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Overseas Education & Student Visa Consultancy Services in Sonipat',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Study Abroad Profile Assessment in Sonipat',
            serviceType: 'Overseas Education Counseling',
            description:
              'Free personalized evaluation of academic records, backlogs, budget, and post-study career goals by senior Sonipat counselors.',
            provider: { '@id': `${origin}/#organization` },
            areaServed: 'Sonipat, Haryana'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Student Visa Documentation & Embassy Filing',
            serviceType: 'Visa Assistance',
            description:
              'Comprehensive guidance on financial proof, visa SOP writing, CA/CE evaluation, and complete embassy file submission for USA, UK, Canada, Australia, and Germany.',
            provider: { '@id': `${origin}/#organization` },
            areaServed: 'Sonipat, Haryana'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Foreign University Admissions & Scholarship Assistance',
            serviceType: 'University Admissions',
            description:
              'Direct admissions into QS World Ranked universities with application fee waivers and high-value international student scholarships.',
            provider: { '@id': `${origin}/#organization` },
            areaServed: 'Sonipat, Haryana'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Embassy Mock Interview Preparation in Sonipat',
            serviceType: 'Interview Preparation',
            description:
              'Rigorous one-on-one mock interview drills for US F-1 visa, UK credibility interviews, and German APS verification.',
            provider: { '@id': `${origin}/#organization` },
            areaServed: 'Sonipat, Haryana'
          }
        }
      ]
    },
    sameAs: [
      `https://wa.me/${COMPANY_CONFIG.whatsappNumber}`,
      'https://www.instagram.com/jsrworldvisas',
      'https://www.facebook.com/jsrworldvisas'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_CONFIG.phone,
      contactType: 'customer service',
      areaServed: ['IN', 'AU'],
      availableLanguage: ['English', 'Hindi']
    }
  };

  // 2. Dynamic BreadcrumbList Schema
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: origin
    }
  ];

  if (activePage === 'about') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'About Overseas Education Consultant in Sonipat',
      item: `${origin}/about`
    });
  } else if (activePage === 'work') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Services Offered - Worldwide Visa Services',
      item: `${origin}/work`
    });
    if (currentCountry) {
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 3,
        name: `Visa Services for ${currentCountry.name}`,
        item: `${origin}/work?country=${currentCountry.id}`
      });
    }
  } else if (activePage === 'contact') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Contact JSR World Visas - Head Office Melbourne & Kundli Branch',
      item: `${origin}/contact`
    });
  } else if (activePage === 'privacy') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Privacy Policy | JSR World Visas',
      item: `${origin}/privacy`
    });
  } else if (activePage === 'terms') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Terms & Conditions | JSR World Visas',
      item: `${origin}/terms`
    });
  } else if (activePage === 'cookies') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Cookie Policy | JSR World Visas',
      item: `${origin}/cookies`
    });
  } else if (activePage === 'disclaimer') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Visa Disclaimer & Regulatory Notice | JSR World Visas',
      item: `${origin}/disclaimer`
    });
  } else if (activePage === 'security') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Security & Data Protection | JSR World Visas',
      item: `${origin}/security`
    });
  } else if (activePage === 'sitemap') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Website Sitemap | JSR World Visas',
      item: `${origin}/sitemap`
    });
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems
  };

  // 3. Dynamic Service or WebPage Schema
  let pageServiceSchema: Record<string, unknown>;

  if (activePage === 'work' && currentCountry) {
    pageServiceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${origin}/work#${currentCountry.id}`,
      name: `Study in ${currentCountry.name} Consultant in Sonipat`,
      serviceType: 'Overseas Student Visa & Admission Counseling',
      category: 'International Higher Education',
      description: `Expert consultancy in Sonipat for studying in ${currentCountry.name}. Comprehensive admission assistance, ${currentCountry.visaType} filing, stay-back guidance (${currentCountry.stayBack}), and tuition planning (${currentCountry.tuition}).`,
      provider: {
        '@id': `${origin}/#organization`
      },
      areaServed: {
        '@type': 'City',
        name: 'Sonipat',
        containedIn: 'Haryana, India'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${currentCountry.name} Admission & Visa Services in Sonipat`,
        itemListElement: currentCountry.topCourses.map((course, idx) => ({
          '@type': 'Offer',
          position: idx + 1,
          itemOffered: {
            '@type': 'Course',
            name: `${course} in ${currentCountry.name}`,
            description: `Admissions guidance for ${course} degree programs in top ${currentCountry.name} universities.`
          }
        }))
      }
    };
  } else if (activePage === 'contact') {
    pageServiceSchema = {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      '@id': `${origin}/contact#webpage`,
      name: "Contact JSR World Visas | Let's Start Your Journey",
      description:
        'Get in touch with JSR World Visas for worldwide visa application support. Head office in Melbourne, Victoria, Australia and branch office in Kundli, District Sonipat, Haryana, India. Australia Phone: +61 4300 53716, India Phone: +91 98107 55659.',
      mainEntity: {
        '@id': `${origin}/#organization`
      }
    };
  } else if (activePage === 'about') {
    pageServiceSchema = {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      '@id': `${origin}/about#webpage`,
      name: 'About JSR World Visas | Your Journey. Our Guidance.',
      description:
        'JSR World Visas provides worldwide visa application support with head office in Kundli, District Sonipat, Haryana and branch in Melbourne, Australia. Coordinated by our Australia-based specialist team.',
      mainEntity: {
        '@id': `${origin}/#organization`
      }
    };
  } else {
    // Home Page WebSite Schema
    pageServiceSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${origin}/#website`,
      name: 'Instant Visa Sonipat - Overseas Education Consultant in Sonipat',
      alternateName: 'Instant Visa Consultancy Sonipat',
      url: origin,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${origin}/work?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };
  }

  // 4. FAQPage Schema for Sonipat Overseas Education queries (boosts rich Google snippets)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is the best overseas education consultant in Sonipat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Instant Visa Sonipat (located in Model Town, near Subhash Chowk) is recognized as one of the premier overseas education consultants in Sonipat, Haryana. They specialize in university shortlisting, documentation, scholarship guidance, and student visa filing for the USA, UK, Canada, Australia, Germany, and New Zealand with transparent, honest advice.'
        }
      },
      {
        '@type': 'Question',
        name: 'Where is Instant Visa located in Sonipat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Instant Visa Sonipat is situated at SCO 42, 1st Floor, Near Subhash Chowk, Model Town Road, Sonipat, Haryana 131001. It is just 5 minutes from the Sonipat Railway Station.'
        }
      },
      {
        '@type': 'Question',
        name: 'Which countries can I apply to through Instant Visa Sonipat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Students can apply for bachelor’s and master’s degree programs in the USA (F-1 visa), United Kingdom (Student Route), Canada (Study Permit), Australia (Subclass 500), Germany (APS & Student Visa), and New Zealand.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does Instant Visa Sonipat charge for initial profile assessment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, initial counseling and profile evaluation at Instant Visa Sonipat are completely free. You can walk into the Model Town office or book a free WhatsApp counseling session at +91 98107 55659.'
        }
      },
      {
        '@type': 'Question',
        name: 'What services are provided for student visa applicants in Sonipat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Services include profile mapping, university selection, SOP and LOR proofreading, scholarship applications, student visa file compilation, mock embassy interviews, and pre-departure briefings.'
        }
      }
    ]
  };

  // Build page-specific meta title and description with JSR WORLD VISAS branding
  let title = 'JSR World Visas | Worldwide Visa & Overseas Education Consultancy';
  let description =
    'JSR World Visas: Your Journey. Our Guidance. Head office in Melbourne, Australia and branch in Kundli, Sonipat, Haryana. Comprehensive application support across 11 key visa categories.';
  let keywords =
    'JSR World Visas, Worldwide Visa Services, Overseas Education Consultant, Melbourne Australia, Kundli Sonipat, Student Visa, Work Visa, Partner Visa, Skilled Migration';

  if (activePage === 'about') {
    title = 'About Us | JSR World Visas - Worldwide Visa Application Support';
    description =
      'Discover JSR World Visas: Your partner for worldwide visa application support. Head office in Kundli, District Sonipat, Haryana & branch in Melbourne, Australia. Coordinated by Australia-based specialist team.';
    keywords = 'About JSR World Visas, Melbourne Visa Team, Kundli Sonipat Branch Office, Visa Consultancy Credentials';
  } else if (activePage === 'work') {
    title = 'Services Offered | JSR World Visas - Worldwide Visa Application Support';
    description =
      'Worldwide visa application support across 11 key service pathways: Tourist & Visitor, Student, Work, Family, Skilled Migration, Business & Talent Visas. Coordinated by Australia-based specialist team.';
    keywords = 'Visa Services, Tourist Visa, Student Visa, Work Visa, Skilled Migration, Partner Visa, Business Visa, 63 Countries We Serve';
  } else if (activePage === 'contact') {
    title = 'Contact JSR World Visas | Melbourne Head Office & Kundli Sonipat Branch';
    description =
      'Contact JSR World Visas: Head office at 60 Corrigan Ave, Brooklyn, Melbourne 3012 (+61 4300 53716) and branch at Shop 1, Rodeo Drive, Kundli 131029 (+91 98107 55659).';
    keywords = 'Contact JSR World Visas, Melbourne Office, Kundli Sonipat Office, WhatsApp Visa Helpline, Consultation Booking';
  } else if (activePage === 'privacy') {
    title = 'Privacy Policy | JSR World Visas - Data Privacy & Client Protection';
    description =
      'Read the JSR World Visas Privacy Policy. Understand how we collect, store, and safeguard personal information across our Melbourne and Kundli counseling centers.';
    keywords = 'JSR World Visas Privacy Policy, Client Data Protection, Confidentiality, Information Handling';
  } else if (activePage === 'terms') {
    title = 'Terms & Conditions | JSR World Visas - Client Engagement Agreement';
    description =
      'Review the terms of service governing JSR World Visas application guidance, regulatory disclosures, and zero fraudulent document policy.';
    keywords = 'JSR World Visas Terms and Conditions, Consultancy Agreement, Visa Disclaimer, Client Terms';
  } else if (activePage === 'cookies') {
    title = 'Cookie Policy | JSR World Visas - Transparency & Browser Storage';
    description =
      'Learn about technical cookies and local storage utilized on jsrworldvisas.com. We do not deploy invasive cross-site advertising trackers.';
    keywords = 'Cookie Policy, Local Storage, Browser Privacy, JSR World Visas Cookies';
  } else if (activePage === 'disclaimer') {
    title = 'Visa Disclaimer & Regulatory Notice | JSR World Visas';
    description =
      'Mandatory regulatory disclosure: JSR World Visas is an independent consultancy. Final visa approval authority rests exclusively with sovereign immigration departments.';
    keywords = 'Visa Disclaimer, Regulatory Disclosure, Immigration Authority Decisions, Independent Visa Consultancy';
  } else if (activePage === 'security') {
    title = 'Security & Data Protection | JSR World Visas';
    description =
      'Explore technical and operational security controls deployed at JSR World Visas to safeguard client identity documents, credentials, and dossiers.';
    keywords = 'Document Security, Data Protection, Anti-Fraud Measures, TLS Encryption, JSR World Visas Safety';
  } else if (activePage === 'sitemap') {
    title = 'Website Sitemap | JSR World Visas - All Pages & Destination Galleries';
    description =
      'Human-readable directory of all public pages, 11 visa service pathways, 63 destination guides, and official regulatory policies on jsrworldvisas.com.';
    keywords = 'JSR World Visas Sitemap, Website Directory, All Pages, HTML Sitemap';
  }

  return {
    title,
    description,
    keywords,
    canonicalUrl,
    jsonLd: [organizationSchema, breadcrumbSchema, pageServiceSchema, faqSchema]
  };
}
