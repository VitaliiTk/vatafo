import { useMutation, useQueryClient } from '@tanstack/react-query'
import { PostsService } from '../services/posts.service'

export default function useDeletepost(postId) {
  const queryClient = useQueryClient()

  const deleteMutation = useMutation({
    mutationFn: () => PostsService.deletePost(postId),
    onSuccess: () => {
      console.log('delete success')
      queryClient.invalidateQueries('userposts')
    }
  })

  return { deleteMutation }
}
