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
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge';

import { MultiSelect, OptionWithHeading } from '@/components/MultiSelect';
import Loader from '@/components/Loader';

import { Problems } from '@/@types/problems';
import useProblems from '@/hooks/useProblems';

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
    <div className='flex flex-col gap-4'>
      <header className='space-y-4'>
        <div className='text-right'>
          <Button asChild variant="ghost" className=''>
            <Link to="/new-problem">
              New
            </Link>
          </Button>
        </div>
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
      <section>
        {isLoadingProblem ?
          <Loader /> :
          problems?.map(group => {
            return <Accordion
              key={group.heading}
              type="single"
              collapsible
            >
              <AccordionItem value="item-1">
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
                            {[...option.source, option.difficulty, option.category].map(problem => {
                              return <Badge variant="secondary"
                                key={problem.id}
                              >{problem.name}</Badge>
                            })}
                          </div>
                        </CardHeader>
                      </Card>
                    </Link>
                  })}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          })
        }

      </section>
    </div>

  )
}
