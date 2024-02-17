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
    path: http.get(`/problem/:slug`, () => {
      return HttpResponse.json({
        id: crypto.randomUUID(),
        name: "Two sum",
        slug: "two-sum",
        description: "<p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>\n\n<p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>\n\n<p>You can return the answer in any order.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [2,7,11,15], target = 9\n<strong>Output:</strong> [0,1]\n<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [3,2,4], target = 6\n<strong>Output:</strong> [1,2]\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [3,3], target = 6\n<strong>Output:</strong> [0,1]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>\n\t<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>\n\t<li><strong>Only one valid answer exists.</strong></li>\n</ul>\n\n<p>&nbsp;</p>\n<strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than <code>O(n<sup>2</sup>)</code><font face=\"monospace\">&nbsp;</font>time complexity?",
        contentSelf: "```js\nfunction removeDuplicates(arr) {\n  let unique = [];\n  arr.forEach(item => {\n    if(!unique.includes(item)) {\n      unique.push(item);\n    }\n  });\n  return unique; \n}\n\n// Example usage:\nlet arr = [1, 2, 3, 1, 5, 6, 2, 5, 7];\nlet uniqueArr = removeDuplicates(arr); \nconsole.log(uniqueArr); // [1, 2, 3, 5, 6, 7]\n```\n\nTo explain:\n\n- Create an empty array `unique` to store unique values\n- Loop through the input array with `.forEach` \n- For each item, check if `unique` already `.includes()` that item \n- If not, `.push()` that item into `unique`\n- After the loop, `",
        contentTime: "```js\nfunction removeDuplicates(arr) {\n  let unique = [];\n  arr.forEach(item => {\n    if(!unique.includes(item)) {\n      unique.push(item);\n    }\n  });\n  return unique; \n}\n\n// Example usage:\nlet arr = [1, 2, 3, 1, 5, 6, 2, 5, 7];\nlet uniqueArr = removeDuplicates(arr); \nconsole.log(uniqueArr); // [1, 2, 3, 5, 6, 7]\n```\n\nTo explain:\n\n- Create an empty array `unique` to store unique values\n- Loop through the input array with `.forEach` \n- For each item, check if `unique` already `.includes()` that item \n- If not, `.push()` that item into `unique`\n- After the loop, `",
        contentSpace: "```js\nfunction removeDuplicates(arr) {\n  let unique = [];\n  arr.forEach(item => {\n    if(!unique.includes(item)) {\n      unique.push(item);\n    }\n  });\n  return unique; \n}\n\n// Example usage:\nlet arr = [1, 2, 3, 1, 5, 6, 2, 5, 7];\nlet uniqueArr = removeDuplicates(arr); \nconsole.log(uniqueArr); // [1, 2, 3, 5, 6, 7]\n```\n\nTo explain:\n\n- Create an empty array `unique` to store unique values\n- Loop through the input array with `.forEach` \n- For each item, check if `unique` already `.includes()` that item \n- If not, `.push()` that item into `unique`\n- After the loop, `",
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
      })
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