import { ChakraTheme, extendTheme, ThemeComponentProps } from '@chakra-ui/react';
import { transparentize, mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
  },
  fonts: {
    heading: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`,
    body: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`,
    mono: `'SF Mono', 'Fira Code', monospace`,
  },
  components: {
    Link: {
      baseStyle: props => ({
        color: mode('brand.600', 'brand.400')(props),
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
    global: (props: any) => ({
      body: {
        bg: mode('#FAFAF9', '#0D0D0D')(props),
        color: mode('#0A0A0A', '#F5F4F0')(props),
      },
      '*': {
        _selection: {
          color: props.colorMode === `dark` ? `black` : `white`,
          bg: props.colorMode === `dark` ? `brand.300` : `brand.600`,
        },
      },
    }),
  },
  colors: {
    brand: {
      50: `#F5F0FF`,
      100: `#EDE5FF`,
      200: `#D8C9FF`,
      300: `#BE9FFF`,
      400: `#9A75F9`,
      500: `#6E56CF`,
      600: `#5A40B8`,
      700: `#4730A0`,
      800: `#352280`,
      900: `#23145F`,
    },
  },
});

export default theme;
