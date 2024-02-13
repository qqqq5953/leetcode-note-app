import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Link } from "react-router-dom";
import { MultiSelect } from '@/components/MultiSelect';

export default function Home() {
  const [group, setGroup] = useState<{ label: string, value: string }[]>([
    { label: "All Categories", value: "allCategories" },
    { label: "All Difficulties", value: "allDifficulties" },
    { label: "All Problems", value: "allProblems" },
  ])

  const options = [
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
  ]

  return (
    <div className='flex flex-col gap-4'>
      <header className='space-y-4'>
        <div className='text-right'>
          <Button asChild variant="ghost" className=''>
            <Link to="/new-problem">
              New
            </Link>
          </Button>
        </div>
        <MultiSelect
          selected={group}
          optionGroups={options}
          placeholder="標籤"
          onChange={setGroup}
          className="sm:w-[510px]"
        />
      </header>
      <section>
        <div>
          <h3></h3>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>

  )
}
