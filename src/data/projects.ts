export interface CaseStudySection {
  label: string;
  heading: string;
  paragraphs: string[];
  callout?: string;
  metricsIntro?: string;
  metrics?: string[];
}

/** Each group renders as its own divider-bound section; sections within a
 * group are stacked together with no divider between them. */
export type CaseStudyGroup = CaseStudySection[];

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
  team?: string;
  keyOutcomes?: string;
  filmstrip?: string[];
  caseStudy?: CaseStudyGroup[];
}

export const projects: Project[] = [
  {
    slug: 'ninenines',
    name: 'Ninenines',
    title: 'Helping engineering teams bring an AI coding agent into the tools they already use.',
    summary: "Aidan is an AI agent that writes code for engineering teams. Engineers give it work the way they'd ask a colleague, by mentioning it in Slack or on a pull request. When the founder brought me in, Ninenines was a written brief and nothing else. Over a period of one month I designed the whole dashboard, from the first setup screens to activity logs, billing and admin settings. I ran the design process with AI, starting with a brainstorm in Claude Code and finishing with polished screens in Figma.",
    image: '/images/projects/ninenines/ninenines_homepage_cover.png',
    contributions: ['Product Design', 'Web Design'],
    contribution: 'Product Design, Web design',
    year: '2025',
    tags: ['PRODUCT DESIGN', 'WEB DESIGN', 'SAAS'],
    role: 'Product Design',
    tools: ['Figma', 'Claude code', 'Pen.dev'],
    timeline: '1 Month',
    team: 'Founder and 1 designer',
    keyOutcomes: 'Key outcomes: 18 flows designed and specced, with every screen state and edge case · One integrations page that replaced two separate connection flows',
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
    caseStudy: [
      [
        {
          label: 'The Problem',
          heading: 'Engineering teams needed Aidan to work inside their own tools, and needed to trust what it did there',
          paragraphs: [
            "Engineering teams already live in GitHub, Slack and their issue tracker. An AI agent is only useful to them if it joins those tools the way a new hire would: it gets access to the code, joins the team chat and picks up tickets. The brief was built on the idea that teams won't adopt an agent that makes them switch apps. They also needed to trust it, since Aidan reads their code and their secrets, like database passwords and API keys.",
            'The founder needed a dashboard that got a team connected quickly, then gave them a clear view of what Aidan was doing, without becoming another place they had to work in.',
            "There was no budget or time for user research, so I worked from the founder's brief and from patterns engineers already know from tools like Vercel and GitHub.",
          ],
          callout: 'How might we help an engineering team bring Aidan into the tools they already use, and trust what it does there?',
        },
        {
          label: 'Process',
          heading: 'Using AI in my workflow',
          paragraphs: [
            "This was the first project I designed with AI from ideation down to visual design. I started with the brainstorm skill in Claude Code, working through the founder's brief until I had a product requirements document. The brainstorm was a back-and-forth conversation, and when the AI started drifting away from the brief, I steered it back, so the document described the product the founder had in mind.",
            'That document drove the visual design in pencil.dev, an AI design tool, where I laid out the first version of each flow. I then moved the designs into Figma to polish them. Because I was working alone, the requirements document was what I checked every screen against. I now start projects this way.',
          ],
        },
        {
          label: 'Solution',
          heading: 'I designed the dashboard for setting Aidan up and checking on it, and kept the real work in Slack and GitHub',
          paragraphs: [
            "Ninenines hasn't launched, so there are no results yet. The designs cover 18 flows, including onboarding, activity logs, usage and billing, team and admin settings, error pages and email templates. Each one is specced with its screen states, copy and edge cases.",
          ],
          metricsIntro: "Metrics I'd track after launch:",
          metrics: [
            'Activation: percentage of new teams that connect a repository in their first week',
            "First task: how long it takes a team to give Aidan its first piece of work after sign-up",
            'Oversight: how often admins open the activity log and usage page',
          ],
        },
      ],
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
    title: 'Helping travellers go from "I want to travel" to a costed, visa-checked trip plan',
    summary: 'Holidayalot started as a website that showed people which countries their passport could access and which documents they needed. It answered "Can I go?" but didn\'t bring anyone closer to going. I redesigned it as a mobile app that takes travellers through planning a trip: checking visa rules, estimating the cost and building an itinerary. I also designed for two groups the first version had missed: travellers with a destination in mind and first-time travellers.',
    image: '/images/projects/holidayalot-mobile/holidayalot-mobile_homepage_cover.png',
    contributions: ['Product Design', 'App Design'],
    contribution: 'Product Design, App design',
    year: '2025',
    tags: ['PRODUCT DESIGN', 'APP DESIGN', 'TRAVEL'],
    imagePosition: 'top',
    role: 'Product Design',
    tools: ['Figma'],
    timeline: '3 Months',
    team: 'Founder, 2 frontend engineers, 2 backend engineers, 1 content writer',
    keyOutcomes: "Key outcomes: Focused the app on two groups the first version had missed · Cut a feature the team couldn't keep running.",
    filmstrip: [
      '/images/projects/holidayalot-mobile/filmstrip/slide-01.png',
      '/images/projects/holidayalot-mobile/filmstrip/slide-02.png',
      '/images/projects/holidayalot-mobile/filmstrip/slide-03.png',
      '/images/projects/holidayalot-mobile/filmstrip/slide-04.png',
      '/images/projects/holidayalot-mobile/filmstrip/slide-05.png',
      '/images/projects/holidayalot-mobile/filmstrip/slide-06.png',
    ],
    caseStudy: [
      [
        {
          label: 'The Problem',
          heading: 'Would-be travellers gave up because a trip meant juggling many things across several sites',
          paragraphs: [
            'Would-be travellers, especially first-timers, have to piece together costs, visa rules, accommodation, safety advice, trip ideas and bookings from several sites.',
            'Our founder travels often and kept running into this, as did people he knew. Many of them gave up on trips entirely. Those who pushed through often paid more and spent longer in transit than they needed to.',
            'For Holidayalot, the goal was to get would-be travellers worldwide from "I\'d like to travel" to a finished trip plan, then offer premium plans. With no research budget, I worked from desk research, stakeholder interviews and UX best practice.',
          ],
        },
      ],
      [
        {
          label: 'Solution',
          heading: 'I focused the app on two kinds of travellers',
          paragraphs: [
            "The first app concept opened with a feed of short trip-idea videos for people who didn't know where to go. We had no user-generated content and couldn't produce enough original video ourselves, so I cut the feed. Stakeholder interviews pointed to two groups we hadn't designed for yet: travellers with a destination, who lacked the requirements and costs to make a real plan, and first-time travellers, who needed guidance before a trip felt possible.",
            'I gave each group its own way in. "Plan my trip" asks travellers with a destination for just the place and trip length. First-timers get a step-by-step trip setup, supported by our curated country guides. I then moved cost and visa checks into the plan itself: an estimate with cheaper alternatives, routes compared by cost, speed and travel experience, and the documents needed. Every traveller sees the full price and paperwork before they book anything.',
          ],
        },
        {
          label: 'Outcome',
          heading: 'The product was paused before launch, but it changed how I start every project',
          paragraphs: [
            "Holidayalot was fully designed for iOS and Android. The CEO paused it before launch because finishing it needed funding, time and attention the company couldn't give at that point.",
          ],
          metricsIntro: "Metrics we'd have tracked if it had launched:",
          metrics: [
            'Conversion: percentage of people who start a trip plan and finish an itinerary',
            'Adoption: percentage of first-time travellers who complete the step-by-step setup',
            'Business: percentage of active planners who upgrade to a premium plan',
          ],
        },
      ],
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
