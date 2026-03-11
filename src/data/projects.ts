export interface Project {
  slug: string;
  name: string;
  title: string;
  summary: string;
  image: string;
  contributions: string[];
  contribution: string;
  year: string;
  hasBorder?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'holidayalot',
    name: 'Holidayalot',
    title: 'Designing a solution for the 71% of travelers who find trip planning so stressful',
    summary: 'The process of planning a trip is fragmented across a dozen tools. 67% of travelers get so overwhelmed when they try to plan a trip and they quit finishing the plan. I was one of two product designers who built Holidayalot from the ground up. I owned all user-facing design across the product and built the design system used across the product and admin surfaces. while the second designer worked on the admin side of the product. Holidayalot is a travel companion that meets users at every step of their planning journey.',
    image: '/images/projects/holidayalot/holidayalot_homepage_cover.png',
    contributions: ['Product Design', 'Web Design'],
    contribution: 'Product Design, Web design, Design system',
    year: '2025',
    hasBorder: true,
  },
  {
    slug: 'virally',
    name: 'Virally',
    title: 'Reducing the time it takes for brands to find and match with the right influencers',
    summary: 'Virally connects artists and brands with influencers for viral campaigns. As the sole designer, I designed the campaign discovery experience. The core design bet: let influencers browse and apply to campaigns instead of making brands search for influencers.',
    image: '/images/projects/virally/virally_homepage_cover.png',
    contributions: ['Product Design', 'Web Design'],
    contribution: 'Product Design, Web design, Design system, Mobile design',
    year: '2024-2025',
  },
  {
    slug: 'hconnect',
    name: 'hconnect',
    title: 'Redesigning the UI of a hotel management system',
    summary: 'hconnect is an Integration Platform as a Service (iPaaS) for the hospitality industry that helps hotels move and synchronize data across multiple systems.\n\nAs the platform grew, its interface struggled to clearly present complex integration data. The founder reached out to me to redesign the interface using the Tailwind design system. His goal was to modernize the product and create a more professional user experience. Over two weeks, I worked closely with the founder to deliver a cleaner, more structured UI that makes system data easier to understand and manage.',
    image: '/images/projects/hconnect/hconnect_hompage_cover.png',
    contributions: ['Product Design'],
    contribution: 'UI Design',
    year: '2024-2025',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(currentSlug: string): Project[] {
  return projects.filter((p) => p.slug !== currentSlug);
}
