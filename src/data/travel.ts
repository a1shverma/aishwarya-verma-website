export type PlaceType = 'city' | 'national-park'

export interface Place {
  id: string
  name: string
  country: string
  type: PlaceType
  emoji?: string
  visitedDate?: { month: string; year: number }
  highlight?: string
  images?: string[]
}

export const places: Place[] = [
  // ── Cities ──────────────────────────────────────────────────────────────────
  {
    id: 'new-york',
    name: 'New York City',
    country: 'United States',
    type: 'city',
    emoji: '🗽',
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
    name: 'Atlanta',
    country: 'United States',
    type: 'city',
    emoji: '🍑',
    visitedDate: { month: 'AUG', year: 2022 },
    highlight: 'Where it all started in the US.',
  },
  {
    id: 'seattle',
    name: 'Seattle',
    country: 'United States',
    type: 'city',
    emoji: '🌧️',
    visitedDate: { month: 'SEP', year: 2021 },
    highlight: 'Pike Place Market and endless coffee.',
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    country: 'India',
    type: 'city',
    emoji: '🇮🇳',
    visitedDate: { month: 'DEC', year: 2023 },
    highlight: 'Home home.',
  },

  // ── National Parks ───────────────────────────────────────────────────────────
  {
    id: 'grand-canyon',
    name: 'Grand Canyon',
    country: 'United States',
    type: 'national-park',
    emoji: '🏜️',
    visitedDate: { month: 'OCT', year: 2022 },
  },
  {
    id: 'yellowstone',
    name: 'Yellowstone',
    country: 'United States',
    type: 'national-park',
    emoji: '🌋',
    visitedDate: { month: 'JUL', year: 2023 },
  },
]

export default places
