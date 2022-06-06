import { extendTheme, Theme } from '@chakra-ui/react';

export const theme = extendTheme({
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
        bg: 'light.info',
      }
    }
  }
});

// Para funcionar o intelisense deve-se adicionar:
// } as Theme || {});

