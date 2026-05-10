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
    // ── Deep crimson red ──────────────────────────────────────────────────────
    brand: {
      primary: '#C0392B',
      50:  '#FFF0EE',
      100: '#FFD5D0',
      200: '#FFB0A8',
      300: '#F07870',
      400: '#E04840',
      500: '#C0392B',
      600: '#A02D22',
      700: '#80221A',
      800: '#5C1712',
      900: '#380D0A',
    },

    // ── Gold accent ────────────────────────────────────────────────────────────
    gold: {
      300: '#F0D080',
      400: '#D4AF37',
      500: '#B8960C',
    },

    // ── Warm dark surfaces ────────────────────────────────────────────────────
    gray: {
      50:  '#F5EEE8',   // cream — primary text on dark
      100: '#E8DDD5',
      200: '#CBBFB8',
      300: '#AFA090',
      400: '#8A7D75',
      500: '#655D58',
      600: '#423B38',
      700: '#2A1A1A',   // borders
      800: '#160D0D',   // card surfaces
      900: '#0A0808',   // main bg
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
        bg: mode('#FAF8F5', '#0A0808')(props),
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
