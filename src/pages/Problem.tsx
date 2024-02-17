import { useParams } from 'react-router-dom'
import { UseQueryResult } from '@tanstack/react-query'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Loader from '@/components/Loader';
import Badges from '@/components/Badges'

import useProblems from '@/hooks/useProblems'
import { Problem as ProblemType } from '@/@types/problems';

export default function Problem() {
  const { getProblem } = useProblems()
  const { slug } = useParams()

  const {
    data: problem,
    isLoading: isLoadingProblem
  }: UseQueryResult<ProblemType, Error> = getProblem(slug as string)

  console.log('problem', problem);

  return (
    <div className='grow flex flex-col items-center justify-center'>
      {isLoadingProblem ?
        <Loader size={30} /> :
        (problem && <div className='flex flex-col gap-6'>
          <header>
            <div className='flex items-center justify-between'>
              <h2 className='text-xl font-semibold'>{problem.name}</h2>
              <Badges badges={[problem.difficulty]} />
            </div>
            <div className='flex gap-2 pt-1'>
              <Badges badges={[...problem.source, problem.category]} />
            </div>
          </header>
          <article className='[&_pre]:text-wrap' dangerouslySetInnerHTML={{ __html: problem.description }
          } />

          <Accordion type="multiple">
            <AccordionItem value="Your answer">
              <AccordionTrigger className='text-center text-lg hover:no-underline'>Your answer</AccordionTrigger>
              <AccordionContent>
                {problem.contentSelf}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="Time complexity #1">
              <AccordionTrigger className='text-center text-lg hover:no-underline'>Time complexity #1</AccordionTrigger>
              <AccordionContent>
                {problem.contentTime}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="Space complexity #1">
              <AccordionTrigger className='text-center text-lg hover:no-underline'>Space complexity #1</AccordionTrigger>
              <AccordionContent>
                {problem.contentSpace}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>)
      }
    </div>
  )
}
