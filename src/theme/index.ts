import { ChakraTheme, extendTheme, ThemeComponentProps } from '@chakra-ui/react';
import { transparentize, mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`,
    body: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`,
    mono: `'SF Mono', 'Fira Code', monospace`,
  },
  components: {
    Link: {
      baseStyle: props => ({
        color: mode('brand.500', 'brand.400')(props),
      }),
    },
    Heading: {
      baseStyle: {
        fontFamily: `'Inter', sans-serif`,
        letterSpacing: '-0.02em',
      },
    },
    Text: {
      baseStyle: {
        fontFamily: `'Inter', sans-serif`,
      },
    },
    Button: {
      variants: {
        ghostAlwaysOn: (props: ThemeComponentProps<ChakraTheme>) => {
          const darkBg = transparentize(`${props.colorScheme}.200`, 0.12)(props.theme);
          const darkHoverBg = transparentize(`${props.colorScheme}.200`, 0.24)(props.theme);
          const darkActiveBg = transparentize(`${props.colorScheme}.200`, 0.36)(props.theme);
          return {
            color: mode(`${props.colorScheme}.600`, `${props.colorScheme}.300`)(props),
            bgColor: props.colorMode === 'light' ? `${props.colorScheme}.50` : darkBg,
            _hover: {
              bgColor: mode(`${props.colorScheme}.100`, darkHoverBg)(props),
            },
            _active: {
              bgColor: mode(`${props.colorScheme}.200`, darkActiveBg)(props),
            },
          };
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: '#0E0B0A',
        color: '#E8E3D8',
      },
      '*': {
        '&::selection': {
          color: 'black',
          bg: '#C4503A',
        },
      },
    },
  },
  colors: {
    brand: {
      50: `#FDF0ED`,
      100: `#FADDD6`,
      200: `#F4B8AC`,
      300: `#EC8E7E`,
      400: `#D96652`,
      500: `#C4503A`,
      600: `#A63D2A`,
      700: `#8A2E1E`,
      800: `#6E2015`,
      900: `#52160C`,
    },
  },
});

export default theme;
