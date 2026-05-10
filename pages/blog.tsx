import React, { useState } from 'react';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  HStack,
  VStack,
  chakra,
  Link as ChakraLink,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { getAllFilesFrontMatter } from '@/utils/mdx';
import { AiOutlineSearch } from 'react-icons/ai';
import formatDistance from 'date-fns/formatDistance';

interface Post {
  title: string;
  summary: string;
  link: string;
  tags: string[];
  publishedAt: string;
  published?: boolean;
  featured?: boolean;
  slug?: string;
}

// ─── Featured hero post ───────────────────────────────────────────────────────

function FeaturedPost({ post }: { post: Post }): React.ReactElement {
  const border = useColorModeValue('gray.200', 'gray.800')
  const mutedColor = useColorModeValue('gray.500', 'gray.400')
  const titleColor = useColorModeValue('gray.900', 'gray.50')
  const tagBg = useColorModeValue('gray.100', 'gray.800')
  const tagColor = useColorModeValue('gray.600', 'gray.400')

  const href = post.link || (post.slug ? `/blog/${post.slug}` : '#')

  return (
    <Link href={href} passHref>
      <ChakraLink _hover={{ textDecoration: 'none' }} display='block' role='group'>
        <Box
          borderTop='1px solid'
          borderBottom='1px solid'
          borderColor={border}
          py={10}
          transition='border-color 0.2s'
          _groupHover={{ borderColor: 'brand.500' }}
        >
          {/* Label */}
          <HStack spacing={2} mb={5}>
            <Box h='1px' w='24px' bg='brand.500' />
            <Text
              fontSize='10px'
              fontWeight='bold'
              textTransform='uppercase'
              letterSpacing='0.2em'
              color='brand.500'
            >
              Latest
            </Text>
          </HStack>

          {/* Title */}
          <Text
            fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
            fontWeight='900'
            letterSpacing='-0.03em'
            lineHeight={0.95}
            color={titleColor}
            mb={5}
            maxW='3xl'
            transition='color 0.2s'
            _groupHover={{ color: 'brand.400' }}
          >
            {post.title}
          </Text>

          {/* Summary */}
          {post.summary && (
            <Text
              fontSize='md'
              color={mutedColor}
              lineHeight='1.7'
              maxW='2xl'
              mb={6}
            >
              {post.summary}
            </Text>
          )}

          {/* Meta row */}
          <Flex align='center' gap={4} flexWrap='wrap'>
            <Text fontSize='xs' color={mutedColor} letterSpacing='0.05em'>
              {formatDistance(new Date(post.publishedAt), new Date(), { addSuffix: true })}
            </Text>
            <HStack spacing={2}>
              {post.tags?.slice(0, 4).map(tag => (
                <chakra.span
                  key={tag}
                  fontSize='10px'
                  fontWeight='bold'
                  textTransform='uppercase'
                  letterSpacing='0.12em'
                  px={2}
                  py={0.5}
                  bg={tagBg}
                  color={tagColor}
                  borderRadius='sm'
                >
                  {tag}
                </chakra.span>
              ))}
            </HStack>
          </Flex>
        </Box>
      </ChakraLink>
    </Link>
  )
}

// ─── Post row (list item) ─────────────────────────────────────────────────────

