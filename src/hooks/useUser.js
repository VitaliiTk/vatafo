import { useQueryClient } from '@tanstack/react-query'

export default function useUser() {
  const queryClient = useQueryClient()
  const user = queryClient.getQueryData(['user'])
  return { user }
}
