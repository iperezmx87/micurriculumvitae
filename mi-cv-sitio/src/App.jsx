import React from 'react';
import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import theme from './theme';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normaliza el CSS entre navegadores */}
      <Container maxWidth="md">
        <Box sx={{ py: 6, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Hero />
          <Projects />
          <Experience />
          <Skills />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;