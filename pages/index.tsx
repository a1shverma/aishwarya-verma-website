import {
  Box,
  Flex,
  Heading,
  Image,
  chakra,
  useColorModeValue,
  Skeleton,
  Link as ChakraLink,
  Text,
  HStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { NextSeo } from 'next-seo';

export default function Home(): React.ReactElement {
  const [imageLoad, setImageLoad] = useState(false)
  const mutedColor = useColorModeValue('gray.500', 'gray.400')
  const textColor = useColorModeValue('gray.800', 'gray.50')
  const bioColor = useColorModeValue('gray.600', 'gray.300')

  return (
    <>
      <NextSeo title='Home' />

      <Box
        maxW='7xl'
        mx='auto'
        px={{ base: 6, md: 10, xl: 16 }}
        pt={{ base: 32, md: 40 }}
        pb={{ base: 16, md: 20 }}
        overflowX='hidden'
      >
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <Flex
          direction={{ base: 'column-reverse', lg: 'row' }}
          align={{ base: 'flex-start', lg: 'center' }}
          justify='space-between'
          gap={{ base: 12, lg: 16 }}
        >
          {/* Left — name + role + bio */}
          <Box flex={1}>
            {/* Short red accent */}
            <Box h='2px' w='40px' bg='brand.500' mb={8} />

            {/* Name */}
            <Heading
              fontSize={{ base: '4xl', sm: '5xl', md: '6xl', lg: '6xl', xl: '7xl' }}
              fontWeight='900'
              letterSpacing='-0.03em'
              lineHeight={1}
              color={textColor}
              mb={10}
            >
              AISHWARYA<br />VERMA.
            </Heading>

            {/* Role block */}
            <Box
              borderLeft='2px solid'
              borderColor='brand.500'
              pl={4}
              mb={8}
            >
              <Text
                fontSize='xs'
                fontWeight='bold'
                textTransform='uppercase'
                letterSpacing='0.15em'
                color='brand.500'
                mb={1}
              >
                Senior AI Data Engineer
              </Text>
              <Text fontSize='sm' color={mutedColor}>
                Aimpoint Digital &nbsp;·&nbsp; New York City
              </Text>
            </Box>

            {/* Bio */}
            <Text
              maxW='520px'
              fontSize='md'
              lineHeight='1.8'
              color={bioColor}
              mb={10}
            >
              There&apos;s a version of AI that actually works in the real world. I build that.{' '}
              <chakra.span fontWeight='semibold' color={textColor}>GenAI pipelines</chakra.span>,{' '}
              <chakra.span fontWeight='semibold' color={textColor}>RAG systems</chakra.span>,{' '}
              <chakra.span fontWeight='semibold' color={textColor}>LLM applications</chakra.span>{' '}
              wired into production data infrastructure.
              <br /><br />
              Always chasing side quests: the next product idea, the problem worth solving,
              the business hiding in plain sight.
              <br /><br />
              When I&apos;m not building: novels, galleries, new cities, good food, and the
              occasional philosophical rabbit hole. Loud advocate for{' '}
              <chakra.span fontWeight='semibold' color={textColor}>Women in Tech &amp; Leadership</chakra.span>.
            </Text>

            {/* Nav links */}
            <HStack spacing={{ base: 5, sm: 8 }} flexWrap='wrap'>
              {[
                { label: 'Projects', href: '/projects' },
                { label: 'Writing', href: '/blog' },
                { label: 'Interests', href: '/interests' },
              ].map(({ label, href }) => (
                <Link key={href} href={href} passHref>
                  <ChakraLink
                    fontSize='sm'
                    fontWeight='bold'
                    textTransform='uppercase'
                    letterSpacing='0.1em'
                    color={mutedColor}
                    _hover={{ color: 'brand.400' }}
                    transition='color 0.2s'
                  >
                    {label} →
                  </ChakraLink>
                </Link>
              ))}
            </HStack>
          </Box>

          {/* Right — photo */}
          <Box position='relative' flexShrink={0} alignSelf={{ base: 'center', lg: 'center' }}>
            {/* Red accent frame behind photo — hidden on mobile to avoid horizontal scroll */}
            <Box
              display={{ base: 'none', md: 'block' }}
              position='absolute'
              top='16px'
              right='-16px'
              w='full'
              h='full'
              border='1px solid'
              borderColor='brand.500'
              borderRadius='2xl'
              opacity={0.35}
              zIndex={0}
            />
            <Skeleton
              isLoaded={imageLoad}
              w={{ base: '220px', md: '280px', lg: '300px' }}
              borderRadius='2xl'
              position='relative'
              zIndex={1}
            >
              <Image
                src='./static/images/profile.jpg'
                alt='Aishwarya Verma'
                w={{ base: '220px', md: '280px', lg: '300px' }}
                h='auto'
                borderRadius='2xl'
                filter='grayscale(15%)'
                onLoad={() => setImageLoad(true)}
              />
            </Skeleton>
          </Box>
        </Flex>

      </Box>
    </>
  )
}
