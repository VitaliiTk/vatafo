import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { FavoritesService } from '../services/favorites.service'
import useUser from './useUser'

export function useFavorites() {
  const { user } = useUser()
  const { data, error, refetch, isPending } = useQuery({
    queryKey: ['favorites'],
    queryFn: FavoritesService.getAll,
    enabled: !!user
  })
  return { data, error, refetch, isPending }
}

export function useAddFavorite() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: FavoritesService.addNew,
    onSuccess: () => {
      queryClient.invalidateQueries(['favorites'])
    }
  })
}

export function useRemoveFavorite() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: FavoritesService.remove,
    onSuccess: () => {
      queryClient.invalidateQueries(['favorites'])
    }
  })
}
