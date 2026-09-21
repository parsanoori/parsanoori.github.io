export interface Course {
  name: string
  note?: string
  skills: string[]
}

export const courses: Course[] = [
  {
    name: 'Formal Languages and Automata Theory',
    note: "TA'd for 5 semesters",
    skills: ['Automata theory', 'Pumping lemma', 'Formal proofs', 'Grammar design'],
  },
  {
    name: 'CryptoCurrencies and Blockchain',
    skills: ['Consensus protocols', 'Smart contracts', 'Cryptographic primitives'],
  },
  {
    name: 'Algorithms Design',
    skills: ['Algorithm design paradigms', 'Complexity analysis', 'Proof of correctness'],
  },
  {
    name: 'Computer Architecture',
    skills: ['Pipelining', 'Memory hierarchy', 'Instruction set design'],
  },
  {
    name: 'Discrete Math',
    skills: ['Combinatorics', 'Graph theory', 'Logic & proofs'],
  },
  {
    name: 'Signal and Systems',
    skills: ['Fourier analysis', 'Linear systems', 'Signal processing fundamentals'],
  },
  {
    name: 'Advanced Programming',
    skills: ['Object-oriented design', 'Software architecture', 'Design patterns'],
  },
  {
    name: 'Introduction to Programming',
    skills: ['Programming fundamentals', 'Debugging', 'Teaching foundational concepts'],
  },
]
