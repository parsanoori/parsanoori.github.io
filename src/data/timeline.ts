import { courses, type Course } from './courses'

export interface TimelineEntry {
  id: string
  type: 'work' | 'education'
  title: string
  place: string
  date: string
  description: string
  skills: string[]
  courses?: Course[]
}

export const timeline: TimelineEntry[] = [
  {
    id: 'kuknos',
    type: 'work',
    title: 'Golang Developer',
    place: 'Kuknos',
    date: 'Since September 2024',
    description:
      "Working on Iran's Central Bank Digital Currency (CBDC) project, connecting the blockchain-enabled Borna system to the traditional banking system.",
    skills: [
      'Golang',
      'Cryptography internals',
      'HSM / PKCS11',
      'CGO bridging',
      'Microservices',
      'RabbitMQ',
      'Stellar',
      'Enterprise collaboration',
    ],
  },
  {
    id: 'quera',
    type: 'work',
    title: 'Blockchain Track Owner',
    place: 'Quera',
    date: 'Related work experience, during university',
    description:
      'Owned the blockchain bootcamp track — sourced instructors, designed curriculum aligned with TA experience, curated mentors, and built homework assignments.',
    skills: [
      'Curriculum design',
      'Mentor sourcing',
      'Bootcamp ownership',
      'Technical writing',
    ],
  },
  {
    id: 'sbu',
    type: 'education',
    title: 'B.Eng. Computer Engineering',
    place: 'Shahid Beheshti University, Tehran',
    date: '2019 – Present · GPA 18.02/20',
    description:
      'Worked in the university blockchain labs; co-authored "Preserving Urban Traffic Data Privacy Using Blockchain-based Vehicular Ad-hoc Networks"; thesis on reinforcement learning in cryptocurrency investment funds. TA for 8 courses.',
    skills: [
      'Blockchain research',
      'Academic writing',
      'Reinforcement learning',
      'Teaching / TA-ing',
    ],
    courses,
  },
  {
    id: 'highschool',
    type: 'education',
    title: 'High School Diploma — Mathematics & Physics',
    place: 'Atomic Energy High School, Tehran',
    date: '2016 – 2019 · GPA 19.58/20',
    description:
      'Took part in the Physics Olympiad course and passed its entrance exam twice; qualified for the Math Olympiad entry-level exam. Ranked 628 nationally in the university entrance exam.',
    skills: ['Olympiad-level problem solving', 'Critical thinking', 'Mathematical rigor'],
  },
]
