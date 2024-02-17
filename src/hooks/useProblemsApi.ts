import useHttp from './useHttp'

export default function useProblemsApi() {
  const http = useHttp()
  return {
    getProblems: async () => {
      return http.getOnce("/problems").then(res => res.data)
    },
    getFilterOptions: async () => {
      return http.getOnce("/options").then(res => res.data)
    },

  }
}
