import { atom } from 'jotai'

export const userAtom = atom({
  id: '001',
  userName: 'jennaLove',
  email: 'ortega@gmail.com',
  password: 'ortega123',
  avatarURL:
    'https://cdn.britannica.com/56/243656-050-2E4A5036/Jenna-Ortega-2023.jpg?w=400&h=300&c=crop',
  status: 'free',
  created_at: 'february 03 2025 19:28'
})
export const modalAtom = atom(false)
