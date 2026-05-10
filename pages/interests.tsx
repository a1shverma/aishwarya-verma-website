import React, { useState } from 'react'
import {
  Box,
  Flex,
  Text,
  SimpleGrid,
  Tag,
  VStack,
  HStack,
  Collapse,
  useColorModeValue,
  chakra,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Badge,
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import LineHeading from '@/components/LineHeading'
import books, { Book, BookStatus } from '@/data/books'
import movies, { Movie, MovieStatus } from '@/data/movies'
import places from '@/data/travel'

// ─── Books ────────────────────────────────────────────────────────────────────

const bookStatusConfig: Record<BookStatus, { label: string; color: string }> = {
  read: { label: 'Read', color: 'green' },
  reading: { label: 'Currently Reading', color: 'brand' },
  'want-to-read': { label: 'Want to Read', color: 'gray' },
}
const BOOK_STATUS_ORDER: BookStatus[] = ['reading', 'read', 'want-to-read']

function BookCard({ book }: { book: Book }): React.ReactElement {
  const [showQuotes, setShowQuotes] = useState(false)
  const cardBg = useColorModeValue('white', 'gray.800')
  const border = useColorModeValue('gray.200', 'gray.700')
  const quoteBg = useColorModeValue('gray.50', 'gray.700')
  const mutedColor = useColorModeValue('gray.600', 'gray.300')
  const hasQuotes = book.quotes && book.quotes.length > 0

  return (
    <Box
      bg={cardBg}
      border='1px solid'
      borderColor={border}
      borderRadius='xl'
      p={5}
      transition='all 0.2s'
      _hover={{ shadow: 'md', borderColor: 'brand.400' }}
    >
      <VStack align='start' spacing={2}>
        <HStack justify='space-between' width='full' flexWrap='wrap' gap={2}>
          <Text fontWeight='bold' fontSize='md' lineHeight='short'>
            {book.title}
          </Text>
          <Tag size='sm' colorScheme={bookStatusConfig[book.status].color} borderRadius='full' flexShrink={0}>
            {bookStatusConfig[book.status].label}
          </Tag>
        </HStack>
        <Text fontSize='sm' color={mutedColor}>{book.author}</Text>
        {book.genre && (
          <Tag size='sm' variant='subtle' colorScheme='purple' borderRadius='full'>{book.genre}</Tag>
        )}
        {hasQuotes && (
          <>
            <Button size='xs' variant='ghost' colorScheme='brand' mt={1} px={0} onClick={() => setShowQuotes(!showQuotes)}>
              {showQuotes ? 'Hide quotes' : `Show quotes (${book.quotes!.length})`}
            </Button>
            <Collapse in={showQuotes} animateOpacity>
              <VStack align='start' spacing={3} pt={1} width='full'>
                {book.quotes!.map((quote, i) => (
                  <Box key={i} bg={quoteBg} borderLeft='3px solid' borderColor='brand.400' borderRadius='md' px={4} py={3} width='full'>
                    <chakra.p fontSize='sm' color={mutedColor} fontStyle='italic'>&ldquo;{quote.text}&rdquo;</chakra.p>
                  </Box>
                ))}
              </VStack>
            </Collapse>
          </>
        )}
      </VStack>
    </Box>
  )
}

function BooksTab(): React.ReactElement {
  const sectionColor = useColorModeValue('gray.500', 'gray.400')
  return (
    <VStack width='full' spacing={12} align='start'>
      {BOOK_STATUS_ORDER.map(status => {
        const filtered = books.filter(b => b.status === status)
        if (filtered.length === 0) return null
        return (
          <Box key={status} width='full'>
            <Text fontSize='xs' fontWeight='bold' textTransform='uppercase' letterSpacing='wider' color={sectionColor} mb={5}>
              {bookStatusConfig[status].label}
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
              {filtered.map(book => <BookCard key={book.id} book={book} />)}
            </SimpleGrid>
          </Box>
        )
      })}
    </VStack>
  )
}

// ─── Movies ───────────────────────────────────────────────────────────────────

const movieStatusConfig: Record<MovieStatus, { label: string; color: string }> = {
  watched: { label: 'Watched', color: 'green' },
  watching: { label: 'Watching', color: 'brand' },
  'want-to-watch': { label: 'Want to Watch', color: 'gray' },
}
const MOVIE_STATUS_ORDER: MovieStatus[] = ['watching', 'watched', 'want-to-watch']

function StarRating({ rating }: { rating: number }): React.ReactElement {
  return (
    <HStack spacing={0}>
      {[1, 2, 3, 4, 5].map(i => (
        <chakra.span key={i} fontSize='sm' color={i <= rating ? 'brand.400' : 'gray.300'}>★</chakra.span>
      ))}
    </HStack>
  )
}

function MovieCard({ movie }: { movie: Movie }): React.ReactElement {
  const cardBg = useColorModeValue('white', 'gray.800')
  const border = useColorModeValue('gray.200', 'gray.700')
  const mutedColor = useColorModeValue('gray.600', 'gray.300')

  return (
    <Box
      bg={cardBg}
      border='1px solid'
      borderColor={border}
      borderRadius='xl'
      p={5}
      transition='all 0.2s'
      _hover={{ shadow: 'md', borderColor: 'brand.400' }}
    >
      <VStack align='start' spacing={2}>
        <HStack justify='space-between' width='full' flexWrap='wrap' gap={2}>
          <Text fontWeight='bold' fontSize='md' lineHeight='short'>{movie.title}</Text>
          <Tag size='sm' colorScheme={movieStatusConfig[movie.status].color} borderRadius='full' flexShrink={0}>
            {movieStatusConfig[movie.status].label}
          </Tag>
        </HStack>
        <HStack spacing={2} flexWrap='wrap'>
          {movie.director && <Text fontSize='sm' color={mutedColor}>{movie.director}</Text>}
          {movie.year && <Badge variant='outline' fontSize='xs'>{movie.year}</Badge>}
        </HStack>
        {movie.genre && (
          <Tag size='sm' variant='subtle' colorScheme='teal' borderRadius='full'>{movie.genre}</Tag>
        )}
        {movie.rating && <StarRating rating={movie.rating} />}
        {movie.thoughts && (
          <Text fontSize='sm' color={mutedColor} fontStyle='italic' pt={1}>&ldquo;{movie.thoughts}&rdquo;</Text>
        )}
      </VStack>
    </Box>
  )
}

function MoviesTab(): React.ReactElement {
  const sectionColor = useColorModeValue('gray.500', 'gray.400')
  return (
    <VStack width='full' spacing={12} align='start'>
      {MOVIE_STATUS_ORDER.map(status => {
        const filtered = movies.filter(m => m.status === status)
        if (filtered.length === 0) return null
        return (
          <Box key={status} width='full'>
            <Text fontSize='xs' fontWeight='bold' textTransform='uppercase' letterSpacing='wider' color={sectionColor} mb={5}>
              {movieStatusConfig[status].label}
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
              {filtered.map(movie => <MovieCard key={movie.id} movie={movie} />)}
            </SimpleGrid>
          </Box>
        )
      })}
    </VStack>
  )
}

// ─── Travel ───────────────────────────────────────────────────────────────────

function TravelTab(): React.ReactElement {
  const cardBg = useColorModeValue('white', 'gray.800')
  const border = useColorModeValue('gray.200', 'gray.700')
  const mutedColor = useColorModeValue('gray.500', 'gray.400')
  const visited = places.filter(p => p.visited)
  const wishlist = places.filter(p => !p.visited)
  const sectionColor = useColorModeValue('gray.500', 'gray.400')

  return (
    <VStack width='full' spacing={12} align='start'>
      {[{ label: 'Been To', list: visited }, { label: 'Wishlist', list: wishlist }].map(({ label, list }) => (
        <Box key={label} width='full'>
          <Text fontSize='xs' fontWeight='bold' textTransform='uppercase' letterSpacing='wider' color={sectionColor} mb={5}>
            {label}
          </Text>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5}>
            {list.map(place => (
              <Box
                key={place.id}
                bg={cardBg}
                border='1px solid'
                borderColor={border}
                borderRadius='xl'
                p={5}
                transition='all 0.2s'
                _hover={{ shadow: 'md', borderColor: 'brand.400' }}
              >
                <VStack align='start' spacing={1}>
                  <Text fontSize='2xl'>{place.emoji}</Text>
                  <Text fontWeight='bold'>{place.city}</Text>
                  <Text fontSize='sm' color={mutedColor}>{place.country}</Text>
                  {place.highlight && (
                    <Text fontSize='sm' color={mutedColor} fontStyle='italic' pt={1}>{place.highlight}</Text>
                  )}
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      ))}
    </VStack>
  )
}

// ─── Coming Soon ─────────────────────────────────────────────────────────────

function ComingSoonTab({ label }: { label: string }): React.ReactElement {
  const mutedColor = useColorModeValue('gray.400', 'gray.500')
  return (
    <Flex direction='column' align='center' justify='center' py={24} width='full'>
      <Text fontSize='4xl'>🚧</Text>
      <Text mt={4} fontWeight='semibold' fontSize='lg'>Coming soon</Text>
      <Text color={mutedColor} mt={2} fontSize='sm'>{label} is in the works.</Text>
    </Flex>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const TABS = ['Books', 'Travel', 'Food', 'Movies', 'Photography']

export default function Interests(): React.ReactElement {
  const tabColor = useColorModeValue('gray.600', 'gray.300')
  const selectedTabColor = useColorModeValue('brand.600', 'brand.300')

  return (
    <>
      <NextSeo title='Interests' />
      <Flex direction='column' alignItems='center' width='full' minH='100vh' mx='auto' maxW='5xl' px={4} py='28'>
        <LineHeading fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }} textAlign='center'>
          Interests
        </LineHeading>
        <Text mt={3} textAlign='center' maxW='lg'>
          A peek into the things that keep me curious outside of work.
        </Text>

        <Tabs width='full' mt={12} isLazy colorScheme='brand' variant='soft-rounded'>
          <TabList flexWrap='wrap' gap={2} justifyContent={{ base: 'center', md: 'flex-start' }}>
            {TABS.map(tab => (
              <Tab
                key={tab}
                fontSize='sm'
                fontWeight='semibold'
                color={tabColor}
                _selected={{ color: selectedTabColor, bg: useColorModeValue('brand.50', 'whiteAlpha.100') }}
              >
                {tab}
              </Tab>
            ))}
          </TabList>

          <TabPanels mt={10}>
            <TabPanel px={0}><BooksTab /></TabPanel>
            <TabPanel px={0}><TravelTab /></TabPanel>
            <TabPanel px={0}><ComingSoonTab label='Food' /></TabPanel>
            <TabPanel px={0}><MoviesTab /></TabPanel>
            <TabPanel px={0}><ComingSoonTab label='Photography' /></TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  )
}
