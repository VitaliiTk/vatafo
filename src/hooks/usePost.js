import { PostsService } from '../services/posts.service'
import { useQuery } from '@tanstack/react-query'

export default function usePost(id) {
  const { data, isPending } = useQuery({
    queryKey: ['posts', id],
    queryFn: () => PostsService.getById(id)
  })

  return { data, isPending }
}
