export interface Role {
  company: string
  role: string
  period: string
  highlights?: string[]
  brief?: boolean
}

export const experience: Role[] = [
  {
    company: 'Prowler',
    role: 'Senior Software Engineer',
    period: '2024',
    highlights: [
      'Architected component patterns and shaped UI strategy during a critical React/Next.js migration',
      'Built interfaces for complex security workflows in a hybrid Phoenix/Elixir LiveView architecture',
    ],
  },
  {
    company: 'Mammoth Media',
    role: 'Senior Software Engineer',
    period: '2023–2024',
    highlights: [
      'Developed React dashboards for a B2B SaaS platform helping CPG brands manage and analyze customer engagement',
    ],
  },
  {
    company: 'Fable',
    role: 'Senior Software Engineer',
    period: '2022–2023',
    highlights: [
      'Built the company\'s first design system from scratch: accessible React components with centralized Storybook docs',
      'Engineered a template library that let animators launch projects instantly, cutting cross-team cycles significantly',
    ],
  },
  {
    company: 'Beachbody',
    role: 'Senior Software Engineer',
    period: '2021–2022',
    highlights: [
      'Drove frontend for the launch of BODi, a live and on-demand streaming platform serving 2M+ subscribers',
      'Maintained near-100% test coverage across high-traffic fitness streaming features under tight launch timelines',
    ],
  },
  {
    company: 'Mongoose',
    role: 'UX Engineer',
    period: '2019–2021',
    highlights: [
      'Owned end-to-end UX/UI lifecycle for a high-traffic higher-education engagement platform in Vue.js',
      'Established the product\'s first centralized Storybook repository, accelerating product velocity',
    ],
  },
  {
    company: 'Thinkful · Chegg',
    role: 'Mentor, Software Engineering Bootcamp',
    period: '2019–2021',
    highlights: [
      'Mentored students through an immersive frontend engineering bootcamp, from JavaScript fundamentals through React project development',
      'Led technical reviews and held office hours bridging both engineering and UX topics',
    ],
  },
  {
    company: 'Beachbody',
    role: 'Software Engineer II',
    period: '2016–2019',
    highlights: [
      'Led frontend for Core De Force, an international product launch across UK and Canada',
      'Built high-traffic marketing, ecommerce, and video launch experiences across evolving frontend stacks',
    ],
  },
  {
    company: 'Whalerock Industries',
    role: 'UI Engineer',
    period: '2015–2016',
    highlights: [
      'Built and optimized frontend experiences for Moviefone.com, supporting ~2M monthly users',
      'Developed responsive marketing campaigns and email systems for high-visibility clients, translated from design to pixel-accurate, cross-browser interfaces',
    ],
  },
  {
    company: 'Microsoft · Yammer',
    role: 'Frontend Engineer',
    period: '2013–2015',
    highlights: [
      'Co-led rebuild of the marketing site serving 400K+ monthly visitors',
      'Implemented A/B-tested features that improved sign-up conversion',
    ],
  },
  {
    company: 'Mohawk Digital',
    role: 'Frontend Engineer',
    period: 'Earlier',
    brief: true,
  },
  {
    company: 'Trailer Park',
    role: 'Web Developer',
    period: 'Earlier',
    brief: true,
  },
]

export interface Project {
  company: string
  product: string
  role: string
  period: string
  description: string
  url: string
  image?: string
}

export const projects: Project[] = [
  {
    company: 'Beachbody',
    product: 'BODi',
    role: 'Senior Software Engineer',
    period: '2021–2022',
    description:
      'Live and on-demand fitness streaming platform serving 2M+ subscribers. Led frontend engineering for the full product launch, including high-traffic live event features, performance-critical streaming UI, and near-100% test coverage across the platform.',
    url: 'https://www.bodi.com',
    image: '/bodi.png',
  },
  {
    company: 'Prowler',
    product: 'Prowler Cloud',
    role: 'Senior Software Engineer',
    period: '2024',
    description:
      'Open-source cloud security platform used by teams across AWS, Azure, and GCP. Architected React/Next.js component patterns during a critical frontend migration and built intuitive UIs that simplified complex, data-heavy security workflows.',
    url: 'https://prowler.com',
    image: '/prowler.png',
  },
  {
    company: 'Mongoose',
    product: 'Cadence',
    role: 'UX Engineer',
    period: '2019–2021',
    description:
      'AI-powered communication platform serving 1,000+ colleges and universities. Owned the full UX/UI lifecycle, from interaction design through implementation in Vue.js, and established the product\'s first centralized Storybook component library.',
    url: 'https://hellomongoose.com',
    image: '/mongoose.png',
  },
]

export interface SkillGroup {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Vue.js', 'HTML5 & CSS3'],
  },
  {
    category: 'Design Systems',
    skills: ['Component Libraries', 'Design Tokens', 'Storybook', 'Figma-to-Code', 'Accessibility (WCAG)', 'Tailwind CSS'],
  },
  {
    category: 'Tooling & Testing',
    skills: ['Jest & React Testing Library', 'Cypress', 'Git & CI/CD', 'Webpack', 'LaunchDarkly', 'Optimizely'],
  },
  {
    category: 'Infrastructure',
    skills: ['AWS (S3, CloudFront)', 'Node.js', 'REST & GraphQL', 'Performance Optimization', 'SEO'],
  },
]
