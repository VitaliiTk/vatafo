import { useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
// import { useFavoritesReset } from './useFavoritesReset'

export default function useUserLogout() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  // const { mutate } = useFavoritesReset()
  // const { refetch } = useUser()

  // Кнопка "Выход" сбрасывает кэш
  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
    // window.location.href = '/'

    // Удаляем пользователя из кэша
    // queryClient.removeQueries({
    //   queryKey: ['user']
    // })
    // queryClient.invalidateQueries(['user'])

    queryClient.setQueryData(['user'], null) // четко срабатывает пока не нашел багов
    // mutate()
    // refetch()
  }
  return { logout }
}
