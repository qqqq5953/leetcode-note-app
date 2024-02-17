import { useState } from 'react'
import { Link } from "react-router-dom";
import { UseQueryResult } from '@tanstack/react-query'

import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { MultiSelect, OptionWithHeading } from '@/components/MultiSelect';
import Loader from '@/components/Loader';

import { Problems } from '@/@types/problems';
import useProblems from '@/hooks/useProblems';
import Badges from '@/components/Badges';

export default function Home() {
  const [filter, setFilter] = useState<{ label: string, value: string }[]>([
    { label: "All Categories", value: "allCategories" },
    { label: "All Difficulties", value: "allDifficulties" },
    { label: "All Problems", value: "allProblems" },
  ])

  const { getProblems, getFilterOptions } = useProblems()

  const {
    data: options,
    isLoading: isLoadingOption
  }: UseQueryResult<OptionWithHeading[], Error> = getFilterOptions()

  console.log('options', options);


  const {
    data: problems,
    isLoading: isLoadingProblem
  }: UseQueryResult<Problems[], Error> = getProblems()

  console.log('problems', problems);

  return (
    <div className='grow flex flex-col gap-4'>
      <header className='space-y-4'>
        {isLoadingOption ?
          <Loader /> :
          options && <MultiSelect
            selected={filter}
            optionGroups={options}
            placeholder="Problems to practice ..."
            onChange={setFilter}
            className="sm:w-[510px]"
          />
        }
      </header>
      {/* flex items-center justify-center */}
      <section
        className={`grow ${isLoadingProblem ? "flex items-center justify-center" : ""}`}
      >
        {isLoadingProblem ?
          <Loader size={30} /> :
          <Accordion
            type="multiple"
          >
            {problems?.map(group => {
              return <AccordionItem
                value={group.heading}
                key={group.heading}
              >
                <AccordionTrigger className='hover:no-underline'>{group.heading}</AccordionTrigger>
                <AccordionContent className='flex flex-col gap-4'>
                  {group.options.map(option => {
                    return <Link
                      key={option.id}
                      to={`/problem/${option.slug}`}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle>{option.name}</CardTitle>
                          <div className='flex gap-2 pt-1'>
                            <Badges badges={[...option.source, option.category, option.difficulty]} />
                            {/* {[...option.source, option.difficulty, option.category].map(problem => {
                              return <Badge variant="secondary"
                                key={problem.id}
                              >{problem.name}</Badge>
                            })} */}
                          </div>
                        </CardHeader>
                      </Card>
                    </Link>
                  })}
                </AccordionContent>
              </AccordionItem>
            })}
          </Accordion>
        }
      </section>
    </div>
  )
}