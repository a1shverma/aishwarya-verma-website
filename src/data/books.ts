export type BookStatus = 'read' | 'reading' | 'want-to-read'

export interface Quote {
  text: string
}

export interface Book {
  id: string
  title: string
  author: string
  status: BookStatus
  genre?: string
  cover?: string
  quotes?: Quote[]
}

export const books: Book[] = [
  {
    id: 'the-alignment-problem',
    title: 'The Alignment Problem',
    author: 'Brian Christian',
    status: 'read',
    genre: 'AI / Non-fiction',
    cover: 'https://covers.openlibrary.org/b/isbn/0393635821-L.jpg',
    quotes: [
      { text: 'We are building systems that optimize, and we need to be precise about what we are asking them to optimize for.' },
      { text: 'The values we embed in our systems reflect the values of the people who build them.' },
    ],
  },
  {
    id: 'thinking-fast-and-slow',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    status: 'read',
    genre: 'Psychology',
    cover: 'https://covers.openlibrary.org/b/isbn/0374533555-L.jpg',
    quotes: [
      { text: 'Nothing in life is as important as you think it is, while you are thinking about it.' },
      { text: 'A reliable way to make people believe in falsehoods is frequent repetition, because familiarity is not easily distinguished from truth.' },
    ],
  },
  {
    id: 'sapiens',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    status: 'read',
    genre: 'History',
    cover: 'https://covers.openlibrary.org/b/isbn/0062316095-L.jpg',
    quotes: [
      { text: 'You could never convince a monkey to give you a banana by promising him limitless bananas after death in monkey heaven.' },
      { text: 'History is something that very few people have been doing while everyone else was ploughing fields and carrying water.' },
    ],
  },
  {
    id: 'shoe-dog',
    title: 'Shoe Dog',
    author: 'Phil Knight',
    status: 'reading',
    genre: 'Memoir / Business',
    cover: 'https://covers.openlibrary.org/b/isbn/1501135929-L.jpg',
    quotes: [
      { text: "Don't tell people how to do things, tell them what to do and let them surprise you with their results." },
    ],
  },
  {
    id: 'the-creative-act',
    title: 'The Creative Act: A Way of Being',
    author: 'Rick Rubin',
    status: 'want-to-read',
    genre: 'Creativity',
    cover: 'https://covers.openlibrary.org/b/isbn/0593652886-L.jpg',
  },
  {
    id: 'zero-to-one',
    title: 'Zero to One',
    author: 'Peter Thiel',
    status: 'want-to-read',
    genre: 'Business / Startups',
    cover: 'https://covers.openlibrary.org/b/isbn/0804139024-L.jpg',
  },
  {
    id: 'the-woman-in-me',
    title: 'The Woman in Me',
    author: 'Britney Spears',
    status: 'want-to-read',
    genre: 'Memoir',
    cover: 'https://covers.openlibrary.org/b/isbn/1668009048-L.jpg',
  },
]

export default books
