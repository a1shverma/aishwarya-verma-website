export interface Restaurant {
  id: string
  name: string
  city: string
  country?: string
  cuisine?: string
  mapsLink: string
  dishes: string[]
  rating: number // out of 5
  notes?: string
}

export const restaurants: Restaurant[] = [
  {
    id: 'nobu-nyc',
    name: 'Nobu',
    city: 'New York City',
    country: 'United States',
    cuisine: 'Japanese',
    mapsLink: 'https://maps.app.goo.gl/example',
    dishes: ['Black Cod Miso', 'Rock Shrimp Tempura'],
    rating: 5,
    notes: 'The black cod is life-changing. Non-negotiable order.',
  },
  {
    id: 'tatsu-ramen-nyc',
    name: 'Tatsu Ramen',
    city: 'New York City',
    country: 'United States',
    cuisine: 'Japanese',
    mapsLink: 'https://maps.app.goo.gl/example',
    dishes: ['Mother Ramen', 'Truffle Ramen'],
    rating: 4,
  },
  {
    id: 'slutty-vegan-atlanta',
    name: 'Slutty Vegan',
    city: 'Atlanta',
    country: 'United States',
    cuisine: 'American / Vegan',
    mapsLink: 'https://maps.app.goo.gl/example',
    dishes: ['One Night Stand', 'Hollywood Hooker'],
    rating: 4,
    notes: 'The hype is real. The names are ridiculous in the best way.',
  },
  {
    id: 'bacchanalia-atlanta',
    name: 'Bacchanalia',
    city: 'Atlanta',
    country: 'United States',
    cuisine: 'American Fine Dining',
    mapsLink: 'https://maps.app.goo.gl/example',
    dishes: ['Chef\'s Tasting Menu'],
    rating: 5,
    notes: 'Best fine dining in Atlanta. Period.',
  },
  {
    id: 'canlis-seattle',
    name: 'Canlis',
    city: 'Seattle',
    country: 'United States',
    cuisine: 'American Fine Dining',
    mapsLink: 'https://maps.app.goo.gl/example',
    dishes: ['Wagyu', 'Dungeness Crab'],
    rating: 5,
    notes: 'The view of Lake Union + the food = perfection.',
  },
  {
    id: 'mtc-bangalore',
    name: 'MTR - Mavalli Tiffin Room',
    city: 'Bangalore',
    country: 'India',
    cuisine: 'South Indian',
    mapsLink: 'https://maps.app.goo.gl/example',
    dishes: ['Masala Dosa', 'Rava Idli', 'Filter Coffee'],
    rating: 5,
    notes: 'A Bangalore institution. Queue is always worth it.',
  },
]

export default restaurants
