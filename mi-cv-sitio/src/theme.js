import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#61dafb', // Azul React clásico
    },
    secondary: {
      main: '#a855f7', // Morado para destacar arquitectura/cloud
    },
    background: {
      default: '#0f172a', // Fondo pizarra oscuro
      paper: '#1e293b',   // Tarjetas ligeramente más claras
    },
    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    h2: { fontSize: '2rem', fontWeight: 600, marginBottom: '1rem' },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
  },
});

export default theme;