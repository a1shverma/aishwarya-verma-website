export type ShowStatus = 'watched' | 'watching' | 'want-to-watch'

export interface Dialogue {
  text: string
  character?: string
}

export interface TVShow {
  id: string
  title: string
  status: ShowStatus
  genre?: string
  rating?: number // out of 5
  thoughts?: string
  dialogues?: Dialogue[]
}

export const tvshows: TVShow[] = [
  {
    id: 'succession',
    title: 'Succession',
    status: 'watched',
    genre: 'Drama',
    rating: 5,
    thoughts: 'The best TV show ever made. Every character is a masterpiece.',
    dialogues: [
      { character: 'Logan Roy', text: 'I love you, but you are not serious people.' },
      { character: 'Tom Wambsgans', text: 'I wonder if the sad I\'d be without you is less than the sad I am with you.' },
    ],
  },
  {
    id: 'the-bear',
    title: 'The Bear',
    status: 'watched',
    genre: 'Drama / Comedy',
    rating: 5,
    thoughts: 'Chaotic, beautiful, and devastating. Episode 7 of Season 2 is television history.',
    dialogues: [
      { character: 'Carmy', text: 'Every second matters.' },
    ],
  },
  {
    id: 'white-lotus',
    title: 'The White Lotus',
    status: 'watched',
    genre: 'Dark Comedy / Drama',
    rating: 5,
  },
  {
    id: 'severance',
    title: 'Severance',
    status: 'watching',
    genre: 'Sci-fi / Thriller',
    rating: 5,
    thoughts: 'Nothing has made me think this hard about work-life balance.',
    dialogues: [
      { character: 'Mark S.', text: 'The work is mysterious and important.' },
    ],
  },
  {
    id: 'black-mirror',
    title: 'Black Mirror',
    status: 'watched',
    genre: 'Sci-fi / Anthology',
    rating: 4,
  },
  {
    id: 'shrinking',
    title: 'Shrinking',
    status: 'want-to-watch',
    genre: 'Comedy / Drama',
  },
  {
    id: 'slow-horses',
    title: 'Slow Horses',
    status: 'want-to-watch',
    genre: 'Thriller / Spy',
  },
]

export default tvshows
