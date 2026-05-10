export type MovieStatus = 'watched' | 'watching' | 'want-to-watch'

export interface Movie {
  id: string
  title: string
  director?: string
  year?: number
  status: MovieStatus
  genre?: string
  rating?: number // out of 5
  thoughts?: string
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
    thoughts: 'One of the most beautiful films ever made. Language, time, and grief — all at once.',
  },
  {
    id: 'parasite',
    title: 'Parasite',
    director: 'Bong Joon-ho',
    year: 2019,
    status: 'watched',
    genre: 'Thriller',
    rating: 5,
    thoughts: 'A masterclass in tension and class commentary.',
  },
  {
    id: 'everything-everywhere',
    title: 'Everything Everywhere All at Once',
    director: 'Daniel Kwan & Daniel Scheinert',
    year: 2022,
    status: 'watched',
    genre: 'Sci-fi / Comedy',
    rating: 5,
  },
  {
    id: 'oppenheimer',
    title: 'Oppenheimer',
    director: 'Christopher Nolan',
    year: 2023,
    status: 'watched',
    genre: 'Biography / Drama',
    rating: 4,
  },
  {
    id: 'past-lives',
    title: 'Past Lives',
    director: 'Celine Song',
    year: 2023,
    status: 'want-to-watch',
    genre: 'Drama / Romance',
  },
  {
    id: 'dune-2',
    title: 'Dune: Part Two',
    director: 'Denis Villeneuve',
    year: 2024,
    status: 'want-to-watch',
    genre: 'Sci-fi',
  },
]

export default movies
