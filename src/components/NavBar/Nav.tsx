import React, { useState } from 'react';
import {
  Box,
  Flex,
  Link as ChakraLink,
  chakra,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import Link from 'next/link';

import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import { useRouter } from 'next/router';
import useScrollPosition from '@/hooks/useScrollPosition.hook';
import { useEffect } from 'react';

const links = [
  {
    name: '2026',
    link: '/2026',
  },
  {
    name: 'Interests',
    link: '/interests',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
  {
    name: `Projects`,
    link: `/projects`,
  },
  {
    name: `Tools`,
    link: `/tools`,
  },
  // {
  //       name: `Music`,
  //       link: `/spotify`,
  // },
  // {
  //   type: `dropdown`,
  //   name: `Other`,
  //   links: [
  //     {
  //       name: `Music`,
  //       link: `/spotify`,
  //     },
  //     {
  //       name: `Tools`,
  //       link: `/tools`,
  //     },
  //     {
  //       name: `Links`,
  //       link: `/links`,
  //     },
  //   ],
  // },
];

function Nav(): JSX.Element {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const [width, setWidth] = useState(0);
  const { y, max } = useScrollPosition();
  const { pathname } = useRouter();

  const blogPage = pathname === '/blog/[slug]';

  useEffect(() => {
    if (blogPage) {
      const newWidth = y / max;
      if (newWidth !== width) {
        setWidth(newWidth * 100);
      }
    }
  }, [y, max, width, blogPage]);

  return (
    <chakra.header
      width='full'
      position='fixed'
      _before={{
        transition: 'all 0.10s',
        transitionTimingFunction: '1 100 10 10',
        content: '""',
        width: width + '%',
        top: 0,
        left: 0,
        height: '6px',
        bg: useColorModeValue('brand.500', 'brand.300'),
        position: 'absolute',
        zIndex: 9999,
      }}
      top={0}
      left={0}
      zIndex={10}
      bg={useColorModeValue(`rgba(250, 248, 245, 0.85)`, `rgba(10, 8, 8, 0.85)`)}
      sx={{ backdropFilter: `saturate(180%) blur(5px)` }}
    >
      <chakra.nav mx='auto' p={3}>
        <Flex
          margin='auto'
          justifyContent='space-between'
          alignContent='center'
          maxW='7xl'
          width='full'
        >
          <Box display='flex' alignContent='center'>
            <Link href='/' passHref>
              {router.asPath === '/' ? (
                <AnimatedTitle />
              ) : (
                <ChakraLink
                  fontSize='xl'
                  fontWeight='900'
                  letterSpacing='-0.04em'
                  color={colorMode === 'light' ? 'gray.900' : 'white'}
                  _hover={{ color: 'brand.500', textDecoration: 'none' }}
                  transition='color 0.2s'
                  margin='auto'
                >
                  AV.
                </ChakraLink>
              )}
            </Link>
          </Box>
          <MobileNav links={links} />
          <DesktopNav links={links} />
        </Flex>
      </chakra.nav>
    </chakra.header>
  );
}

export default Nav;

const AnimatedTitle = () => (
  <ChakraLink
    color={useColorModeValue('gray.900', 'white')}
    fontSize='xl'
    fontWeight='900'
    letterSpacing='-0.04em'
    _hover={{ color: 'brand.500', textDecoration: 'none' }}
    transition='color 0.2s'
  >
    AV.
  </ChakraLink>
);

