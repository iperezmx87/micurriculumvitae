import React from 'react';
import { Box, Typography, Card, CardContent, Chip, Stack } from '@mui/material';
import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineConnector, 
  TimelineContent, 
  TimelineDot 
} from '@mui/lab';
import BusinessIcon from '@mui/icons-material/Business';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TerminalIcon from '@mui/icons-material/Terminal';

// Mapeo de tus datos del CV
const jobs = [
  {
    role: "Arquitecto de Software / Tech Lead",
    company: "Servicios financieros Broxel",
    period: "Marzo 2023 - Febrero 2026",
    icon: <AccountTreeIcon color="primary" />,
    description: "Liderazgo técnico del ecosistema de Onboarding B2B y Broxel Comercios. Diseño y evolución de arquitectura distribuida utilizando patrones CQRS y Event-Driven, asegurando alta disponibilidad e integridad financiera.",
    achievements: "Entrega de plataformas operativas en 6 meses, optimizando costos de infraestructura en la nube.",
    stack: [".NET 8", "MongoDB", "GCP", "Azure", "CQRS", "DevSecOps"]
  },
  {
    role: "Desarrollador Full Stack .NET",
    company: "Grupo Salinas | Banco Azteca",
    period: "Agosto 2021 - Marzo 2023",
    icon: <BusinessIcon color="secondary" />,
    description: "Responsable del desarrollo y mantenimiento de los portales de monitoreo del core del sistema SPEI y SPID Azteca para la detección oportuna de incidentes operativos.",
    achievements: "Liberación exitosa del portal de monitoreo SPID Azteca.",
    stack: [".NET Core", "SQL Server", "SPEI", "React.js", "Bootstrap"]
  },
  {
    role: "Desarrollador Full Stack .NET",
    company: "PYV Tecnología",
    period: "Agosto 2019 - Agosto 2021",
    icon: <TerminalIcon />,
    description: "Desarrollo de software web (Zeit Compact) y aplicaciones móviles enfocadas en control de acceso por proximidad y control horario.",
    achievements: "Lanzamiento en tiempo y forma de dos aplicaciones móviles, logrando adjudicar contrato con BBVA.",
    stack: ["Xamarin.Forms", "ASP.NET", "NFC", "Bluetooth", "SQLite"]
  }
];

export default function Experience() {
  return (
    <Box id="experience" component="section">
      <Typography variant="h2" color="text.primary" sx={{ mb: 4 }}>
        Trayectoria Profesional
      </Typography>

      {/* Controlamos que en pantallas móviles el timeline se alinee a la izquierda */}
      <Timeline position="right" sx={{ p: 0 }}>
        {jobs.map((job, index) => (
          <TimelineItem key={index} sx={{ '&::before': { display: { xs: 'none', md: 'block' } } }}>
            <TimelineSeparator>
              <TimelineDot variant="outlined" sx={{ p: 1, borderColor: 'divider' }}>
                {job.icon}
              </TimelineDot>
              {index !== jobs.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="caption" color="secondary" sx={{ fontWeight: 'bold' }}>
                {job.period}
              </Typography>
              
              <Card sx={{ bgcolor: 'background.paper', mt: 1, border: '1px solid #334155' }}>
                <CardContent>
                  <Typography variant="h6" component="h3" color="primary">
                    {job.role}
                  </Typography>
                  <Typography variant="subtitle1" color="text.primary" gutterBottom sx={{ fontWeight: 500 }}>
                    {job.company}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {job.description}
                  </Typography>
                  
                  <Typography variant="body2" color="text.primary" sx={{ fontStyle: 'italic', mb: 2 }}>
                    <strong>Logro principal:</strong> {job.achievements}
                  </Typography>

                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {job.stack.map((tech) => (
                      <Chip key={tech} label={tech} size="small" variant="outlined" color="primary" />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}