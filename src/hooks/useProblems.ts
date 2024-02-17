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
    getFilterOptions: () => {
      return useQuery({
        queryKey: ['options'],
        queryFn: problemsApi.getFilterOptions
      })
    },
  }
}
