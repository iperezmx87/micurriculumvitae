import React from "react";
import { Box, Typography, Button, Stack, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Hero() {
  return (
    <Box component="section" sx={{ textAlign: "center", pt: 4 }}>
      <Typography variant="h1" color="primary" gutterBottom>
        Israel Pérez Saucedo
      </Typography>
      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ mb: 2, fontWeight: 400 }}
      >
        Software Architect & Technical Lead
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ maxWidth: "600px", mx: "auto", mb: 4 }}
      >
        Ingeniero en Informática con 15 años de experiencia especializado en
        arquitectura de software y liderazgo técnico de squads en el sector
        Retail y Fintech. Experto en el ecosistema .NET y soluciones escalables
        en la nube (GCP/Azure).
      </Typography>

      {/* Redes y Contacto */}
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 4 }}>
        <Link
          href="https://github.com/iperezmx87"
          target="_blank"
          color="inherit"
        >
          <GitHubIcon fontSize="large" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/israel-p-1074b419/"
          target="_blank"
          color="inherit"
        >
          <LinkedInIcon fontSize="large" />
        </Link>
        <Link href="mailto:isra.saucedo50@outlook.com" color="inherit">
          <EmailIcon fontSize="large" />
        </Link>
      </Stack>

      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="contained" color="primary" href="#projects">
          Ver Proyectos
        </Button>

        <Link href="/cv_perez_saucedo.pdf" target="_blank" underline="none">
          Descargar CV (PDF)
        </Link>
      </Stack>
    </Box>
  );
}
