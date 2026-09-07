import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Heading,
  Badge,
  useColorModeValue,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import LineHeading from '@/components/LineHeading';
import experiences, { Experience, ExperienceType } from '@/data/experiences';

const typeColors: Record<ExperienceType, string> = {
  work: 'purple',
  education: 'teal',
  project: 'orange',
};

const typeLabels: Record<ExperienceType, string> = {
  work: 'Work',
  education: 'Education',
  project: 'Project',
};

type Filter = ExperienceType | 'all';

function ExperienceCard({ exp }: { exp: Experience }) {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const dotBg = useColorModeValue('brand.500', 'brand.300');
  const lineBg = useColorModeValue('gray.200', 'gray.700');
  const metaColor = useColorModeValue('gray.500', 'gray.400');

  return (
    <Flex mb={8} position='relative'>
      {/* Timeline line + dot */}
      <Flex direction='column' alignItems='center' mr={6} flexShrink={0}>
        <Box
          w='12px'
          h='12px'
          borderRadius='full'
          bg={dotBg}
          mt='18px'
          flexShrink={0}
          zIndex={1}
        />
        <Box w='2px' flex={1} bg={lineBg} mt={1} />
      </Flex>

      {/* Card */}
      <Box
        flex={1}
        bg={cardBg}
        border='1px solid'
        borderColor={borderColor}
        borderRadius='xl'
        p={5}
        mb={2}
      >
        <Flex justifyContent='space-between' alignItems='flex-start' flexWrap='wrap' gap={2}>
          <Box>
            <Heading fontSize='lg' fontWeight='semibold'>
              {exp.title}
            </Heading>
            <Text fontSize='sm' color={metaColor} mt={0.5}>
              {exp.org}{exp.location ? ` · ${exp.location}` : ''}
            </Text>
          </Box>
          <Flex gap={2} alignItems='center' flexWrap='wrap'>
            <Badge colorScheme={typeColors[exp.type]} borderRadius='full' px={2}>
              {typeLabels[exp.type]}
            </Badge>
            <Text fontSize='xs' color={metaColor} whiteSpace='nowrap'>
              {exp.startDate} – {exp.endDate}
            </Text>
          </Flex>
        </Flex>
        {exp.bullets.length > 0 && (
          <Box as='ul' mt={3} pl={4} listStyleType='disc'>
            {exp.bullets.map((b, i) => (
              <Text as='li' key={i} fontSize='sm' mt={1} color={metaColor}>
                {b}
              </Text>
            ))}
          </Box>
        )}
      </Box>
    </Flex>
  );
}

export default function Experiences(): React.ReactElement {
  const [filter, setFilter] = useState<Filter>('all');
  const activeBg = useColorModeValue('brand.500', 'brand.300');
  const activeColor = useColorModeValue('white', 'gray.900');
  const inactiveBorder = useColorModeValue('gray.300', 'gray.600');
  const inactiveHover = useColorModeValue('gray.100', 'gray.700');

  const filters: { label: string; value: Filter }[] = [
    { label: 'All', value: 'all' },
    { label: 'Work', value: 'work' },
    { label: 'Education', value: 'education' },
    { label: 'Projects', value: 'project' },
  ];

  const filtered = filter === 'all'
    ? experiences
    : experiences.filter(e => e.type === filter);

  return (
    <>
      <NextSeo title='Experiences' />
      <Flex
        direction='column'
        alignItems='center'
        width='full'
        minH='100vh'
        mx='auto'
        maxW='3xl'
        py='28'
        px={{ base: 4, md: 8 }}
      >
        <LineHeading
          fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
          textAlign='center'
        >
          Experiences
        </LineHeading>
        <Text mt={3} mb={8} color={useColorModeValue('gray.500', 'gray.400')}>
          A timeline of where I&apos;ve been and what I&apos;ve built.
        </Text>

        <ButtonGroup mb={10} spacing={2} flexWrap='wrap' justifyContent='center'>
          {filters.map(f => (
            <Button
              key={f.value}
              size='sm'
              borderRadius='full'
              onClick={() => setFilter(f.value)}
              bg={filter === f.value ? activeBg : 'transparent'}
              color={filter === f.value ? activeColor : undefined}
              border='1px solid'
              borderColor={filter === f.value ? activeBg : inactiveBorder}
              _hover={{ bg: filter === f.value ? activeBg : inactiveHover }}
            >
              {f.label}
            </Button>
          ))}
        </ButtonGroup>

        <Box width='full'>
          {filtered.map(exp => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </Box>
      </Flex>
    </>
  );
}
