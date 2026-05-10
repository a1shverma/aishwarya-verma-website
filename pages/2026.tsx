import React from 'react'
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  chakra,
  Badge,
  Link,
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import timeline, { TimelineEntry, EntryType } from '@/data/timeline'

// ─── Entry type config ────────────────────────────────────────────────────────

const typeConfig: Record<EntryType, { icon: string; label: string; accent: string }> = {
  book:       { icon: '📚', label: 'Reading',      accent: '#9F7AEA' }, // purple
  movie:      { icon: '🎬', label: 'Watched',       accent: '#38B2AC' }, // teal
  show:       { icon: '📺', label: 'Watching',      accent: '#ED8936' }, // orange
  restaurant: { icon: '🍽️', label: 'Ate at',        accent: '#FC8181' }, // red
  travel:     { icon: '✈️', label: 'Traveled to',   accent: '#63B3ED' }, // blue
  song:       { icon: '🎵', label: 'On repeat',     accent: '#F687B3' }, // pink
  quote:      { icon: '💬', label: 'Resonated',     accent: '#F6AD55' }, // amber
  activity:   { icon: '🎯', label: 'Tried',         accent: '#68D391' }, // green
  moment:     { icon: '✨', label: 'Moment',        accent: '#A0AEC0' }, // gray
}

// ─── Star rating ──────────────────────────────────────────────────────────────

function Stars({ rating }: { rating: number }): React.ReactElement {
  return (
    <HStack spacing={0}>
      {[1,2,3,4,5].map(i => (
        <chakra.span key={i} fontSize='xs' color={i <= rating ? '#F6AD55' : 'gray.300'}>★</chakra.span>
      ))}
    </HStack>
  )
}

// ─── Entry card ───────────────────────────────────────────────────────────────

function EntryCard({ entry }: { entry: TimelineEntry }): React.ReactElement {
  const cfg = typeConfig[entry.type]
  const cardBg = useColorModeValue('white', 'gray.800')
  const border = useColorModeValue('gray.100', 'gray.700')
  const mutedColor = useColorModeValue('gray.500', 'gray.400')
  const titleColor = useColorModeValue('gray.800', 'gray.100')
  const isQuote = entry.type === 'quote'

  const inner = (
    <Box
      bg={cardBg}
      border='1px solid'
      borderColor={border}
      borderRadius='2xl'
      overflow='hidden'
      height='full'
      transition='all 0.2s'
      _hover={{ shadow: 'md', transform: 'translateY(-2px)' }}
      position='relative'
    >
      {/* Colored top accent bar */}
      <Box h='3px' bg={cfg.accent} />

      <Box p={4}>
        {/* Type label */}
        <HStack spacing={1} mb={3}>
          <Text fontSize='xs'>{cfg.icon}</Text>
          <Text
            fontSize='10px'
            fontWeight='bold'
            textTransform='uppercase'
            letterSpacing='0.1em'
            color={cfg.accent}
          >
            {cfg.label}
          </Text>
        </HStack>

        {/* Title */}
        <Text
          fontWeight={isQuote ? 'normal' : 'bold'}
          fontSize={isQuote ? 'sm' : 'md'}
          color={titleColor}
          fontStyle={isQuote ? 'italic' : 'normal'}
          lineHeight='short'
          mb={1}
        >
          {entry.title}
        </Text>

        {/* Subtitle */}
        {entry.subtitle && (
          <Text fontSize='xs' color={mutedColor} mb={2}>{entry.subtitle}</Text>
        )}

        {/* Rating */}
        {entry.rating && <Stars rating={entry.rating} />}

        {/* Note */}
        {entry.note && (
          <Text fontSize='xs' color={mutedColor} mt={2} lineHeight='tall'>
            {entry.note}
          </Text>
        )}
      </Box>
    </Box>
  )

  if (entry.link) {
    return (
      <Link href={entry.link} isExternal _hover={{ textDecoration: 'none' }}>
        {inner}
      </Link>
    )
  }
  return inner
}

// ─── Photo strip ─────────────────────────────────────────────────────────────

function PhotoStrip({ images }: { images: string[] }): React.ReactElement {
  return (
    <Flex
      gap={3}
      overflowX='auto'
      pb={2}
      mb={6}
      sx={{
        '&::-webkit-scrollbar': { height: '4px' },
        '&::-webkit-scrollbar-track': { bg: 'transparent' },
        '&::-webkit-scrollbar-thumb': { bg: 'gray.300', borderRadius: 'full' },
      }}
    >
      {images.map((src, i) => (
        <Box
          key={i}
          flexShrink={0}
          w={{ base: '160px', md: '200px' }}
          h={{ base: '110px', md: '140px' }}
          borderRadius='xl'
          overflow='hidden'
          transform={`rotate(${i % 2 === 0 ? '-1.2' : '1.2'}deg)`}
          transition='transform 0.2s'
          _hover={{ transform: 'rotate(0deg) scale(1.03)' }}
          boxShadow='md'
        >
          <Box
            as='img'
            src={src}
            alt={`photo-${i}`}
            w='full'
            h='full'
            objectFit='cover'
          />
        </Box>
      ))}
    </Flex>
  )
}

