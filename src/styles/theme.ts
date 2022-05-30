import { extendTheme, Theme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    headingsAndTexts: '#F5F8FA',
    white: '#FFFFFF',
    hightlight: {
      500: '#FFBA08',
      50: '#FFBA0877'
    },
    info: '#DADADA'
  },
  styles: {
    global: {
      body: {
        bg: 'info',
      }
    }
  }
});

// Para funcionar o intelisense deve-se adicionar:
// } as Theme || {});

