import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ImageServise } from '../services/image.service'

export default function useUpdateMainImage(id) {
  // console.log(id)
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ImageServise.doMain,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts', id])
    }
  })
}
