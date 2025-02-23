import { useQuery } from '@tanstack/react-query'
import { UserService } from '../services/user.service'

export default function useUser() {
  const {
    data: user,
    isLoading,
    refetch
  } = useQuery({
    queryKey: ['user'],
    queryFn: UserService.getMe,
    enabled: !!localStorage.getItem('token')
  })
  return { user, isLoading, refetch }
}
