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
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import LineHeading from '@/components/LineHeading'
import books, { Book, BookStatus } from '@/data/books'

const statusConfig: Record<BookStatus, { label: string; color: string }> = {
  read: { label: 'Read', color: 'green' },
  reading: { label: 'Currently Reading', color: 'brand' },
  'want-to-read': { label: 'Want to Read', color: 'gray' },
}

const STATUS_ORDER: BookStatus[] = ['reading', 'read', 'want-to-read']

interface BookCardProps {
  book: Book
}

function BookCard({ book }: BookCardProps): React.ReactElement {
  const [showQuotes, setShowQuotes] = useState(false)
  const cardBg = useColorModeValue('white', 'gray.800')
  const border = useColorModeValue('gray.200', 'gray.700')
  const quoteBg = useColorModeValue('gray.50', 'gray.700')
  const quoteColor = useColorModeValue('gray.600', 'gray.300')
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
          <Tag
            size='sm'
            colorScheme={statusConfig[book.status].color}
            borderRadius='full'
            flexShrink={0}
          >
            {statusConfig[book.status].label}
          </Tag>
        </HStack>

        <Text fontSize='sm' color={quoteColor}>
          {book.author}
        </Text>

        {book.genre && (
          <Tag size='sm' variant='subtle' colorScheme='purple' borderRadius='full'>
            {book.genre}
          </Tag>
        )}

        {hasQuotes && (
          <>
            <Button
              size='xs'
              variant='ghost'
              colorScheme='brand'
              mt={1}
              onClick={() => setShowQuotes(!showQuotes)}
              px={0}
            >
              {showQuotes ? 'Hide quotes' : `Show quotes (${book.quotes!.length})`}
            </Button>
            <Collapse in={showQuotes} animateOpacity>
              <VStack align='start' spacing={3} pt={1} width='full'>
                {book.quotes!.map((quote, i) => (
                  <Box
                    key={i}
                    bg={quoteBg}
                    borderLeft='3px solid'
                    borderColor='brand.400'
                    borderRadius='md'
                    px={4}
                    py={3}
                    width='full'
                  >
                    <chakra.p fontSize='sm' color={quoteColor} fontStyle='italic'>
                      &ldquo;{quote.text}&rdquo;
                    </chakra.p>
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

export default function Books(): React.ReactElement {
  const sectionHeadingColor = useColorModeValue('gray.500', 'gray.400')

  return (
    <>
      <NextSeo title='Books' />
      <Flex
        direction='column'
        alignItems='center'
        width='full'
        minH='100vh'
        mx='auto'
        maxW='5xl'
        px={4}
        py='28'
      >
        <LineHeading
          fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
          textAlign='center'
        >
          Books
        </LineHeading>
        <Text mt={3} textAlign='center' maxW='lg'>
          Things I&apos;ve read, am reading, and can&apos;t wait to get to — along with quotes that stuck.
        </Text>

        <VStack width='full' spacing={12} mt={14} align='start'>
          {STATUS_ORDER.map(status => {
            const filtered = books.filter(b => b.status === status)
            if (filtered.length === 0) return null
            return (
              <Box key={status} width='full'>
                <Text
                  fontSize='xs'
                  fontWeight='bold'
                  textTransform='uppercase'
                  letterSpacing='wider'
                  color={sectionHeadingColor}
                  mb={5}
                >
                  {statusConfig[status].label}
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                  {filtered.map(book => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </SimpleGrid>
              </Box>
            )
          })}
        </VStack>
      </Flex>
    </>
  )
}
