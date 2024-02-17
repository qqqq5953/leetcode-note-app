import { http, HttpResponse } from 'msw'

const endpoints = [
  {
    path: http.get(`/problems`, () => {
      return HttpResponse.json([
        {
          heading: "Array and Hash",
          options: [
            {
              id: crypto.randomUUID(),
              name: "Two sum",
              slug: "two-sum",
              source: [
                {
                  id: crypto.randomUUID(),
                  name: "Leetcode 75",
                  slug: "leetcode-75",
                  createdAt: "",
                },
              ],
              category: {
                id: crypto.randomUUID(),
                name: "Array and Hash",
                slug: "array-and-hash",
                createdAt: "",
              },
              difficulty: {
                id: crypto.randomUUID(),
                name: "Easy",
                slug: "easy",
                createdAt: "",
              },
              createdAt: "",
            },
            {
              id: crypto.randomUUID(),
              name: "Merge sorted array",
              slug: "merge-sorted-array",
              source: [
                {
                  id: crypto.randomUUID(),
                  name: "Leetcode 75",
                  slug: "leetcode-75",
                  createdAt: "",
                },
              ],
              category: {
                id: crypto.randomUUID(),
                name: "Array and Hash",
                slug: "array-and-hash",
                createdAt: "",
              },
              difficulty: {
                id: crypto.randomUUID(),
                name: "Easy",
                slug: "easy",
                createdAt: "",
              },
              createdAt: "",
            }
          ]
        },
        {
          heading: "Tree",
          options: [
            {
              id: crypto.randomUUID(),
              name: "Tree1",
              slug: "tree1",
              source: [
                {
                  id: crypto.randomUUID(),
                  name: "Leetcode 75",
                  slug: "leetcode-75",
                  createdAt: "",
                },
              ],
              category: {
                id: crypto.randomUUID(),
                name: "Tree",
                slug: "tree",
                createdAt: "",
              },
              difficulty: {
                id: crypto.randomUUID(),
                name: "Medium",
                slug: "medium",
                createdAt: "",
              },
              createdAt: "",
            },
            {
              id: crypto.randomUUID(),
              name: "Tree2",
              slug: "tree2",
              source: [
                {
                  id: crypto.randomUUID(),
                  name: "Leetcode 75",
                  slug: "leetcode-75",
                  createdAt: "",
                },
              ],
              category: {
                id: crypto.randomUUID(),
                name: "Tree",
                slug: "tree",
                createdAt: "",
              },
              difficulty: {
                id: crypto.randomUUID(),
                name: "Medium",
                slug: "medium",
                createdAt: "",
              },
              createdAt: "",
            }
          ]
        },
        {
          heading: "Graph",
          options: [
            {
              id: crypto.randomUUID(),
              name: "Graph1",
              slug: "graph1",
              source: [
                {
                  id: crypto.randomUUID(),
                  name: "Leetcode 150",
                  slug: "leetcode-150",
                  createdAt: "",
                },
              ],
              category: {
                id: crypto.randomUUID(),
                name: "Graph",
                slug: "graph",
                createdAt: "",
              },
              difficulty: {
                id: crypto.randomUUID(),
                name: "Hard",
                slug: "hard",
                createdAt: "",
              },
              createdAt: "",
            },
            {
              id: crypto.randomUUID(),
              name: "Graph2",
              slug: "graph2",
              source: [
                {
                  id: crypto.randomUUID(),
                  name: "Leetcode 150",
                  slug: "leetcode-150",
                  createdAt: "",
                },
              ],
              category: {
                id: crypto.randomUUID(),
                name: "Graph",
                slug: "graph",
                createdAt: "",
              },
              difficulty: {
                id: crypto.randomUUID(),
                name: "Hard",
                slug: "hard",
                createdAt: "",
              },
              createdAt: "",
            }
          ]
        },
      ])
    }),
    activate: true,
  },
  {
    path: http.get(`/options`, () => {
      return HttpResponse.json([
        {
          heading: "Category",
          options: [
            { label: "All Categories", value: "allCategories" },
            { label: "Array and Hash", value: "1" },
            { label: "Tree", value: "2" },
            { label: "Graph", value: "3" },
          ]
        },
        {
          heading: "Difficulty",
          options: [
            { label: "All Difficulties", value: "allDifficulties" },
            { label: "Easy", value: "4" },
            { label: "Medium", value: "5" },
            { label: "Hard", value: "6" },
          ]
        },
        {
          heading: "Problem",
          options: [
            { label: "All Problems", value: "allProblems" },
            { label: "leetcode 75", value: "7" },
            { label: "leetcode 150", value: "8" },
            { label: "neetcode 75", value: "9" },
            { label: "neetcode 150", value: "10" },
          ]
        },
      ])
    }),
    activate: true,
  }
]

export const handlers = endpoints.filter(endpoint => endpoint.activate === true).map(endpoint => endpoint.path)