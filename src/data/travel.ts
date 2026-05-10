export interface Place {
  id: string
  city: string
  country: string
  emoji?: string
  visited: boolean
  visitedDate?: { month: string; year: number }
  highlight?: string
  images?: string[]
}

export const places: Place[] = [
  {
    id: 'new-york',
    city: 'New York City',
    country: 'United States',
    emoji: '🗽',
    visited: true,
    visitedDate: { month: 'JAN', year: 2023 },
    highlight: 'Home.',
    images: [
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
      'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80',
      'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=800&q=80',
    ],
  },
  {
    id: 'atlanta',
    city: 'Atlanta',
    country: 'United States',
    emoji: '🍑',
    visited: true,
    visitedDate: { month: 'AUG', year: 2022 },
    highlight: 'Where it all started in the US.',
  },
  {
    id: 'seattle',
    city: 'Seattle',
    country: 'United States',
    emoji: '🌧️',
    visited: true,
    visitedDate: { month: 'SEP', year: 2021 },
    highlight: 'Pike Place Market and endless coffee.',
  },
  {
    id: 'bangalore',
    city: 'Bangalore',
    country: 'India',
    emoji: '🇮🇳',
    visited: true,
    visitedDate: { month: 'DEC', year: 2023 },
    highlight: 'Home home.',
  },
  {
    id: 'tokyo',
    city: 'Tokyo',
    country: 'Japan',
    emoji: '🗼',
    visited: false,
  },
  {
    id: 'paris',
    city: 'Paris',
    country: 'France',
    emoji: '🗼',
    visited: false,
  },
  {
    id: 'london',
    city: 'London',
    country: 'United Kingdom',
    emoji: '🎡',
    visited: false,
  },
]

export default places
