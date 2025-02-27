import { useAtomValue } from 'jotai'
import { siteTitleAtom } from '../store/namesAtom'

export function useSiteName() {
  const siteName = useAtomValue(siteTitleAtom)
  return siteName
}
