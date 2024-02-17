import useProblemsApi from './useProblemsApi'
import { useQuery } from '@tanstack/react-query'

export default function useProblems() {
  const problemsApi = useProblemsApi()

  return {
    getProblems: () => {
      return useQuery({
        queryKey: ['problems'],
        queryFn: problemsApi.getProblems
      })
    },
    getProblem: (slug: string) => {
      return useQuery({
        queryKey: ['problem'],
        queryFn: () => problemsApi.getProblem(slug)
      })
    },
    getFilterOptions: () => {
      return useQuery({
        queryKey: ['options'],
        queryFn: problemsApi.getFilterOptions
      })
    },
  }
}
