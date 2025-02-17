import { useQuery } from '@tanstack/react-query'
import { PostsService } from '../services/posts.service'
import useUser from './useUser'

export default function useAllUserPosts() {
  const { user } = useUser()

  const { data, error } = useQuery({
    queryKey: ['userposts'],
    queryFn: PostsService.getAllByUser,
    enabled: !!user
  })

  return { data, error }
}
