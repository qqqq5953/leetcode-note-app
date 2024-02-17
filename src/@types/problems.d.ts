export type Problems = {
  heading: string
  options: Option[]
}

export type Option = {
  id: string
  name: string
  slug: string
  createdAt: number
  source: Source[]
  category: Category
  difficulty: Difficulty
}

export type Category = {
  id: string
  name: string
  slug: string
  createdAt: number
}

export type Difficulty = {
  id: string
  name: "Easy" | "Medium" | "Hard"
  slug: "easy" | "medium" | "hard"
  createdAt: number
}

export type Source = {
  id: string
  name: "Leetcode 75" | "Leetcode 150" | "Neetcode 75" | "Neetcode 150"
  slug: "leetcode-75" | "leetcode-150" | "neetcode-75" | "neetcode-150"
  createdAt: number
}