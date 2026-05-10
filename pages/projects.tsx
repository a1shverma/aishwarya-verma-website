import React from 'react'
import {
  Box,
  Flex,
  Text,
  HStack,
  VStack,
  chakra,
  Link as ChakraLink,
  useColorModeValue,
  Icon,
  Image,
} from '@chakra-ui/react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { NextSeo } from 'next-seo'
import { pinnedRepos, pinnedRepoType } from '@/data/pinnedRepos'
import { repoType } from '@/pages/api/github'

interface ProjectsProps {
  stars: number
  repos: repoType[]
  followers: number
  revalidate?: number
}

// ─── Pinned project card ──────────────────────────────────────────────────────

function PinnedCard({ project, index, repo }: { project: pinnedRepoType; index: number; repo?: repoType }): React.ReactElement {
  const border = useColorModeValue('gray.100', 'gray.800')
  const hoverBorder = 'brand.500'
  const mutedColor = useColorModeValue('gray.500', 'gray.400')
  const textColor = useColorModeValue('gray.800', 'gray.100')
  const tagBg = useColorModeValue('gray.100', 'gray.800')
  const tagColor = useColorModeValue('gray.600', 'gray.400')
  const numColor = useColorModeValue('gray.100', 'gray.800')

  return (
    <Box
      border='1px solid'
      borderColor={border}
      borderRadius='2xl'
      overflow='hidden'
      transition='border-color 0.2s'
      _hover={{ borderColor: hoverBorder }}
      role='group'
    >
      {/* Image */}
      {project.image && (
        <Box overflow='hidden' h={{ base: '160px', md: '220px' }} bg={useColorModeValue('gray.100', 'gray.900')}>
          <Image
            src={project.image}
            alt={project.name}
            w='full'
            h='full'
            objectFit='cover'
            transition='transform 0.4s ease'
            _groupHover={{ transform: 'scale(1.03)' }}
          />
        </Box>
      )}

      <Box p={6}>
        {/* Number + links row */}
        <Flex justify='space-between' align='center' mb={4}>
          <Text
            fontSize='4xl'
            fontWeight='900'
            letterSpacing='-0.04em'
            lineHeight={1}
            color={numColor}
            userSelect='none'
          >
            {String(index + 1).padStart(2, '0')}
          </Text>

          <HStack spacing={4}>
            {repo?.html_url && (
              <ChakraLink href={repo.html_url} isExternal color={mutedColor} _hover={{ color: 'brand.400' }} transition='color 0.2s'>
                <Icon as={FaGithub} boxSize='18px' />
              </ChakraLink>
            )}
            {project.deployedLink && (
              <ChakraLink href={project.deployedLink} isExternal color={mutedColor} _hover={{ color: 'brand.400' }} transition='color 0.2s'>
                <Icon as={FaExternalLinkAlt} boxSize='14px' />
              </ChakraLink>
            )}
          </HStack>
        </Flex>

        {/* Name */}
        <Text fontSize='xl' fontWeight='800' letterSpacing='-0.02em' color={textColor} mb={3} lineHeight='short'>
          {project.name}
        </Text>

        {/* Stack tags */}
        {project.stack && (
          <HStack spacing={2} flexWrap='wrap' mb={4}>
            {project.stack.map(tag => (
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
        )}

        {/* Description */}
        <Text fontSize='sm' color={mutedColor} lineHeight='1.7'>
          {project.longDescription}
        </Text>
      </Box>
    </Box>
  )
}

// ─── Repo row ─────────────────────────────────────────────────────────────────

function RepoRow({ repo }: { repo: repoType }): React.ReactElement {
  const border = useColorModeValue('gray.100', 'gray.800')
  const mutedColor = useColorModeValue('gray.400', 'gray.500')
  const textColor = useColorModeValue('gray.800', 'gray.100')
  const langColor = useColorModeValue('gray.500', 'gray.400')

  return (
    <ChakraLink href={repo.html_url} isExternal _hover={{ textDecoration: 'none' }} display='block' role='group'>
      <Flex
        borderBottom='1px solid'
        borderColor={border}
        py={4}
        justify='space-between'
        align='center'
        gap={4}
        transition='border-color 0.15s'
        _groupHover={{ borderColor: 'brand.500' }}
      >
        <VStack align='start' spacing={0.5} flex={1} minW={0}>
          <Text
            fontWeight='700'
            fontSize='sm'
            color={textColor}
            transition='color 0.2s'
            _groupHover={{ color: 'brand.400' }}
          >
            {repo.name}
          </Text>
          {repo.description && (
            <Text fontSize='xs' color={mutedColor} noOfLines={1}>
              {repo.description}
            </Text>
          )}
        </VStack>

        <HStack spacing={4} flexShrink={0}>
          {repo.language && (
            <Text fontSize='11px' fontWeight='bold' textTransform='uppercase' letterSpacing='0.1em' color={langColor}>
              {repo.language}
            </Text>
          )}
          {repo.stargazers_count > 0 && (
            <Text fontSize='xs' color={mutedColor}>★ {repo.stargazers_count}</Text>
          )}
          <Text
            color={mutedColor}
            fontSize='md'
            transition='transform 0.2s, color 0.2s'
            _groupHover={{ transform: 'translateX(3px)', color: 'brand.400' }}
          >
            →
          </Text>
        </HStack>
      </Flex>
    </ChakraLink>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

function Projects({ repos }: ProjectsProps): React.ReactElement {
  const textColor = useColorModeValue('gray.800', 'gray.50')
  const mutedColor = useColorModeValue('gray.500', 'gray.400')

  const sortedPinned = [...pinnedRepos].sort((a, b) => {
    const aDate = repos.find(r => r.name === a.id)?.created_at ?? ''
    const bDate = repos.find(r => r.name === b.id)?.created_at ?? ''
    return new Date(aDate).getTime() - new Date(bDate).getTime()
  })

  const allRepos = [...repos]
    .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())

  return (
    <>
      <NextSeo title='Projects' />
      <Box maxW='7xl' mx='auto' px={{ base: 6, md: 10, xl: 16 }} pt={{ base: 32, md: 40 }} pb={20} minH='100vh'>

        {/* ── Header ── */}
        <Box mb={16}>
          <Box h='2px' w='40px' bg='brand.500' mb={6} />
          <Text
            fontSize={{ base: '5xl', md: '7xl', lg: '8xl' }}
            fontWeight='900'
            letterSpacing='-0.04em'
            lineHeight={0.88}
            color={textColor}
            mb={4}
          >
            PROJECTS.
          </Text>
          <Text fontSize='sm' color={mutedColor} mt={4} lineHeight='1.8' maxW='md'>
            Things I&apos;ve built — from side quests to shipped products.
          </Text>
        </Box>

        {/* ── Featured ── */}
        <Box mb={20}>
          <Text fontSize='10px' fontWeight='bold' textTransform='uppercase' letterSpacing='0.2em' color={mutedColor} mb={6}>
            Featured
          </Text>
          <Box
            display='grid'
            gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
            gap={6}
          >
            {sortedPinned.map((project, i) => (
              <PinnedCard
                key={project.id}
                project={project}
                index={i}
                repo={repos.find(r => r.name === project.id)}
              />
            ))}
          </Box>
        </Box>

        {/* ── All repos ── */}
        <Box>
          <Text fontSize='10px' fontWeight='bold' textTransform='uppercase' letterSpacing='0.2em' color={mutedColor} mb={2}>
            All Repositories
          </Text>
          {allRepos.map(repo => (
            <RepoRow key={repo.id} repo={repo} />
          ))}
        </Box>
      </Box>
    </>
  )
}

export async function getServerSideProps(): Promise<{ props: ProjectsProps }> {
  const [userResponse, reposResponse] = await Promise.all([
    fetch('https://api.github.com/users/a1shverma'),
    fetch('https://api.github.com/users/a1shverma/repos?per_page=100'),
  ])

  const user = await userResponse.json()
  const repositories = await reposResponse.json()

  const notForked = Array.isArray(repositories)
    ? repositories.filter((repo: any) => !repo.fork)
    : []

  const stars = notForked.reduce((a: number, r: any) => a + (r.stargazers_count || 0), 0)

  const repos = notForked.map(({ id, name, html_url, created_at, pushed_at, language, description, fork, stargazers_count }: any) => ({
    id, name, html_url, created_at, pushed_at, language, description, fork, stargazers_count,
  }))

  return { props: { stars, repos, followers: user.followers || 0, revalidate: 600 } }
}

export default Projects
