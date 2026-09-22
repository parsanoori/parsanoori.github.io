export interface Skill {
  name: string
  value: number
}

export const hardSkills: Skill[] = [
  { name: 'Python', value: 85 },
  { name: 'Golang', value: 85 },
  { name: 'C++', value: 75 },
  { name: 'SQL', value: 75 },
  { name: 'Solidity', value: 40 },
  { name: 'Rust', value: 40 },
]

export const softSkills: Skill[] = [
  { name: 'Creativity', value: 90 },
  { name: 'Persistence', value: 85 },
  { name: 'Adaptability', value: 85 },
  { name: 'Problem Solving', value: 85 },
  { name: 'Goal-Oriented', value: 80 },
  { name: 'Positivity', value: 75 },
]
