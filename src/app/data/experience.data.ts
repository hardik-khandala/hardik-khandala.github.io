import { Experience }                from '../core/models/experience.model';
import { EmploymentType, WorkMode }  from '../core/enums/experience.enum';

export const EXPERIENCE_DATA: Experience[] = [
  {
    company:  'Stridely Solutions',
    logo:     'assets/logos/stridely.png',
    location: 'Ahmedabad, India',
    workMode: WorkMode.OnSite,
    roles: [
      {
        title:       'Trainee Engineer',
        type:        EmploymentType.FullTime,
        startDate:   new Date(2025, 6, 22),
        endDate:     new Date(2026, 5, 19),
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
        startDate:   new Date(2025, 4, 5),
        endDate:     new Date(2025, 6, 21),
        description: [
          'Developed a Hiring Management System using Angular, Dotnet Core, and SQL Server, enabling efficient recruitment processes.',
        ],
        skills: [],
      },
    ],
  },
  {
    company:  'Radixweb',
    logo:     'assets/logos/radixweb.png',
    location: 'Ahmedabad, India',
    workMode: WorkMode.OnSite,
    roles: [
      {
        title:       'Trainee Software Engineer',
        type:        EmploymentType.Apprenticeship,
        startDate:   new Date(2024, 8, 16),
        endDate:     new Date(2025, 2, 31),
        description: [
          ' Designed and developed scalable web applications using .NET Core, Angular, and MS SQL Server',
          ' Gained hands-on experience in full-stack development and optimized APIs for performance.',
          ' Participated in Agile sprints and code reviews to enhance collaboration and delivery quality.'
        ],
        skills: ['.NET Core', 'C#', 'Angular', 'SQL Server', 'REST APIs', 'AWS', 'TypeScript'],
      },
    ],
  },
];