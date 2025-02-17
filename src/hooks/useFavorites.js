import { useQuery } from '@tanstack/react-query'
import { FavoritesService } from '../services/favorites.service'

export default function useFavorites() {
  const { data, error } = useQuery({
    queryKey: ['favorites'],
    queryFn: FavoritesService.getAll
  })
  return { data, error }
}
