import {
  Box,
  Flex,
  Heading,
  Image,
  chakra,
  useColorModeValue,
  Skeleton,
  Link as ChakraLink,
  useBreakpoint,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import AboutTerminal from '@/components/AboutTerminal';

export default function Home(): React.ReactElement {
  const [imageLoad, setImageLoad] = useState(false);
  const bp = useBreakpoint();
  return (
    <>
      <NextSeo title='Home' />

      <Box
        minH='100vh'
        height='full'
        width={{ base: '95%', md: '90%', lg: '80%', xl: '90%W' }}
        maxW='7xl'
        mx='auto'
        pt={{ base: '28', sm: '14', md: '16', xl: '20' }}
      >
        {/* Im not actually too sure why this needs to be here, but without this additional flex
        the body doesn't begin at the top of the page... */}
        <Flex
          direction='column'
          justifyContent={{ base: 'center', md: 'flex-start' }}
          height='full'
          width='full'
          p={{ base: 0, sm: 16 }}
        >
          <Flex
            direction={{ base: `column`, lg: `row` }}
            alignItems='center'
            mx='auto'
            my={{ xl: '16' }}
          >
            <Skeleton isLoaded={imageLoad} boxSize='250px' borderRadius='2xl' m='auto'>
              <Image
                flexGrow={3}
                borderRadius='2xl'
                boxSize='250px'
                src='./static/images/profile.jpg'
                objectFit='cover'
                alt='Aishwarya Verma'
                onLoad={() => setImageLoad(true)}
              />
            </Skeleton>
            <Flex
              alignSelf='center'
              direction='column'
              pl={{ base: 0, lg: 10 }}
              my={{ base: 10, lg: 0 }}
              flexGrow={1}
            >
              <Heading
                bgGradient={`linear(to-r, ${useColorModeValue(
                  `brand.600`,
                  `brand.400`
                )}, ${useColorModeValue(`teal.600`, `teal.400`)}, ${useColorModeValue(
                  `blue.600`,
                  `blue.300`
                )})`}
                className='moving-grad'
                bgClip='text'
                fontSize={{ base: `5xl`, lg: `7xl` }}
                textAlign={{ base: `center`, lg: `left` }}
              >
                Hi, I&apos;m Aishwarya!
              </Heading>
              <chakra.p
                maxW='650px'
                textAlign={{ base: `center`, lg: `left` }}
                fontSize='l'
                mt={2}
              >
                There&apos;s a version of AI that actually works in the real world. I build that. <b>GenAI pipelines</b>, <b>RAG systems</b>, <b>LLM applications</b> wired into production data infrastructure.<br/><br/>
                Always chasing side quests: the next product idea, the problem worth solving, the business hiding in plain sight.<br/><br/>
                When I&apos;m not building: novels, galleries, new cities, good food, and the occasional philosophical rabbit hole. Loud advocate for <b>Women in Tech &amp; Leadership</b>.
                <br/><br/>Here, you can find my{' '}
                <Link href='/projects' passHref>
                  <ChakraLink>projects</ChakraLink>
                </Link> {' '}
                 , {' '}
                 <Link href='/tools' passHref>
                  <ChakraLink>tools</ChakraLink>
                </Link>{' '}
                I like working with or the{' '}
                <Link href='/certificates' passHref>
                  <ChakraLink>certificates</ChakraLink>
                </Link>{' '}
                I own. <br/>Sometimes I even write{' '}
                <Link href='/blog' passHref>
                  <ChakraLink>blogs</ChakraLink>
                </Link>{' '}
                where I articulate my thoughts and learnings. 
                <br/><br/><b>P.S.</b> Head to the footer if you wanna vibe with me on a song I might be listening to at the moment :)
                
              </chakra.p>
            </Flex>
          </Flex>
          {!['base', 'sm'].includes(bp) && <AboutTerminal />}
        </Flex>
      </Box>
    </>
  );
}
