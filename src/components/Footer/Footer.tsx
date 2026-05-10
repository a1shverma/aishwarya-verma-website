import {
  Box,
  Flex,
  Text,
  Link as ChakraLink,
  HStack,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react'
import { FaGithub, FaInstagram, FaLinkedin, FaSpotify } from 'react-icons/fa'
import { BsPauseFill } from 'react-icons/bs'
import { useQuery } from 'react-query'

const Footer = (): JSX.Element => {
  const borderColor = useColorModeValue('gray.200', 'gray.800')
  const mutedColor = useColorModeValue('gray.400', 'gray.600')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const iconColor = useColorModeValue('gray.400', 'gray.500')
  const iconHoverColor = useColorModeValue('brand.500', 'brand.400')
  const spotifyCardBorder = useColorModeValue('gray.200', 'gray.700')
  const spotifyCardBg = useColorModeValue('gray.50', 'gray.900')
  const spotifyCardHoverBg = useColorModeValue('green.50', 'rgba(29,185,84,0.07)')

  const { error, data: currentlyPlaying } = useQuery(
    'currentlyPlaying',
    () => fetch('/api/get-now-playing').then(res => res.json()),
    { refetchOnMount: true }
  )

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
        {/* Spotify now playing */}
        <ChakraLink
          href={currentlyPlaying?.songUrl || 'https://open.spotify.com'}
          isExternal
          _hover={{ textDecoration: 'none' }}
          flex={1}
          minW={0}
        >
          <HStack
            spacing={3}
            px={3}
            py={2}
            borderRadius='lg'
            border='1px solid'
            borderColor={spotifyCardBorder}
            bg={spotifyCardBg}
            display='inline-flex'
            maxW='320px'
            _hover={{ borderColor: '#1DB954', bg: spotifyCardHoverBg }}
            transition='all 0.2s'
          >
            {currentlyPlaying?.isPlaying ? (
              <Icon as={FaSpotify} color='#1DB954' boxSize='16px' flexShrink={0} />
            ) : (
              <Icon as={BsPauseFill} color={mutedColor} boxSize='16px' flexShrink={0} />
            )}

            <Box minW={0}>
              {currentlyPlaying?.songUrl ? (
                <>
                  <Text fontSize='xs' fontWeight='bold' color={textColor} isTruncated lineHeight='short'>
                    {currentlyPlaying.name}
                  </Text>
                  {currentlyPlaying.artist && (
                    <Text fontSize='10px' color={mutedColor} isTruncated lineHeight='short'>
                      {currentlyPlaying.artist}
                    </Text>
                  )}
                </>
              ) : (
                <Text fontSize='xs' color={mutedColor}>
                  {error ? 'Spotify unavailable' : 'Not playing'}
                </Text>
              )}
            </Box>
          </HStack>
        </ChakraLink>

        {/* Right: copyright + socials */}
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
