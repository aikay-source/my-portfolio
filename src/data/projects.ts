export interface Project {
  slug: string;
  name: string;
  title: string;
  summary: string;
  image: string;
  contributions: string[];
  contribution: string;
  year: string;
  tags: string[];
  hasBorder?: boolean;
  imagePosition?: string;
  role: string;
  tools: string[];
  timeline: string;
  filmstrip?: string[];
}

export const projects: Project[] = [
  {
    slug: 'ninenines',
    name: 'Ninenines',
    title: 'Designing a solution for the 71% of travelers who find trip planning so stressful',
    summary: "Ninenines is an AI coding agent product. I designed the dashboard teams use to set it up, monitor what it does, and manage access. The core UX challenge: most of the product's value is invisible until after setup. My job was to make that setup feel like progress toward something, not a gate in front of it.",
    image: '/images/projects/ninenines/ninenines_homepage_cover.png',
    contributions: ['Product Design', 'Web Design'],
    contribution: 'Product Design, Web design',
    year: '2025',
    tags: ['PRODUCT DESIGN', 'WEB DESIGN', 'SAAS'],
    role: 'Product Design',
    tools: ['Figma', 'Pen.dev', 'Claude Code'],
    timeline: '2 Months',
    filmstrip: [
      '/images/projects/ninenines/filmstrip/slide-01.png',
      '/images/projects/ninenines/filmstrip/slide-02.png',
      '/images/projects/ninenines/filmstrip/slide-03.png',
      '/images/projects/ninenines/filmstrip/slide-04.png',
      '/images/projects/ninenines/filmstrip/slide-05.png',
      '/images/projects/ninenines/filmstrip/slide-06.png',
      '/images/projects/ninenines/filmstrip/slide-07.png',
      '/images/projects/ninenines/filmstrip/slide-08.png',
      '/images/projects/ninenines/filmstrip/slide-09.png',
      '/images/projects/ninenines/filmstrip/slide-10.png',
      '/images/projects/ninenines/filmstrip/slide-11.png',
      '/images/projects/ninenines/filmstrip/slide-12.png',
    ],
  },
  {
    slug: 'migor',
    name: 'Migor',
    title: 'Reducing the time it takes for brands to find and match with the right influencers',
    summary: 'Migor helps brands find and match with the right influencers faster, cutting the time spent searching profiles and negotiating deals one by one. I designed the onboarding and matching experience end to end, focused on making discovery feel effortless from the first screen.',
    image: '/images/projects/migor/migor_homepage_cover_1.png',
    contributions: ['Product Design', 'App Design'],
    contribution: 'Product Design, App design',
    year: '2025',
    tags: ['PRODUCT DESIGN', 'APP DESIGN', 'FINANCE'],
    role: 'Product Design',
    tools: ['Figma', 'Notion'],
    timeline: '3 Months',
    filmstrip: [
      '/images/projects/migor/filmstrip/slide-01.png',
      '/images/projects/migor/filmstrip/slide-02.png',
      '/images/projects/migor/filmstrip/slide-03.png',
      '/images/projects/migor/filmstrip/slide-04.png',
      '/images/projects/migor/filmstrip/slide-05.png',
      '/images/projects/migor/filmstrip/slide-06.png',
      '/images/projects/migor/filmstrip/slide-07.png',
      '/images/projects/migor/filmstrip/slide-08.png',
      '/images/projects/migor/filmstrip/slide-09.png',
    ],
  },
  {
    slug: 'holidayalot-mobile',
    name: 'Holidayalot App',
    title: 'Designing a solution for the 71% of travelers who find trip planning so stressful',
    summary: 'Holidayalot Mobile brings the Holidayalot trip-planning experience to a native mobile app, meeting travelers at every step of their planning journey from wherever they are.',
    image: '/images/projects/holidayalot-mobile/holidayalot-mobile_homepage_cover.png',
    contributions: ['Product Design', 'App Design'],
    contribution: 'Product Design, App design',
    year: '2025',
    tags: ['PRODUCT DESIGN', 'APP DESIGN', 'TRAVEL'],
    imagePosition: 'top',
    role: 'Product Design',
    tools: ['Figma', 'Principle'],
    timeline: '2 Months',
    filmstrip: [
      '/images/projects/holidayalot-mobile/filmstrip/slide-01.png',
      '/images/projects/holidayalot-mobile/filmstrip/slide-02.png',
      '/images/projects/holidayalot-mobile/filmstrip/slide-03.png',
      '/images/projects/holidayalot-mobile/filmstrip/slide-04.png',
      '/images/projects/holidayalot-mobile/filmstrip/slide-05.png',
      '/images/projects/holidayalot-mobile/filmstrip/slide-06.png',
    ],
  },
  {
    slug: 'scale-health',
    name: 'Scale Health',
    title: 'Helping a health and wellness brand scale their online store without losing the personal feel',
    summary: 'Scale Health needed an ecommerce experience that could grow with demand while still feeling like a boutique wellness brand, not a generic storefront. I designed the product and web experience end to end, from browsing through checkout, keeping the shopping flow simple as the catalog grew.',
    image: '/images/projects/scale-health/scale-health_homepage_cover.jpg',
    contributions: ['Product Design', 'Web Design'],
    contribution: 'Product Design, Web design',
    year: '2025',
    tags: ['PRODUCT DESIGN', 'WEB DESIGN', 'ECOMMERCE'],
    imagePosition: '50% 30%',
    role: 'Product Design',
    tools: ['Figma'],
    timeline: '6 Weeks',
    filmstrip: [
      '/images/projects/scale-health/filmstrip/slide-01.png',
      '/images/projects/scale-health/filmstrip/slide-02.png',
      '/images/projects/scale-health/filmstrip/slide-03.png',
      '/images/projects/scale-health/filmstrip/slide-04.png',
      '/images/projects/scale-health/filmstrip/slide-05.png',
      '/images/projects/scale-health/filmstrip/slide-06.png',
      '/images/projects/scale-health/filmstrip/slide-07.png',
      '/images/projects/scale-health/filmstrip/slide-08.png',
    ],
  },
  {
    slug: 'virally',
    name: 'Virally',
    title: 'Letting influencers discover and apply to brand campaigns instead of the other way around',
    summary: 'Virally connects brands and influencers for viral marketing campaigns. As the sole designer, I designed the campaign discovery experience around a simple bet: let influencers browse and apply to campaigns, instead of making brands search and pitch influencers one by one.',
    image: '/images/projects/virally/virally_homepage_cover.png',
    contributions: ['Product Design', 'Web Design'],
    contribution: 'Product Design, Web design',
    year: '2025',
    tags: ['PRODUCT DESIGN', 'WEB DESIGN', 'SAAS'],
    imagePosition: 'top',
    role: 'Product Design',
    tools: ['Figma'],
    timeline: '4 Months',
    filmstrip: [
      '/images/projects/virally/filmstrip/slide-01.gif',
      '/images/projects/virally/filmstrip/slide-02.png',
      '/images/projects/virally/filmstrip/slide-03.gif',
      '/images/projects/virally/filmstrip/slide-04.png',
      '/images/projects/virally/filmstrip/slide-05.gif',
      '/images/projects/virally/filmstrip/slide-06.png',
    ],
  },
  {
    slug: 'soigne-living',
    name: 'Soigne Living',
    title: "Designing a website that matches Soigne Living's polished, boutique hospitality brand",
    summary: "Soigne Living's website needed to feel as considered as the stays it sells. I designed the site end to end, translating the brand's boutique hospitality positioning into a clean, image-led browsing experience for prospective guests.",
    image: '/images/projects/soigne-living/soigne-living_homepage_cover.png',
    contributions: ['Website Design'],
    contribution: 'Website design',
    year: '2025',
    tags: ['WEBSITE DESIGN', 'HOSPITALITY'],
    imagePosition: 'top',
    role: 'Website Design',
    tools: ['Figma', 'Webflow'],
    timeline: '3 Weeks',
    filmstrip: [
      '/images/projects/soigne-living/filmstrip/slide-01.png',
      '/images/projects/soigne-living/filmstrip/slide-02.png',
      '/images/projects/soigne-living/filmstrip/slide-03.png',
      '/images/projects/soigne-living/filmstrip/slide-04.png',
      '/images/projects/soigne-living/filmstrip/slide-05.png',
      '/images/projects/soigne-living/filmstrip/slide-06.png',
      '/images/projects/soigne-living/filmstrip/slide-07.png',
      '/images/projects/soigne-living/filmstrip/slide-08.png',
      '/images/projects/soigne-living/filmstrip/slide-09.png',
    ],
  },
  {
    slug: 'wills-bisgrove',
    name: 'Wills Bisgrove',
    title: 'UI design for a store management dashboard',
    summary: 'Wills Bisgrove needed a store management dashboard that made day-to-day ecommerce operations easier to reason about. I designed the interface end to end, focused on giving store owners a clear, structured view of their business.',
    image: '/images/projects/wills-bisgrove/wills-bisgrove_works_cover.png',
    contributions: ['Web Design'],
    contribution: 'Web design',
    year: '2025',
    tags: ['WEB DESIGN', 'ECOMMERCE'],
    role: 'Web Design',
    tools: ['Figma'],
    timeline: '1 Month',
    filmstrip: [
      '/images/projects/wills-bisgrove/filmstrip/slide-01.png',
      '/images/projects/wills-bisgrove/filmstrip/slide-02.png',
      '/images/projects/wills-bisgrove/filmstrip/slide-03.png',
      '/images/projects/wills-bisgrove/filmstrip/slide-04.png',
      '/images/projects/wills-bisgrove/filmstrip/slide-05.png',
      '/images/projects/wills-bisgrove/filmstrip/slide-06.png',
    ],
  },
  {
    slug: 'holidayalot-landing',
    name: 'Holidayalot Landing Page Experience',
    title: "Designing the landing page that turns Holidayalot's trip-planning pitch into signups",
    summary: "Holidayalot needed a marketing landing page that could convert visitors before they ever opened the product. I designed the page end to end, distinct from the in-app experience, focused on communicating the trip-planning pitch quickly and driving signups.",
    image: '/images/projects/holidayalot-landing/holidayalot-landing_homepage_cover.png',
    contributions: ['Website Design'],
    contribution: 'Website design',
    year: '2025',
    tags: ['LANDING PAGE DESIGN', 'TRAVEL'],
    imagePosition: 'top',
    role: 'Website Design',
    tools: ['Figma', 'Webflow'],
    timeline: '2 Weeks',
    filmstrip: [
      '/images/projects/holidayalot-landing/filmstrip/slide-01.png',
      '/images/projects/holidayalot-landing/filmstrip/slide-02.png',
      '/images/projects/holidayalot-landing/filmstrip/slide-03.png',
      '/images/projects/holidayalot-landing/filmstrip/slide-04.png',
      '/images/projects/holidayalot-landing/filmstrip/slide-05.png',
    ],
  },
];

export const FEATURED_SLUGS = ['ninenines', 'migor', 'holidayalot-mobile', 'wills-bisgrove'];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(currentSlug: string): Project[] {
  const candidates = projects.filter((p) => p.slug !== currentSlug);
  const nonFeatured = candidates.filter((p) => !FEATURED_SLUGS.includes(p.slug));
  const featured = candidates.filter((p) => FEATURED_SLUGS.includes(p.slug));
  return [...nonFeatured, ...featured].slice(0, 3);
}