// ─── Month section ────────────────────────────────────────────────────────────

function MonthSection({
  month,
  year,
  entries,
  images,
  isFirst,
  isLast,
}: {
  month: string
  year: number
  entries: TimelineEntry[]
  images?: string[]
  isFirst: boolean
  isLast: boolean
}): React.ReactElement {
  const lineColor = useColorModeValue('gray.200', 'gray.700')
  const monthColor = useColorModeValue('gray.800', 'white')
  const mutedColor = useColorModeValue('gray.400', 'gray.500')
  const watermarkColor = useColorModeValue('rgba(0,0,0,0.04)', 'rgba(255,255,255,0.03)')

  // Split entries: quotes go full width, rest go in grid
  const quotes = entries.filter(e => e.type === 'quote')
  const rest = entries.filter(e => e.type !== 'quote')

  return (
    <Flex width='full' gap={{ base: 4, md: 10 }}>
      {/* ── Timeline spine ── */}
      <Flex direction='column' align='center' flexShrink={0} w='40px'>
        {/* Line above dot */}
        <Box w='2px' flex={1} bg={isFirst ? 'transparent' : lineColor} minH='16px' />

        {/* Dot */}
        <Box
          w='12px'
          h='12px'
          borderRadius='full'
          bg={isFirst ? 'brand.500' : 'transparent'}
          border='2px solid'
          borderColor={isFirst ? 'brand.500' : lineColor}
          flexShrink={0}
          position='relative'
        >
          {isFirst && (
            <Box
              position='absolute'
              inset='-5px'
              borderRadius='full'
              border='1px solid'
              borderColor='brand.500'
              opacity={0.3}
            />
          )}
        </Box>

        {/* Line below dot */}
        <Box w='2px' flex={1} bg={isLast ? 'transparent' : lineColor} />
      </Flex>

      {/* ── Month content ── */}
      <Box flex={1} pb={20} pt={1} position='relative' overflow='hidden'>
        {/* Watermark month name */}
        <Text
          position='absolute'
          top='-10px'
          right='-10px'
          fontSize='8xl'
          fontWeight='900'
          letterSpacing='-0.06em'
          lineHeight={1}
          color={watermarkColor}
          pointerEvents='none'
          userSelect='none'
          zIndex={0}
          display={{ base: 'none', md: 'block' }}
        >
          {month.toUpperCase()}
        </Text>

        {/* Month header */}
        <HStack mb={6} spacing={3} align='center' position='relative' zIndex={1}>
          <Box h='2px' w='20px' bg='brand.500' flexShrink={0} />
          <Text
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight='900'
            letterSpacing='-0.03em'
            color={monthColor}
            lineHeight={1}
          >
            {month}
          </Text>
          <Text fontSize='xs' color={mutedColor} fontWeight='bold' letterSpacing='0.1em'>{year}</Text>
          {isFirst && (
            <Badge
              colorScheme='brand'
              borderRadius='full'
              fontSize='9px'
              px={2}
              py={0.5}
              fontWeight='bold'
              letterSpacing='0.08em'
            >
              NOW
            </Badge>
          )}
        </HStack>

        {/* Photo strip */}
        {images && images.length > 0 && (
          <Box position='relative' zIndex={1}>
            <PhotoStrip images={images} />
          </Box>
        )}

        {/* Cards grid */}
        <Box
          display='grid'
          gridTemplateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={4}
          position='relative'
          zIndex={1}
        >
          {rest.map((entry, i) => (
            <Box key={i}>
              <EntryCard entry={entry} />
            </Box>
          ))}
        </Box>

        {/* Quotes — full width, below the grid */}
        {quotes.length > 0 && (
          <Box mt={4} display='grid' gridTemplateColumns='1fr' gap={4} position='relative' zIndex={1}>
            {quotes.map((entry, i) => (
              <EntryCard key={i} entry={entry} />
            ))}
          </Box>
        )}
      </Box>
    </Flex>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Year2026(): React.ReactElement {
  const textColor = useColorModeValue('gray.800', 'gray.50')
  const mutedColor = useColorModeValue('gray.500', 'gray.400')

  return (
    <>
      <NextSeo title='2026' />
      <Box width='full' maxW='4xl' mx='auto' px={{ base: 4, md: 8 }} pt={{ base: 32, md: 40 }} pb='20'>
        {/* Header */}
        <Box mb={16}>
          <Box h='2px' w='40px' bg='brand.500' mb={6} />
          <Text
            fontSize={{ base: '6xl', md: '9xl' }}
            fontWeight='900'
            letterSpacing='-0.04em'
            lineHeight={0.88}
            color={textColor}
          >
            2026.
          </Text>
          <Text fontSize='sm' color={mutedColor} mt={5} lineHeight='1.8'>
            A running log of the year — month by month.
          </Text>
        </Box>

        {/* Timeline */}
        <VStack spacing={0} align='stretch'>
          {timeline.map((monthData, i) => (
            <MonthSection
              key={`${monthData.month}-${monthData.year}`}
              {...monthData}
              isFirst={i === 0}
              isLast={i === timeline.length - 1}
            />
          ))}
        </VStack>
      </Box>
    </>
  )
}
