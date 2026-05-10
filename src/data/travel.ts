export interface Place {
  id: string
  city: string
  country: string
  emoji?: string
  visited: boolean
  highlight?: string // one line memory or thing you loved
}

export const places: Place[] = [
  {
    id: 'new-york',
    city: 'New York City',
    country: 'United States',
    emoji: '🗽',
    visited: true,
    highlight: 'Home.',
  },
  {
    id: 'atlanta',
    city: 'Atlanta',
    country: 'United States',
    emoji: '🍑',
    visited: true,
    highlight: 'Where it all started in the US.',
  },
  {
    id: 'seattle',
    city: 'Seattle',
    country: 'United States',
    emoji: '🌧️',
    visited: true,
    highlight: 'Pike Place Market and endless coffee.',
  },
  {
    id: 'bangalore',
    city: 'Bangalore',
    country: 'India',
    emoji: '🇮🇳',
    visited: true,
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
