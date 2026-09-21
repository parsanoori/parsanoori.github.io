export interface Skill {
  name: string
  value: number
}

export const hardSkills: Skill[] = [
  { name: 'Discrete Mathematics', value: 90 },
  { name: 'Formal Languages', value: 90 },
  { name: 'Python', value: 85 },
  { name: 'C++', value: 85 },
  { name: 'Golang', value: 85 },
  { name: 'Data Structures', value: 85 },
  { name: 'Solidity', value: 80 },
  { name: 'Cryptocurrencies', value: 80 },
  { name: 'SQL', value: 75 },
  { name: 'Algorithms', value: 75 },
  { name: 'Cryptography', value: 70 },
]

export const softSkills: Skill[] = [
  { name: 'Creativity', value: 90 },
  { name: 'Persistence', value: 85 },
  { name: 'Adaptability', value: 85 },
  { name: 'Problem Solving', value: 85 },
  { name: 'Goal-Oriented', value: 80 },
  { name: 'Positivity', value: 75 },
]
