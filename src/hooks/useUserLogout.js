import { useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
// import { useFavoritesReset } from './useFavoritesReset'

export default function useUserLogout() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  // Кнопка "Выход" сбрасывает кэш
  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
    // window.location.href = '/'

    queryClient.setQueryData(['user'], null) // четко срабатывает пока не нашел багов
  }
  return { logout }
}
