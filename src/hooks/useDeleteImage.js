import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ImageServise } from '../services/image.service'

export default function useDeleteImage(id) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ImageServise.delete,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts', id])
    }
  })
}
