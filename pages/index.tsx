import {
  Box,
  Flex,
  Heading,
  Image,
  chakra,
  Text,
  Skeleton,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { NextSeo } from 'next-seo';

export default function Home(): React.ReactElement {
  const [imageLoad, setImageLoad] = useState(false);

  return (
    <>
      <NextSeo title='Home' />
      <Box
        minH='100vh'
        maxW='7xl'
        mx='auto'
        px={{ base: 6, md: 12, xl: 20 }}
        pt={{ base: '28', md: '32' }}
        pb={20}
      >
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          alignItems={{ base: 'flex-start', lg: 'center' }}
          gap={{ base: 12, lg: 16 }}
          minH='80vh'
        >
          {/* Left: text */}
          <Box flex={1}>
            <Box w='40px' h='3px' bg='brand.500' mb={8} />

            <Heading
              fontSize={{ base: '6xl', md: '8xl', xl: '9xl' }}
              fontWeight='800'
              letterSpacing='-0.04em'
              lineHeight='0.92'
              textTransform='uppercase'
              color='#E8E3D8'
              mb={10}
            >
              Aishwarya
              <chakra.span display='block'>Verma.</chakra.span>
            </Heading>

            <Box borderLeft='3px solid' borderColor='brand.500' pl={4} mb={10}>
              <Text
                fontSize='xs'
                fontWeight='600'
                letterSpacing='0.15em'
                textTransform='uppercase'
                color='brand.400'
                mb={1}
              >
                Lead AI Engineer
              </Text>
              <Text fontSize='sm' color='#8A8278'>
                New York City
              </Text>
            </Box>

            <Box maxW='520px' color='#B5B0A8' fontSize='md' lineHeight='1.8'>
              <Text mb={5}>
                AI that ships. I build across products, applications, and use
                cases{'—'}from the model layer to the thing people actually use.
              </Text>
              <Text mb={5}>
                Always hunting for the next idea, the gap nobody&apos;s filled,
                the problem worth turning into a product.
              </Text>
              <Text>
                Off the clock: fashion meets tech, good food, galleries, live
                music, new cities, philosophy, and the occasional deep dive into
                why people do what they do. Loud advocate for{' '}
                <chakra.span fontWeight='600' color='#E8E3D8'>
                  Women in STEM &amp; Leadership
                </chakra.span>
                .
              </Text>
            </Box>
          </Box>

          {/* Right: photo */}
          <Box flexShrink={0} width={{ base: 'full', lg: '360px' }}>
            <Skeleton isLoaded={imageLoad} borderRadius='2xl'>
              <Image
                src='./static/images/profile.jpg'
                alt='Aishwarya Verma'
                borderRadius='2xl'
                objectFit='cover'
                width='full'
                height={{ base: '420px', lg: '500px' }}
                sx={{ filter: 'grayscale(100%)' }}
                boxShadow='0 0 0 2px #C4503A, 0 0 50px rgba(196, 80, 58, 0.12)'
                onLoad={() => setImageLoad(true)}
              />
            </Skeleton>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
