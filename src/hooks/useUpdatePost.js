import { useMutation, useQueryClient } from '@tanstack/react-query'
import { PostsService } from '../services/posts.service'

export default function useUpdatePost(id) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: PostsService.updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts', id])
    }
  })
}
