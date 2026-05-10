import {
  Box,
  Flex,
  Text,
  Link as ChakraLink,
  HStack,
  useColorModeValue,
  Icon,
  keyframes,
} from '@chakra-ui/react'
import { FaGithub, FaInstagram, FaLinkedin, FaSpotify } from 'react-icons/fa'
import { useQuery } from 'react-query'

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
`

const Footer = (): JSX.Element => {
  const borderColor = useColorModeValue('gray.200', 'gray.800')
  const mutedColor = useColorModeValue('gray.500', 'gray.400')
  const textColor = useColorModeValue('gray.800', 'gray.100')
  const iconColor = useColorModeValue('gray.500', 'gray.400')
  const iconHoverColor = useColorModeValue('brand.500', 'brand.400')
  const cardBg = useColorModeValue('gray.50', '#111')
  const cardBorder = useColorModeValue('gray.200', 'gray.700')

  const { error, data: nowPlaying } = useQuery(
    'currentlyPlaying',
    () => fetch('/api/get-now-playing').then(res => res.json()),
    { refetchOnMount: true, refetchInterval: 30000 }
  )

  const isPlaying = nowPlaying?.isPlaying
  const href = nowPlaying?.songUrl || 'https://open.spotify.com'

  return (
    <Box
      borderTop='1px solid'
      borderColor={borderColor}
      py={5}
      px={{ base: 6, md: 10, xl: 16 }}
    >
      <Flex
        maxW='7xl'
        mx='auto'
        align='center'
        justify='space-between'
        flexWrap='wrap'
        gap={4}
      >
        {/* ── Spotify ── */}
        <ChakraLink href={href} isExternal _hover={{ textDecoration: 'none' }}>
          <HStack
            spacing={3}
            px={4}
            py={2.5}
            border='1px solid'
            borderColor={cardBorder}
            borderRadius='full'
            bg={cardBg}
            transition='all 0.2s'
            _hover={{ borderColor: '#1DB954', boxShadow: '0 0 0 2px rgba(29,185,84,0.15)' }}
          >
            <Icon as={FaSpotify} color='#1DB954' boxSize='15px' flexShrink={0} />

            {isPlaying && (
              <Box w='6px' h='6px' borderRadius='full' bg='#1DB954' flexShrink={0}
                sx={{ animation: `${pulse} 1.5s ease-in-out infinite` }}
              />
            )}

            <Text fontSize='sm' fontWeight='medium' color={textColor} isTruncated maxW={{ base: '160px', md: '260px' }}>
              {nowPlaying?.name
                ? <>{nowPlaying.name} <Box as='span' color={mutedColor} fontWeight='normal'>— {nowPlaying.artist}</Box></>
                : <Box as='span' color={mutedColor}>{error ? 'Spotify unavailable' : 'Not playing'}</Box>
              }
            </Text>
          </HStack>
        </ChakraLink>

        {/* ── Right ── */}
        <HStack spacing={6}>
          <Text fontSize='xs' color={mutedColor} display={{ base: 'none', sm: 'block' }}>
            © {new Date().getFullYear()} Aishwarya Verma
          </Text>
          <HStack spacing={4}>
            {[
              { href: 'https://github.com/a1shverma/', icon: FaGithub, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/a1shverma/', icon: FaLinkedin, label: 'LinkedIn' },
              { href: 'https://www.instagram.com/a1shverma/', icon: FaInstagram, label: 'Instagram' },
            ].map(({ href, icon: Ic, label }) => (
              <ChakraLink key={label} href={href} isExternal aria-label={label}
                color={iconColor} _hover={{ color: iconHoverColor }} transition='color 0.2s'
              >
                <Ic size={15} />
              </ChakraLink>
            ))}
          </HStack>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Footer
