import { useQuery } from '@tanstack/react-query'
import { PostsService } from '../services/posts.service'

export default function useAllPosts() {
  const { data, error } = useQuery({
    queryKey: ['posts'],
    queryFn: PostsService.getAll
  })

  return { data, error }
}
