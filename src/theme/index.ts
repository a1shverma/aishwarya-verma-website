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
    // ── Electric violet accent ─────────────────────────────────────────────────
    brand: {
      primary: '#8B5CF6',
      50:  '#F3F0FF',
      100: '#E4DFFE',
      200: '#C8BCFD',
      300: '#A98EFB',
      400: '#8B5CF6',
      500: '#7C3AED',
      600: '#6D28D9',
      700: '#5B21B6',
      800: '#4C1D95',
      900: '#2E1065',
    },

    // ── Cool navy-dark gray scale ──────────────────────────────────────────────
    gray: {
      50:  '#F0F2FF',
      100: '#DDE0FF',
      200: '#B8BEFF',
      300: '#8A92E8',
      400: '#6068C8',
      500: '#404898',
      600: '#2C3270',
      700: '#1C2050',   // borders in dark
      800: '#10132A',   // card surfaces in dark
      900: '#07080F',   // main bg in dark
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
        bg: mode('#FAFBFF', '#07080F')(props),
        color: mode('gray.900', '#E8EEFF')(props),
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
