import { ChakraTheme, extendTheme, ThemeComponentProps } from '@chakra-ui/react';
import { transparentize, mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },

  fonts: {
    heading: `'Cabinet Grotesk', sans-serif`,
    body: `'Ubuntu', sans-serif`,
  },

  colors: {
    // ── Hot pink accent ───────────────────────────────────────────────────────
    brand: {
      primary: '#FF2D6B',
      50:  '#FFF0F5',
      100: '#FFD6E5',
      200: '#FFB3CC',
      300: '#FF85AA',
      400: '#FF4D80',
      500: '#FF2D6B',
      600: '#E01557',
      700: '#B30D43',
      800: '#800830',
      900: '#4D031D',
    },

    // ── Warm gray scale (drives all dark surfaces) ────────────────────────────
    gray: {
      50:  '#F5EEE8',   // cream — used for light-mode bg and dark-mode primary text
      100: '#E8DDD5',
      200: '#CBBFB8',
      300: '#AFA090',
      400: '#8A7D75',
      500: '#655D58',
      600: '#423B38',
      700: '#2A2220',   // borders in dark
      800: '#1A1412',   // card surfaces in dark
      900: '#0C0A0B',   // main bg in dark
    },
  },

  components: {
    Heading: {
      baseStyle: {
        fontFamily: `'Cabinet Grotesk', sans-serif`,
        fontWeight: '800',
        letterSpacing: '-0.02em',
      },
    },
    Text: {
      baseStyle: {
        fontFamily: `'Ubuntu', sans-serif`,
      },
    },
    Link: {
      baseStyle: (props: any) => ({
        color: mode('brand.600', 'brand.400')(props),
      }),
    },
    Button: {
      variants: {
        ghostAlwaysOn: (props: ThemeComponentProps<ChakraTheme>) => {
          const darkBg = transparentize(`${props.colorScheme}.200`, 0.12)(props.theme);
          const darkHoverBg = transparentize(`${props.colorScheme}.200`, 0.24)(props.theme);
          const darkActiveBg = transparentize(`${props.colorScheme}.200`, 0.36)(props.theme);
          return {
            color: mode(`${props.colorScheme}.600`, `${props.colorScheme}.200`)(props),
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
        bg: mode('#FAFAF8', '#0C0A0B')(props),
        color: mode('gray.900', 'gray.50')(props),
      },
      '*': {
        _selection: {
          color: 'white',
          bg: 'brand.500',
        },
      },
    }),
  },
});

export default theme;
