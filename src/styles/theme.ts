import { extendTheme, Theme } from '@chakra-ui/react';


const breakpoints = {
  xs: '23.43em',
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}

export const theme = extendTheme({
  breakpoints,
  colors: {
    hightlight: {
      500: '#FFBA08',
      50: '#FFBA0877'
    },
    light: {
      info: '#DADADA',
      white: '#FFFFFF',
      headingsAndTexts: '#F5F8FA'
    },
    dark: {
      headingsAndTexts: '#47585B',
      black: '#000000',
      info: '#999999',
      infoMiddleOpct: '#99999977'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'light.headingsAndTexts',
      },
      html: {
        height: '100vh',
        width: '100%'
      }
    }
  }
});

// Para funcionar o intelisense deve-se adicionar:
// } as Theme || {});

