import { Project } from '../core/models/project.model';

export const PROJECT_DATA: Project[] = [
  {
    title:       'InstaBuild360',
    description: 'AI-powered 3D metal building configurator with a LangChain agent system, real-time voice pipeline, and multi-tenant architecture.',
    details: [
      'Built a LangChain AgentExecutor pipeline with FastAPI backend, Redis session state, and multi-tenant JWT authentication.',
      'Implemented WebSocket-based real-time voice agent with OpenAI Whisper STT, TTS-1, and VAD silence detection.',
      'Developed Angular 17 frontend with AI chat overlay, canvas-based neon ring animations, and mobile-responsive UI.',
      'Optimized performance using asyncio.gather parallelization and two-layer LRU caching.',
      'Deployed on Azure with multi-tenant configuration loaded from SQL Server migrated to Redis as source of truth.',
    ],
    githubUrl:    null,
    liveUrl:      null,
    technologies: ['Python', 'FastAPI', 'LangChain', 'Angular', 'Redis', 'Azure', 'WebSocket'],
  },
  {
    title:       'Attendance System',
    description: 'Automated student attendance using face recognition.',
    details: [
      'Built a face recognition pipeline using Python to identify and mark student attendance automatically.',
      'Integrated PostgreSQL for storing student records and attendance logs.',
      'Developed a Django web interface for managing students and viewing attendance reports.',
    ],
    githubUrl:    'https://github.com/hardik-khandala/Attendance-System',
    liveUrl:      null,
    technologies: ['Django', 'Python', 'PostgreSQL', 'HTML'],
  },
  {
    title:       'Hand Gesture Detection',
    description: 'Real-time hand gesture movement detection using computer vision.',
    details: [
      'Implemented real-time hand tracking using OpenCV and MediaPipe.',
      'Trained a TensorFlow model to classify hand gestures with high accuracy.',
      'Achieved low-latency detection suitable for real-time interaction.',
    ],
    githubUrl:    'https://github.com/hardik-khandala/Hand-Gesture-detection',
    liveUrl:      null,
    technologies: ['Python', 'OpenCV', 'TensorFlow'],
  }
];