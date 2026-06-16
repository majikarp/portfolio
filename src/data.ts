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
    brief: true,
  },
  {
    company: 'Fable',
    role: 'Senior Software Engineer',
    period: '2022–2023',
    highlights: [
      'Architected the company\'s first design system — accessible React components with centralized Storybook docs',
      'Built a prebuilt template library that let animators launch projects instantly, cutting cross-team cycles significantly',
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
    company: 'Beachbody',
    role: 'Software Engineer II',
    period: '2016–2019',
    highlights: [
      'Led frontend for Core De Force, an international product launch across UK and Canada',
      'Built high-traffic marketing, ecommerce, and video launch experiences across evolving frontend stacks',
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
    company: 'Whalerock Industries',
    role: 'UI Engineer',
    period: '2015–2016',
    brief: true,
  },
  {
    company: 'Thinkful · Chegg',
    role: 'Mentor, Software Engineering Bootcamp',
    period: '2019–2021',
    brief: true,
  },
  {
    company: 'Mohawk Digital · Trailer Park',
    role: 'Frontend Engineer',
    period: 'Earlier',
    brief: true,
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