function PostRow({ post }: { post: Post }): React.ReactElement {
  const border = useColorModeValue('gray.100', 'gray.800')
  const mutedColor = useColorModeValue('gray.400', 'gray.500')
  const titleColor = useColorModeValue('gray.800', 'gray.100')
  const tagColor = useColorModeValue('gray.500', 'gray.500')

  const href = post.link || (post.slug ? `/blog/${post.slug}` : '#')

  return (
    <Link href={href} passHref>
      <ChakraLink _hover={{ textDecoration: 'none' }} display='block' role='group'>
        <Flex
          borderBottom='1px solid'
          borderColor={border}
          py={5}
          justify='space-between'
          align='start'
          gap={6}
          transition='border-color 0.15s'
          _groupHover={{ borderColor: 'brand.500' }}
        >
          <VStack align='start' spacing={1} flex={1} minW={0}>
            <Text
              fontWeight='700'
              fontSize='md'
              color={titleColor}
              lineHeight='short'
              noOfLines={2}
              transition='color 0.2s'
              _groupHover={{ color: 'brand.400' }}
            >
              {post.title}
            </Text>
            <HStack spacing={3} flexWrap='wrap'>
              <Text fontSize='xs' color={mutedColor}>
                {formatDistance(new Date(post.publishedAt), new Date(), { addSuffix: true })}
              </Text>
              {post.tags?.slice(0, 3).map(tag => (
                <Text
                  key={tag}
                  fontSize='10px'
                  fontWeight='bold'
                  textTransform='uppercase'
                  letterSpacing='0.1em'
                  color={tagColor}
                >
                  {tag}
                </Text>
              ))}
            </HStack>
          </VStack>

          {/* Arrow */}
          <Text
            color={mutedColor}
            fontSize='lg'
            mt='2px'
            transition='transform 0.2s, color 0.2s'
            _groupHover={{ transform: 'translateX(4px)', color: 'brand.400' }}
            flexShrink={0}
          >
            →
          </Text>
        </Flex>
      </ChakraLink>
    </Link>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

function Blog({ posts }: { posts: Post[] }): React.ReactElement {
  const [filter, setFilter] = useState('');
  const mutedColor = useColorModeValue('gray.500', 'gray.400')
  const textColor = useColorModeValue('gray.800', 'gray.50')
  const inputBorder = useColorModeValue('gray.200', 'gray.700')

  const sorted = [...posts]
    .filter(p => p.published || !process.env.VERCEL_ENV)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  const filtered = sorted.filter(p =>
    p.title.toLowerCase().includes(filter.toLowerCase())
  )

  const [featured, ...rest] = filtered

  return (
    <>
      <NextSeo title='Writing' />
      <Box maxW='7xl' mx='auto' px={{ base: 6, md: 10, xl: 16 }} pt={{ base: 32, md: 40 }} pb={20}>

        {/* ── Header ── */}
        <Flex align='flex-end' justify='space-between' mb={12} flexWrap='wrap' gap={6}>
          <Box>
            <Box h='2px' w='40px' bg='brand.500' mb={6} />
            <Text
              fontSize={{ base: '5xl', md: '7xl', lg: '8xl' }}
              fontWeight='900'
              letterSpacing='-0.04em'
              lineHeight={0.88}
              color={textColor}
            >
              WRITING.
            </Text>
          </Box>

          {/* Search */}
          <InputGroup maxW='240px'>
            <InputLeftElement pointerEvents='none' h='full'>
              <AiOutlineSearch color='gray' />
            </InputLeftElement>
            <Input
              size='sm'
              variant='flushed'
              placeholder='Search'
              borderColor={inputBorder}
              _placeholder={{ color: mutedColor, fontSize: 'sm' }}
              onChange={e => setFilter(e.target.value)}
              _focus={{ borderColor: 'brand.400' }}
            />
          </InputGroup>
        </Flex>

        {/* ── No results ── */}
        {filtered.length === 0 && (
          <Text color={mutedColor} mt={8}>No posts matching &ldquo;{filter}&rdquo;</Text>
        )}

        {/* ── Featured post ── */}
        {featured && <FeaturedPost post={featured} />}

        {/* ── Rest as list ── */}
        {rest.length > 0 && (
          <Box mt={12}>
            <Text
              fontSize='10px'
              fontWeight='bold'
              textTransform='uppercase'
              letterSpacing='0.2em'
              color={mutedColor}
              mb={4}
            >
              All Posts
            </Text>
            {rest.map(post => (
              <PostRow key={post.title} post={post} />
            ))}
          </Box>
        )}
      </Box>
    </>
  );
}

export async function getStaticProps(): Promise<{ props: { posts: Post[] } }> {
  const posts = await getAllFilesFrontMatter();
  return { props: { posts } };
}

export default Blog;
