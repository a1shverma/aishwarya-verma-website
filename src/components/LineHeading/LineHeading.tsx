import { Heading, HeadingProps } from '@chakra-ui/react'
import React from 'react'

const LineHeading = ({ children, ...props }: HeadingProps): JSX.Element => (
  <Heading
    position='relative'
    pb={3}
    _after={{
      content: `''`,
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      height: '2px',
      width: '40px',
      bg: 'brand.500',
    }}
    {...props}
  >
    {children}
  </Heading>
)

export default LineHeading
