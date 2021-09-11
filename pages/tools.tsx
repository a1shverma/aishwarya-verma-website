import React from 'react'
import {
  Flex,
  HStack,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import LineHeading from '@/components/LineHeading'
import ToolGrid from '@/components/ToolGrid'
import { AiOutlineDesktop } from 'react-icons/ai'
import { NextSeo } from 'next-seo'

function Tools(): React.ReactElement {
  return (
    <>
      <NextSeo title='Tools' />
      <Flex direction='column' alignItems='center' width='full' minH='100vh' mx='auto' maxW='6xl'>
        <LineHeading
          mt='28'
          fontSize={{ base: `3xl`, sm: `4xl`, md: `5xl`, lg: `6xl` }}
          textAlign='center'
        >
          Tools
        </LineHeading>
        <Text mt={3}>Some tools that I know and enjoy working with.</Text>
        <Tabs variant='soft-rounded' colorScheme='blue' align='center' w='100%' mt='10' mb='24'>
          <TabList display='flex' flexWrap='wrap'>
            <Tab
              bg={useColorModeValue(`white.100`, `gray.800`)}
              color={useColorModeValue(`gray.600`, `gray.500`)}
              _selected={{
                color: `red.800`,
                bg: `red.100`,
              }}
              mr={2}
              mt={2}
            >
              <HStack spacing={1}>
                <Icon as={AiOutlineDesktop} />
                <Text>Languages</Text>
              </HStack>
            </Tab>
            <Tab
              bg={useColorModeValue(`white`, `gray.800`)}
              color={useColorModeValue(`gray.600`, `gray.500`)}
              _selected={{
                color: `pink.800`,
                bg: `pink.100`,
              }}
              mr={2}
              mt={2}
            >
              <HStack spacing={1}>
                <Icon as={AiOutlineDesktop} />
                <Text>Full Stack Development</Text>
              </HStack>
            </Tab>
            <Tab
              bg={useColorModeValue(`white`, `gray.800`)}
              color={useColorModeValue(`gray.600`, `gray.500`)}
              _selected={{
                color: `purple.800`,
                bg: `purple.100`,
              }}
              mr={2}
              mt={2}
              s
            >
              <HStack spacing={1}>
                <Icon as={AiOutlineDesktop} />
                <Text>DevOps</Text>
              </HStack>
            </Tab>
            <Tab
              bg={useColorModeValue(`white`, `gray.800`)}
              color={useColorModeValue(`gray.600`, `gray.500`)}
              _selected={{
                color: `blue.800`,
                bg: `blue.100`,
              }}
              mr={2}
              mt={2}
            >
              <HStack spacing={1}>
                <Icon as={AiOutlineDesktop} />
                <Text>Data Analytics</Text>
              </HStack>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <ToolGrid filter='Languages' />
            </TabPanel>
            <TabPanel>
              <ToolGrid filter='Full Stack Development' />
            </TabPanel>
            <TabPanel>
              <ToolGrid filter='DevOps' />
            </TabPanel>
            <TabPanel>
              <ToolGrid filter='Data Analytics' />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  )
}

export default Tools
