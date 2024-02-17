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
import Markdown from '@/components/Markdown';

export default function Problem() {
  const { getProblem } = useProblems()
  const { slug } = useParams()

  const {
    data: problem,
    isLoading: isLoadingProblem
  }: UseQueryResult<ProblemType, Error> = getProblem(slug as string)

  console.log('problem', problem);

  return (
    <div className={`grow flex flex-col ${isLoadingProblem ? 'justify-center items-center' : ''}`}>
      {isLoadingProblem ?
        <Loader size={30} /> :
        (problem && <div className='flex flex-col gap-6'>
          <header>
            <div className='flex items-center gap-2'>
              <h2 className='text-2xl font-semibold'>{problem.name}</h2>
              <Badges badges={[problem.difficulty]} />
            </div>
            <div className='flex flex-wrap gap-2 pt-1'>
              <Badges badges={[...problem.source, problem.category]} />
            </div>
          </header>
          <article>
            <h3 className='text-lg font-medium underline underline-offset-[3px] decoration-sky-400 pb-1'>Problem</h3>
            <div className='[&_pre]:text-wrap' dangerouslySetInnerHTML={{ __html: problem.description }
            } />
          </article>
          <section>
            <h3 className='text-lg font-medium underline underline-offset-[3px] decoration-sky-400 pb-1'>Solutions</h3>
            <Accordion type="multiple">
              <AccordionItem value="Your answer">
                <AccordionTrigger className='text-center hover:no-underline font-normal'>Your answer</AccordionTrigger>
                <AccordionContent>
                  <Markdown>
                    {problem.contentSelf}
                  </Markdown>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="Time complexity #1">
                <AccordionTrigger className='text-center hover:no-underline font-normal'>Time complexity #1</AccordionTrigger>
                <AccordionContent>
                  <Markdown>
                    {problem.contentTime}
                  </Markdown>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="Space complexity #1">
                <AccordionTrigger className='text-center hover:no-underline font-normal'>Space complexity #1</AccordionTrigger>
                <AccordionContent>
                  <Markdown>
                    {problem.contentSpace}
                  </Markdown>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>)
      }
    </div>
  )
}
