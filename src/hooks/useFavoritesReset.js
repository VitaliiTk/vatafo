import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useFavoritesReset() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => {
      queryClient.setQueryData(['favorites'], [])
    }
  })
}
