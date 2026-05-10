export type MovieStatus = 'watched' | 'watching' | 'want-to-watch'

export interface Dialogue {
  text: string
  character?: string
}

export interface Movie {
  id: string
  title: string
  director?: string
  year?: number
  status: MovieStatus
  genre?: string
  rating?: number
  cover?: string
  thoughts?: string
  dialogues?: Dialogue[]
}

export const movies: Movie[] = [
  {
    id: 'arrival',
    title: 'Arrival',
    director: 'Denis Villeneuve',
    year: 2016,
    status: 'watched',
    genre: 'Sci-fi',
    rating: 5,
    cover: 'https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg',
    thoughts: 'One of the most beautiful films ever made. Language, time, and grief — all at once.',
    dialogues: [
      { character: 'Louise Banks', text: 'If you could see your whole life from start to finish, would you change things?' },
      { character: 'Ian Donnelly', text: 'There are days that define your story beyond your life.' },
    ],
  },
  {
    id: 'parasite',
    title: 'Parasite',
    director: 'Bong Joon-ho',
    year: 2019,
    status: 'watched',
    genre: 'Thriller',
    rating: 5,
    cover: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    thoughts: 'A masterclass in tension and class commentary.',
    dialogues: [
      { character: 'Ki-woo', text: 'You know what kind of plan never fails? No plan. No plan at all.' },
    ],
  },
  {
    id: 'everything-everywhere',
    title: 'Everything Everywhere All at Once',
    director: 'Daniel Kwan & Daniel Scheinert',
    year: 2022,
    status: 'watched',
    genre: 'Sci-fi / Comedy',
    rating: 5,
    cover: 'https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg',
    dialogues: [
      { character: 'Waymond Wang', text: 'In another life, I would have really liked just doing laundry and taxes with you.' },
    ],
  },
  {
    id: 'oppenheimer',
    title: 'Oppenheimer',
    director: 'Christopher Nolan',
    year: 2023,
    status: 'watched',
    genre: 'Biography / Drama',
    rating: 4,
    cover: 'https://image.tmdb.org/t/p/w500/8Gxv8giaFIuDGiDjfEAfmLnA7kE.jpg',
  },
  {
    id: 'past-lives',
    title: 'Past Lives',
    director: 'Celine Song',
    year: 2023,
    status: 'want-to-watch',
    genre: 'Drama / Romance',
    cover: 'https://image.tmdb.org/t/p/w500/k3waqVXCD5d40EFzpXFLs4lSMsR.jpg',
  },
  {
    id: 'dune-2',
    title: 'Dune: Part Two',
    director: 'Denis Villeneuve',
    year: 2024,
    status: 'want-to-watch',
    genre: 'Sci-fi',
    cover: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
  },
]

export default movies
