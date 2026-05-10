import {
  Box,
  Flex,
  Text,
  Link as ChakraLink,
  HStack,
  useColorModeValue,
  chakra,
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
        <HStack spacing={2} minW={0} flex={1}>
          {currentlyPlaying?.isPlaying ? (
            <Icon as={FaSpotify} color='brand.500' boxSize='14px' flexShrink={0} />
          ) : (
            <Icon as={BsPauseFill} color={mutedColor} boxSize='14px' flexShrink={0} />
          )}

          {currentlyPlaying?.songUrl ? (
            <ChakraLink
              href={currentlyPlaying.songUrl}
              isExternal
              fontSize='xs'
              color={textColor}
              fontWeight='medium'
              isTruncated
              maxW='280px'
              _hover={{ color: 'brand.400' }}
              transition='color 0.2s'
            >
              {currentlyPlaying.name}
              {currentlyPlaying.artist && (
                <chakra.span color={mutedColor} fontWeight='normal'>
                  {' '}— {currentlyPlaying.artist}
                </chakra.span>
              )}
            </ChakraLink>
          ) : (
            <Text fontSize='xs' color={mutedColor}>
              {error ? 'Spotify unavailable' : 'Not playing'}
            </Text>
          )}
        </HStack>

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
