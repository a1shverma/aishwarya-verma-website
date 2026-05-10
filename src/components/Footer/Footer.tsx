import {
  Box,
  Flex,
  Text,
  Link as ChakraLink,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = (): JSX.Element => {
  const borderColor = useColorModeValue('gray.200', 'gray.800')
  const mutedColor = useColorModeValue('gray.400', 'gray.600')
  const iconColor = useColorModeValue('gray.400', 'gray.500')
  const iconHoverColor = useColorModeValue('brand.500', 'brand.400')

  return (
    <Box
      borderTop='1px solid'
      borderColor={borderColor}
      py={6}
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
        <Text fontSize='xs' color={mutedColor} letterSpacing='0.05em'>
          © {new Date().getFullYear()} Aishwarya Verma
        </Text>

        <HStack spacing={5}>
          {[
            { href: 'https://github.com/a1shverma/', icon: FaGithub, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/a1shverma/', icon: FaLinkedin, label: 'LinkedIn' },
            { href: 'https://www.instagram.com/a1shverma/', icon: FaInstagram, label: 'Instagram' },
          ].map(({ href, icon: Icon, label }) => (
            <ChakraLink
              key={label}
              href={href}
              isExternal
              aria-label={label}
              color={iconColor}
              _hover={{ color: iconHoverColor }}
              transition='color 0.2s'
            >
              <Icon size={16} />
            </ChakraLink>
          ))}
        </HStack>
      </Flex>
    </Box>
  )
}

export default Footer
