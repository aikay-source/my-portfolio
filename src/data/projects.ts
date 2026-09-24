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
}

export const projects: Project[] = [
  {
    slug: 'ninenines',
    name: 'Ninenines',
    title: 'Designing a solution for the 71% of travelers who find trip planning so stressful',
    summary: 'Ninenines is a travel planning product built for the 71% of travelers who find trip planning stressful. As product designer, I led the end-to-end design of the planning experience, from early discovery through the polished web product shown here.',
    image: '/images/projects/ninenines/ninenines_homepage_cover.png',
    contributions: ['Product Design', 'Web Design'],
    contribution: 'Product Design, Web design',
    year: '2025',
    tags: ['PRODUCT DESIGN', 'WEB DESIGN', 'SAAS'],
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
  },
  {
    slug: 'holidayalot-mobile',
    name: 'Holidayalot Mobile',
    title: 'Designing a solution for the 71% of travelers who find trip planning so stressful',
    summary: 'Holidayalot Mobile brings the Holidayalot trip-planning experience to a native mobile app, meeting travelers at every step of their planning journey from wherever they are.',
    image: '/images/projects/holidayalot-mobile/holidayalot-mobile_homepage_cover.png',
    contributions: ['Product Design', 'App Design'],
    contribution: 'Product Design, App design',
    year: '2025',
    tags: ['PRODUCT DESIGN', 'APP DESIGN', 'HOSPITALITY'],
  },
  {
    slug: 'wills-bisgrove',
    name: 'Wills Bisgrove',
    title: 'UI design for a store management dashboard',
    summary: 'Wills Bisgrove needed a store management dashboard that made day-to-day ecommerce operations easier to reason about. I designed the interface end to end, focused on giving store owners a clear, structured view of their business.',
    image: '/images/projects/wills-bisgrove/wills-bisgrove_homepage_cover.png',
    contributions: ['Web Design'],
    contribution: 'Web design',
    year: '2025',
    tags: ['WEB DESIGN', 'ECOMMERCE'],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(currentSlug: string): Project[] {
  return projects.filter((p) => p.slug !== currentSlug);
}
