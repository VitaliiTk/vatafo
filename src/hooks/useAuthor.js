import { useQuery } from '@tanstack/react-query'
import { AuthorService } from '../services/author.service'

export default function useAuthor(id) {
  const { data, isPending } = useQuery({
    queryKey: ['author', id],
    queryFn: () => AuthorService.getAuthorAllInfo(id)
  })
  return { data, isPending }
}
