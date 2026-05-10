import {
  Box,
  Flex,
  Text,
  Link as ChakraLink,
  HStack,
  useColorModeValue,
  Icon,
  Image,
  keyframes,
} from '@chakra-ui/react'
import { FaGithub, FaInstagram, FaLinkedin, FaSpotify } from 'react-icons/fa'
import { useQuery } from 'react-query'

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.4; transform: scale(0.75); }
`

const bar1 = keyframes`
  0%, 100% { height: 4px; }  50% { height: 12px; }
`
const bar2 = keyframes`
  0%, 100% { height: 10px; } 50% { height: 4px; }
`
const bar3 = keyframes`
  0%, 100% { height: 7px; }  50% { height: 14px; }
`

function EqBars() {
  const barStyle = {
    width: '3px',
    borderRadius: '2px',
    background: '#1DB954',
    display: 'inline-block',
  }
  return (
    <Flex align='flex-end' gap='2px' h='14px'>
      <Box sx={{ ...barStyle, height: '4px', animation: `${bar1} 0.9s ease-in-out infinite` }} />
      <Box sx={{ ...barStyle, height: '10px', animation: `${bar2} 0.9s ease-in-out infinite 0.2s` }} />
      <Box sx={{ ...barStyle, height: '7px',  animation: `${bar3} 0.9s ease-in-out infinite 0.4s` }} />
    </Flex>
  )
}

const Footer = (): JSX.Element => {
  const borderColor = useColorModeValue('gray.200', 'gray.800')
  const mutedColor = useColorModeValue('gray.500', 'gray.400')
  const textColor = useColorModeValue('gray.800', 'gray.100')
  const iconColor = useColorModeValue('gray.500', 'gray.400')
  const iconHoverColor = useColorModeValue('brand.500', 'brand.400')
  const cardBg = useColorModeValue('white', '#111')
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
      pt={4}
      pb={5}
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
        {/* ── Spotify mini-player ── */}
        <ChakraLink
          href={href}
          isExternal
          _hover={{ textDecoration: 'none' }}
          flexShrink={0}
        >
          <HStack
            spacing={0}
            border='1px solid'
            borderColor={cardBorder}
            borderRadius='xl'
            bg={cardBg}
            overflow='hidden'
            w={{ base: '260px', md: '340px' }}
            transition='all 0.25s'
            _hover={{
              borderColor: '#1DB954',
              boxShadow: '0 0 0 2px rgba(29,185,84,0.18)',
              transform: 'translateY(-1px)',
            }}
          >
            {/* Album art */}
            <Box position='relative' flexShrink={0} w='56px' h='56px'>
              {nowPlaying?.albumImageUrl ? (
                <Image
                  src={nowPlaying.albumImageUrl}
                  alt={nowPlaying.album || 'Album'}
                  w='56px'
                  h='56px'
                  objectFit='cover'
                />
              ) : (
                <Flex w='56px' h='56px' bg='gray.800' align='center' justify='center'>
                  <Icon as={FaSpotify} color='#1DB954' boxSize='20px' />
                </Flex>
              )}
              {/* Green overlay tint on hover */}
              <Box
                position='absolute'
                inset={0}
                bg='rgba(29,185,84,0)'
                transition='background 0.25s'
                _groupHover={{ bg: 'rgba(29,185,84,0.15)' }}
              />
            </Box>

            {/* Track info */}
            <Box px={3} py={2} flex={1} minW={0}>
              {/* Label row */}
              <HStack spacing={2} mb={1}>
                <Icon as={FaSpotify} color='#1DB954' boxSize='10px' flexShrink={0} />
                <Text fontSize='9px' fontWeight='bold' textTransform='uppercase' letterSpacing='0.15em' color='#1DB954'>
                  {isPlaying ? 'Now Playing' : 'Last Played'}
                </Text>
                {isPlaying && (
                  <Box
                    w='6px'
                    h='6px'
                    borderRadius='full'
                    bg='#1DB954'
                    flexShrink={0}
                    sx={{ animation: `${pulse} 1.4s ease-in-out infinite` }}
                  />
                )}
              </HStack>

              {/* Song + artist */}
              {nowPlaying?.name ? (
                <>
                  <Text fontSize='sm' fontWeight='bold' color={textColor} isTruncated lineHeight='short'>
                    {nowPlaying.name}
                  </Text>
                  <Text fontSize='11px' color={mutedColor} isTruncated lineHeight='short' mt='1px'>
                    {nowPlaying.artist}
                  </Text>
                </>
              ) : (
                <Text fontSize='sm' color={mutedColor}>
                  {error ? 'Spotify unavailable' : 'Not playing'}
                </Text>
              )}
            </Box>

            {/* EQ bars or static icon */}
            <Box pr={3} flexShrink={0}>
              {isPlaying ? (
                <EqBars />
              ) : (
                <Icon as={FaSpotify} color={useColorModeValue('gray.300', 'gray.600')} boxSize='14px' />
              )}
            </Box>
          </HStack>
        </ChakraLink>

        {/* ── Right: copyright + socials ── */}
        <HStack spacing={6}>
          <Text fontSize='xs' color={mutedColor} letterSpacing='0.05em' display={{ base: 'none', sm: 'block' }}>
            © {new Date().getFullYear()} Aishwarya Verma
          </Text>
          <HStack spacing={4}>
            {[
              { href: 'https://github.com/a1shverma/', icon: FaGithub, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/a1shverma/', icon: FaLinkedin, label: 'LinkedIn' },
              { href: 'https://www.instagram.com/a1shverma/', icon: FaInstagram, label: 'Instagram' },
            ].map(({ href, icon: Ic, label }) => (
              <ChakraLink
                key={label}
                href={href}
                isExternal
                aria-label={label}
                color={iconColor}
                _hover={{ color: iconHoverColor }}
                transition='color 0.2s'
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
