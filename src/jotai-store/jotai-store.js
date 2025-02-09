import { atom } from 'jotai'

export const userAtom = atom({
  id: 1,
  userName: 'Margot_Robbie',
  email: 'margot@gmail.com',
  password: 'margo',
  avatarURL: 'https://pbs.twimg.com/media/GKdnYMNXwAAjzJw.jpg:large',
  status: 'free',
  created_at: 'february 03 2025 19:28'
})
export const modalAtom = atom(false)
