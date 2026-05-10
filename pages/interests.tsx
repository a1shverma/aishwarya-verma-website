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
  Image,
  Link,
  Select,
  Icon,
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import { FaExternalLinkAlt } from 'react-icons/fa'
import LineHeading from '@/components/LineHeading'
import books, { Book, BookStatus } from '@/data/books'
import movies, { Movie, MovieStatus } from '@/data/movies'
import tvshows, { TVShow, ShowStatus } from '@/data/tvshows'
import places from '@/data/travel'
import restaurants from '@/data/food'

// ─── Shared ───────────────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }): React.ReactElement {
  const emptyColor = useColorModeValue('gray.300', 'gray.600')
  return (
    <HStack spacing={0}>
      {[1, 2, 3, 4, 5].map(i => (
        <chakra.span key={i} fontSize='sm' color={i <= rating ? 'brand.400' : emptyColor}>★</chakra.span>
      ))}
    </HStack>
  )
}

function DialogueBlock({ dialogues, label = 'Fav Dialogues' }: { dialogues: { text: string; character?: string }[]; label?: string }): React.ReactElement {
  const [open, setOpen] = useState(false)
  const quoteBg = useColorModeValue('gray.50', 'gray.700')
  const mutedColor = useColorModeValue('gray.600', 'gray.300')
  return (
    <>
      <Button size='xs' variant='ghost' colorScheme='brand' px={0} onClick={() => setOpen(!open)}>
        {open ? `Hide ${label}` : `${label} (${dialogues.length})`}
      </Button>
      <Collapse in={open} animateOpacity>
        <VStack align='start' spacing={3} pt={1} width='full'>
          {dialogues.map((d, i) => (
            <Box key={i} bg={quoteBg} borderLeft='3px solid' borderColor='brand.400' borderRadius='md' px={4} py={3} width='full'>
              {d.character && <Text fontSize='xs' fontWeight='bold' color='brand.400' mb={1}>{d.character}</Text>}
              <chakra.p fontSize='sm' color={mutedColor} fontStyle='italic'>&ldquo;{d.text}&rdquo;</chakra.p>
            </Box>
          ))}
        </VStack>
      </Collapse>
    </>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }): React.ReactElement {
  const color = useColorModeValue('gray.500', 'gray.400')
  return (
    <Text fontSize='xs' fontWeight='bold' textTransform='uppercase' letterSpacing='wider' color={color} mb={5}>
      {children}
    </Text>
  )
}

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
  const placeholderBg = useColorModeValue('gray.100', 'gray.700')

  return (
    <Box bg={cardBg} border='1px solid' borderColor={border} borderRadius='xl' p={4} transition='all 0.2s' _hover={{ shadow: 'md', borderColor: 'brand.400' }}>
      <HStack align='start' spacing={4}>
        {book.cover ? (
          <Image
            src={book.cover}
            alt={book.title}
            width='72px'
            minW='72px'
            height='108px'
            objectFit='cover'
            borderRadius='md'
            fallback={<Box w='72px' minW='72px' h='108px' bg={placeholderBg} borderRadius='md' />}
          />
        ) : (
          <Flex w='72px' minW='72px' h='108px' bg={placeholderBg} borderRadius='md' align='center' justify='center'>
            <Text fontSize='2xl'>📖</Text>
          </Flex>
        )}
        <VStack align='start' spacing={2} flex={1} minW={0}>
          <HStack justify='space-between' width='full' flexWrap='wrap' gap={1} align='start'>
            <Text fontWeight='bold' fontSize='sm' lineHeight='short'>{book.title}</Text>
            <Tag size='sm' colorScheme={bookStatusConfig[book.status].color} borderRadius='full' flexShrink={0}>
              {bookStatusConfig[book.status].label}
            </Tag>
          </HStack>
          <Text fontSize='sm' color={mutedColor}>{book.author}</Text>
          {book.genre && <Tag size='sm' variant='subtle' colorScheme='purple' borderRadius='full'>{book.genre}</Tag>}
          {book.quotes && book.quotes.length > 0 && (
            <>
              <Button size='xs' variant='ghost' colorScheme='brand' px={0} onClick={() => setShowQuotes(!showQuotes)}>
                {showQuotes ? 'Hide quotes' : `Show quotes (${book.quotes.length})`}
              </Button>
              <Collapse in={showQuotes} animateOpacity style={{ width: '100%' }}>
                <VStack align='start' spacing={2} pt={1} width='full'>
                  {book.quotes.map((q, i) => (
                    <Box key={i} bg={quoteBg} borderLeft='3px solid' borderColor='brand.400' borderRadius='md' px={3} py={2} width='full'>
                      <chakra.p fontSize='xs' color={mutedColor} fontStyle='italic'>&ldquo;{q.text}&rdquo;</chakra.p>
                    </Box>
                  ))}
                </VStack>
              </Collapse>
            </>
          )}
        </VStack>
      </HStack>
    </Box>
  )
}

