import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    blue: {
      50: '#5fccff',
      400: '##5b76bd',
      900: '#454d66',
    },
    purple: {
      50: '#d09cff',
    },
    green: {
      50: '#9ae270',
      100: '#86d15a',
      900: '#1f5e31',
    },
    yellow: {
      50: '#ffe770',
    },
    grey: {
      50: '#f5f5f5',
    },
    transparentWhite: 'rgba(255,0,0,0.1)',
  },
});
