import { HeroData } from '../core/models/hero.model';

export const HERO_DATA: HeroData = {
  greeting:    'Hey, I am',
  name:        'Hardik Khandala',
  roles:       ['Software Engineer', 'AI Engineer', 'Full Stack Developer'],
  description: 'I build production-grade AI systems and full stack applications. Passionate about agentic LLM architectures, real-time pipelines, and clean scalable backends.',
  cta: {
    primary:   { label: 'View My Work',   url: '/work'              },
    secondary: { label: 'Download Resume', url: 'assets/resume.pdf' },
  },
  social: [
    { label: 'GitHub',   icon: 'ti-brand-github',   url: 'https://github.com/hardik-khandala'   },
    { label: 'LinkedIn', icon: 'ti-brand-linkedin',  url: 'https://linkedin.com/in/hardik-khandala' },
    { label: 'Twitter',  icon: 'ti-brand-x',   url: 'https://twitter.com/hardik_khandala'   },
    { label: 'Instagram',icon: 'ti-brand-instagram', url: 'https://instagram.com/hardik.khandala22' },
  ],
};