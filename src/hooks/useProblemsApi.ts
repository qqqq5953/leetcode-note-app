import useHttp from './useHttp'

export default function useProblemsApi() {
  const http = useHttp()
  return {
    getProblems: async () => {
      return http.getOnce("/problems").then(res => res.data)
    },
    getProblem: async (slug: string) => {
      return http.getOnce(`/problem/${slug}`).then(res => res.data)
    },
    getFilterOptions: async () => {
      return http.getOnce("/options").then(res => res.data)
    },

  }
}