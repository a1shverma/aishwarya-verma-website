import React from 'react'
import WIP from '@/components/WIP'
import { NextSeo } from 'next-seo'

export default function SideQuests(): React.ReactElement {
  return (
    <>
      <NextSeo title='Side Quests' />
      <WIP />
    </>
  )
}
