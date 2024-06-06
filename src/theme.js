import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#947e01',
    },
    typography: {
      fontFamily: [
        'Press Start 2P',
        'Roboto', 
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  },
});

export default theme;
