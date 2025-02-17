import { useQuery, useQueryClient } from '@tanstack/react-query'
import { UserService } from '../services/user.service'

export default function useUser() {
  // const queryClient = useQueryClient()
  // const user = queryClient.getQueryData(['user'])

  const { data: user, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: UserService.getMe,
    enabled: !!localStorage.getItem('token')
  })
  return { user, isLoading }
}
