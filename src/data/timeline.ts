export type EntryType =
  | 'book'
  | 'movie'
  | 'show'
  | 'restaurant'
  | 'travel'
  | 'song'
  | 'quote'
  | 'activity'
  | 'moment'

export interface TimelineEntry {
  type: EntryType
  title: string
  subtitle?: string   // author, artist, director, location, etc.
  note?: string       // personal take
  rating?: number     // out of 5
  link?: string
}

export interface MonthData {
  month: string       // 'MAY', 'APRIL', etc.
  year: number
  images?: string[]   // photos from this month
  entries: TimelineEntry[]
}

export const timeline: MonthData[] = [
  {
    month: 'MAY',
    year: 2026,
    images: [
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80',
      'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80',
      'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600&q=80',
    ],
    entries: [
      {
        type: 'book',
        title: 'Shoe Dog',
        subtitle: 'Phil Knight',
        note: 'Cannot put it down. The chaos of building Nike from nothing is terrifying and inspiring.',
        rating: 5,
      },
      {
        type: 'song',
        title: 'Die With A Smile',
        subtitle: 'Lady Gaga & Bruno Mars',
        note: 'On repeat. Every single morning.',
      },
      {
        type: 'restaurant',
        title: 'Nobu',
        subtitle: 'New York City',
        note: 'Black cod miso. Always.',
        rating: 5,
      },
      {
        type: 'quote',
        title: '"Don\'t tell people how to do things, tell them what to do and let them surprise you with their results."',
        subtitle: 'Phil Knight, Shoe Dog',
      },
      {
        type: 'activity',
        title: 'Started running',
        note: '3 miles, 3x a week. Slow but consistent.',
      },
      {
        type: 'moment',
        title: 'Published my first AI blog post',
        note: 'Something I had been putting off for months. Finally did it.',
      },
    ],
  },
  {
    month: 'APRIL',
    year: 2026,
    images: [
      'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?w=600&q=80',
      'https://images.unsplash.com/photo-1617581629397-a72507c3de9e?w=600&q=80',
    ],
    entries: [
      {
        type: 'show',
        title: 'Severance S2',
        subtitle: 'Apple TV+',
        note: 'Every episode felt like a gut punch. Nothing on TV does suspense like this.',
        rating: 5,
      },
      {
        type: 'travel',
        title: 'Washington D.C.',
        subtitle: 'United States',
        note: 'Cherry blossom season. Worth every crowd.',
      },
      {
        type: 'song',
        title: 'Espresso',
        subtitle: 'Sabrina Carpenter',
        note: 'It was that girl summer starter pack.',
      },
      {
        type: 'quote',
        title: '"The work is mysterious and important."',
        subtitle: 'Severance',
      },
      {
        type: 'restaurant',
        title: 'Le Bernardin',
        subtitle: 'New York City',
        note: 'Fine dining that actually lives up to the Michelin stars.',
        rating: 5,
      },
    ],
  },
  {
    month: 'MARCH',
    year: 2026,
    entries: [
      {
        type: 'book',
        title: 'Sapiens',
        subtitle: 'Yuval Noah Harari',
        note: 'Finished it. Changed how I think about everything.',
        rating: 5,
      },
      {
        type: 'movie',
        title: 'Anora',
        subtitle: 'Sean Baker, 2024',
        note: 'Totally unexpected. Could not look away.',
        rating: 4,
      },
      {
        type: 'activity',
        title: 'First pottery class',
        note: 'Terrible at it. Going back next week.',
      },
      {
        type: 'quote',
        title: '"You could never convince a monkey to give you a banana by promising limitless bananas after death in monkey heaven."',
        subtitle: 'Yuval Noah Harari, Sapiens',
      },
    ],
  },
]

export default timeline
