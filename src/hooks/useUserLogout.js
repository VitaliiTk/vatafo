import { useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

export default function useUserLogout() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  // Кнопка "Выход" сбрасывает кэш
  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')

    // Удаляем пользователя из кэша
    queryClient.removeQueries({
      queryKey: ['user']
    })
  }
  return { logout }
}
