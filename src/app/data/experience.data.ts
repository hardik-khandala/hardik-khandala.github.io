import { Experience }                from '../core/models/experience.model';
import { EmploymentType, WorkMode }  from '../core/enums/experience.enum';

export const EXPERIENCE_DATA: Experience[] = [
  {
    company:  'Stridely Solutions',
    logo:     'assets/logos/stridely.png',
    location: 'Ahmedabad, Gujarat, India',
    workMode: WorkMode.OnSite,
    roles: [
      {
        title:       'Trainee Engineer',
        type:        EmploymentType.FullTime,
        startDate:   'Jul 2025',
        endDate:     'Jun 2026',
        description: [
          'Built InstaBuild360 — an AI-powered 3D metal building configurator with LangChain agent system and FastAPI backend.',
          'Implemented WebSocket-based real-time voice agent with OpenAI Whisper STT, TTS, and VAD silence detection.',
          'Developed Angular 17 frontend with AI chat overlay, canvas-based animations, and mobile-responsive UI.',
          'Optimized backend performance using asyncio.gather parallelization and two-layer LRU caching.',
        ],
        skills: ['Python', 'FastAPI', 'LangChain', 'Angular', 'Redis', 'Azure', 'WebSocket'],
      },
      {
        title:       'Trainee',
        type:        EmploymentType.Apprenticeship,
        startDate:   'May 2025',
        endDate:     'Jul 2025',
        description: [
          'Onboarded onto production codebase and contributed to initial feature development.',
        ],
        skills: ['Python', 'Angular', 'FastAPI'],
      },
    ],
  },
  {
    company:  'Radixweb',
    logo:     'assets/logos/radixweb.png',
    location: 'Ahmedabad, Gujarat, India',
    workMode: WorkMode.OnSite,
    roles: [
      {
        title:       'Trainee Software Engineer',
        type:        EmploymentType.Apprenticeship,
        startDate:   'Sep 2024',
        endDate:     'Mar 2025',
        description: [
          'Worked on .NET Core and C# based enterprise applications.',
        ],
        skills: ['.NET Core', 'C#'],
      },
    ],
  },
];