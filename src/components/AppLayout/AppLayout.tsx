import React from 'react'
import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import Nav from '../NavBar/Nav'
import Footer from '../Footer/Footer'

interface AppLayoutProps {
  children: React.ReactElement
}

const AppLayout = ({ children }: AppLayoutProps): JSX.Element => {
  const router = useRouter()

  return (
    <>
      <NextSeo
        canonical={`https://aishverma.vercel.app/${router.asPath}`}
        openGraph={{ url: `https://aishverma.vercel.app/${router.asPath}` }}
      />
      <Nav />
      <Box>
        {children}
      </Box>
      <Footer />
    </>
  )
}

export default AppLayout