function BooksTab(): React.ReactElement {
  return (
    <VStack width='full' spacing={12} align='start'>
      {BOOK_STATUS_ORDER.map(status => {
        const filtered = books.filter(b => b.status === status)
        if (filtered.length === 0) return null
        return (
          <Box key={status} width='full'>
            <SectionHeading>{bookStatusConfig[status].label}</SectionHeading>
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

function MovieCard({ item }: { item: Movie }): React.ReactElement {
  const cardBg = useColorModeValue('white', 'gray.800')
  const border = useColorModeValue('gray.200', 'gray.700')
  const mutedColor = useColorModeValue('gray.600', 'gray.300')
  const placeholderBg = useColorModeValue('gray.100', 'gray.700')

  return (
    <Box bg={cardBg} border='1px solid' borderColor={border} borderRadius='xl' p={4} transition='all 0.2s' _hover={{ shadow: 'md', borderColor: 'brand.400' }}>
      <HStack align='start' spacing={4}>
        {item.cover ? (
          <Image
            src={item.cover}
            alt={item.title}
            width='80px'
            minW='80px'
            height='120px'
            objectFit='cover'
            borderRadius='md'
            fallback={<Box w='80px' minW='80px' h='120px' bg={placeholderBg} borderRadius='md' />}
          />
        ) : (
          <Flex w='80px' minW='80px' h='120px' bg={placeholderBg} borderRadius='md' align='center' justify='center'>
            <Text fontSize='2xl'>🎬</Text>
          </Flex>
        )}
        <VStack align='start' spacing={2} flex={1} minW={0}>
          <HStack justify='space-between' width='full' flexWrap='wrap' gap={1} align='start'>
            <Text fontWeight='bold' fontSize='sm' lineHeight='short'>{item.title}</Text>
            <Tag size='sm' colorScheme={movieStatusConfig[item.status].color} borderRadius='full' flexShrink={0}>
              {movieStatusConfig[item.status].label}
            </Tag>
          </HStack>
          <HStack spacing={2} flexWrap='wrap'>
            {item.director && <Text fontSize='xs' color={mutedColor}>{item.director}</Text>}
            {item.year && <Badge variant='outline' fontSize='xs'>{item.year}</Badge>}
          </HStack>
          {item.genre && <Tag size='sm' variant='subtle' colorScheme='teal' borderRadius='full'>{item.genre}</Tag>}
          {item.rating && <StarRating rating={item.rating} />}
          {item.thoughts && <Text fontSize='xs' color={mutedColor} fontStyle='italic'>&ldquo;{item.thoughts}&rdquo;</Text>}
          {item.dialogues && item.dialogues.length > 0 && <DialogueBlock dialogues={item.dialogues} />}
        </VStack>
      </HStack>
    </Box>
  )
}

function MoviesTab(): React.ReactElement {
  return (
    <VStack width='full' spacing={12} align='start'>
      {MOVIE_STATUS_ORDER.map(status => {
        const filtered = movies.filter(m => m.status === status)
        if (filtered.length === 0) return null
        return (
          <Box key={status} width='full'>
            <SectionHeading>{movieStatusConfig[status].label}</SectionHeading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
              {filtered.map(m => <MovieCard key={m.id} item={m} />)}
            </SimpleGrid>
          </Box>
        )
      })}
    </VStack>
  )
}

// ─── TV Shows ─────────────────────────────────────────────────────────────────

const showStatusConfig: Record<ShowStatus, { label: string; color: string }> = {
  watched: { label: 'Watched', color: 'green' },
  watching: { label: 'Currently Watching', color: 'brand' },
  'want-to-watch': { label: 'Want to Watch', color: 'gray' },
}
const SHOW_STATUS_ORDER: ShowStatus[] = ['watching', 'watched', 'want-to-watch']

function ShowCard({ show }: { show: TVShow }): React.ReactElement {
  const cardBg = useColorModeValue('white', 'gray.800')
  const border = useColorModeValue('gray.200', 'gray.700')
  const mutedColor = useColorModeValue('gray.600', 'gray.300')
  const placeholderBg = useColorModeValue('gray.100', 'gray.700')

  return (
    <Box bg={cardBg} border='1px solid' borderColor={border} borderRadius='xl' p={4} transition='all 0.2s' _hover={{ shadow: 'md', borderColor: 'brand.400' }}>
      <HStack align='start' spacing={4}>
        {show.cover ? (
          <Image
            src={show.cover}
            alt={show.title}
            width='80px'
            minW='80px'
            height='120px'
            objectFit='cover'
            borderRadius='md'
            fallback={<Box w='80px' minW='80px' h='120px' bg={placeholderBg} borderRadius='md' />}
          />
        ) : (
          <Flex w='80px' minW='80px' h='120px' bg={placeholderBg} borderRadius='md' align='center' justify='center'>
            <Text fontSize='2xl'>📺</Text>
          </Flex>
        )}
        <VStack align='start' spacing={2} flex={1} minW={0}>
          <HStack justify='space-between' width='full' flexWrap='wrap' gap={1} align='start'>
            <Text fontWeight='bold' fontSize='sm' lineHeight='short'>{show.title}</Text>
            <Tag size='sm' colorScheme={showStatusConfig[show.status].color} borderRadius='full' flexShrink={0}>
              {showStatusConfig[show.status].label}
            </Tag>
          </HStack>
          {show.genre && <Tag size='sm' variant='subtle' colorScheme='orange' borderRadius='full'>{show.genre}</Tag>}
          {show.rating && <StarRating rating={show.rating} />}
          {show.thoughts && <Text fontSize='xs' color={mutedColor} fontStyle='italic'>&ldquo;{show.thoughts}&rdquo;</Text>}
          {show.dialogues && show.dialogues.length > 0 && <DialogueBlock dialogues={show.dialogues} />}
        </VStack>
      </HStack>
    </Box>
  )
}

function TVShowsTab(): React.ReactElement {
  return (
    <VStack width='full' spacing={12} align='start'>
      {SHOW_STATUS_ORDER.map(status => {
        const filtered = tvshows.filter(s => s.status === status)
        if (filtered.length === 0) return null
        return (
          <Box key={status} width='full'>
            <SectionHeading>{showStatusConfig[status].label}</SectionHeading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
              {filtered.map(s => <ShowCard key={s.id} show={s} />)}
            </SimpleGrid>
          </Box>
        )
      })}
    </VStack>
  )
}

// ─── Travel ───────────────────────────────────────────────────────────────────

function TravelCard({ place }: { place: typeof places[0] }): React.ReactElement {
  const cardBg = useColorModeValue('white', 'gray.800')
  const border = useColorModeValue('gray.200', 'gray.700')
  const mutedColor = useColorModeValue('gray.500', 'gray.400')
  const placeholderBg = useColorModeValue('gray.100', 'gray.700')
  const [activeImg, setActiveImg] = useState(0)
  const hasImages = place.images && place.images.length > 0

  return (
    <Box bg={cardBg} border='1px solid' borderColor={border} borderRadius='xl' overflow='hidden' transition='all 0.2s' _hover={{ shadow: 'md', borderColor: 'brand.400' }}>
      {hasImages ? (
        <Box position='relative'>
          <Image
            src={place.images![activeImg]}
            alt={place.city}
            width='full'
            height='180px'
            objectFit='cover'
          />
          {place.images!.length > 1 && (
            <HStack position='absolute' bottom={2} right={2} spacing={1}>
              {place.images!.map((_, i) => (
                <Box
                  key={i}
                  as='button'
                  w='8px'
                  h='8px'
                  borderRadius='full'
                  bg={i === activeImg ? 'white' : 'whiteAlpha.600'}
                  onClick={() => setActiveImg(i)}
                  transition='all 0.15s'
                />
              ))}
            </HStack>
          )}
        </Box>
      ) : (
        <Flex bg={placeholderBg} height='180px' align='center' justify='center'>
          <Text fontSize='4xl'>{place.emoji}</Text>
        </Flex>
      )}
      <VStack align='start' spacing={1} p={4}>
        <HStack justify='space-between' width='full'>
          <Text fontWeight='bold'>{place.city}</Text>
          {hasImages && <Text fontSize='xl'>{place.emoji}</Text>}
        </HStack>
        <Text fontSize='sm' color={mutedColor}>{place.country}</Text>
        {place.highlight && <Text fontSize='sm' color={mutedColor} fontStyle='italic' pt={1}>{place.highlight}</Text>}
      </VStack>
    </Box>
  )
}

function TravelTab(): React.ReactElement {
  const visited = places.filter(p => p.visited)
  const wishlist = places.filter(p => !p.visited)

  return (
    <VStack width='full' spacing={12} align='start'>
      {[{ label: 'Been To', list: visited }, { label: 'Wishlist', list: wishlist }].map(({ label, list }) => (
        <Box key={label} width='full'>
          <SectionHeading>{label}</SectionHeading>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5}>
            {list.map(place => <TravelCard key={place.id} place={place} />)}
          </SimpleGrid>
        </Box>
      ))}
    </VStack>
  )
}

// ─── Food ─────────────────────────────────────────────────────────────────────

function FoodTab(): React.ReactElement {
  const cardBg = useColorModeValue('white', 'gray.800')
  const border = useColorModeValue('gray.200', 'gray.700')
  const mutedColor = useColorModeValue('gray.600', 'gray.300')
  const selectBg = useColorModeValue('white', 'gray.800')

  const cities = ['All', ...Array.from(new Set(restaurants.map(r => r.city))).sort()]
  const [cityFilter, setCityFilter] = useState('All')
  const [sortBy, setSortBy] = useState<'rating-desc' | 'rating-asc' | 'name'>('rating-desc')

  const filtered = restaurants
    .filter(r => cityFilter === 'All' || r.city === cityFilter)
    .sort((a, b) => {
      if (sortBy === 'rating-desc') return b.rating - a.rating
      if (sortBy === 'rating-asc') return a.rating - b.rating
      return a.name.localeCompare(b.name)
    })

  return (
    <VStack width='full' spacing={8} align='start'>
      <HStack spacing={4} flexWrap='wrap' width='full'>
        <Select size='sm' width='auto' bg={selectBg} borderRadius='lg' value={cityFilter} onChange={e => setCityFilter(e.target.value)}>
          {cities.map(c => <option key={c} value={c}>{c}</option>)}
        </Select>
        <Select size='sm' width='auto' bg={selectBg} borderRadius='lg' value={sortBy} onChange={e => setSortBy(e.target.value as typeof sortBy)}>
          <option value='rating-desc'>Rating: High to Low</option>
          <option value='rating-asc'>Rating: Low to High</option>
          <option value='name'>Name: A–Z</option>
        </Select>
        <Text fontSize='sm' color={mutedColor}>{filtered.length} restaurant{filtered.length !== 1 ? 's' : ''}</Text>
      </HStack>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} width='full'>
        {filtered.map(r => (
          <Box key={r.id} bg={cardBg} border='1px solid' borderColor={border} borderRadius='xl' p={5} transition='all 0.2s' _hover={{ shadow: 'md', borderColor: 'brand.400' }}>
            <VStack align='start' spacing={2}>
              <HStack justify='space-between' width='full' flexWrap='wrap' gap={2}>
                <Link href={r.mapsLink} isExternal>
                  <HStack spacing={1}>
                    <Text fontWeight='bold' fontSize='md'>{r.name}</Text>
                    <Icon as={FaExternalLinkAlt} boxSize='10px' color='brand.400' />
                  </HStack>
                </Link>
                <Badge variant='subtle' colorScheme='brand' borderRadius='full' px={2}>{r.city}</Badge>
              </HStack>
              {r.cuisine && <Tag size='sm' variant='subtle' colorScheme='orange' borderRadius='full'>{r.cuisine}</Tag>}
              <StarRating rating={r.rating} />
              <VStack align='start' spacing={1} pt={1}>
                <Text fontSize='xs' fontWeight='semibold' color={mutedColor} textTransform='uppercase' letterSpacing='wide'>Had</Text>
                <HStack flexWrap='wrap' gap={1}>
                  {r.dishes.map((dish, i) => <Tag key={i} size='sm' variant='outline' borderRadius='full'>{dish}</Tag>)}
                </HStack>
              </VStack>
              {r.notes && <Text fontSize='sm' color={mutedColor} fontStyle='italic' pt={1}>{r.notes}</Text>}
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const TABS = ['Books', 'Travel', 'Food', 'Movies', 'TV Shows']

export default function Interests(): React.ReactElement {
  const tabColor = useColorModeValue('gray.600', 'gray.300')
  const selectedTabColor = useColorModeValue('brand.600', 'brand.300')
  const selectedTabBg = useColorModeValue('brand.50', 'whiteAlpha.100')

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
              <Tab key={tab} fontSize='sm' fontWeight='semibold' color={tabColor} _selected={{ color: selectedTabColor, bg: selectedTabBg }}>
                {tab}
              </Tab>
            ))}
          </TabList>
          <TabPanels mt={10}>
            <TabPanel px={0}><BooksTab /></TabPanel>
            <TabPanel px={0}><TravelTab /></TabPanel>
            <TabPanel px={0}><FoodTab /></TabPanel>
            <TabPanel px={0}><MoviesTab /></TabPanel>
            <TabPanel px={0}><TVShowsTab /></TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  )
}
