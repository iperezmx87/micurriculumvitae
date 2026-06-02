import React, { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import SmartphoneIcon from "@mui/icons-material/Smartphone";

// Agrupamos tus aptitudes técnicas por dominios de arquitectura
const skillsData = [
  {
    label: "Backend & Core",
    icon: <CodeIcon />,
    description:
      "Sólida experiencia diseñando sistemas distribuidos, microservicios y APIs de alto rendimiento.",
    skills: [
      "C#",
      "Microsoft .NET Core (3.1 - 8)",
      "Microsoft .NET 3.5 - 4.8",
      "VB.NET",
      "Java",
      "TypeScript",
      "JavaScript",
      "CQRS",
      "Event Sourcing",
      "Dapper",
    ],
  },
  {
    label: "Bases de Datos",
    icon: <StorageIcon />,
    description:
      "Manejo de persistencia relacional, NoSQL y almacenamiento optimizado para eventos.",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "SQL Server (2008 - 2017)",
      "CosmosDB",
      "MariaDB",
      "MySQL",
      "SQLite",
      "Firestore",
    ],
  },
  {
    label: "Cloud & DevOps",
    icon: <CloudQueueIcon />,
    description:
      "Evolución de infraestructuras hacia arquitecturas escalables, tolerantes a fallos y rentables en la nube.",
    skills: [
      "Google Cloud Platform (GCP)",
      "Microsoft Azure",
      "GCP GKE (Kubernetes)",
      "Cloudrun",
      "Apache Kafka",
      "App Service",
      "Azure VM / GCP VM",
      "DevSecOps",
    ],
  },
  {
    label: "Frontend & Mobile",
    icon: <SmartphoneIcon />,
    description:
      "Desarrollo de interfaces modernas y aplicaciones nativas/híbridas de grado empresarial.",
    skills: [
      "React.JS",
      "Vue.JS",
      "Xamarin.Forms (3.5 - 5)",
      "Xamarin.Forms XAML",
      "Swift",
      "Objective C",
      "Bootstrap",
      "jQuery",
      "Knockout.JS",
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box id="skills" component="section" sx={{ width: "100%" }}>
      <Typography variant="h2" color="text.primary" sx={{ mb: 1 }}>
        Bóveda Tecnológica
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Explora las herramientas, lenguajes y patrones que he dominado e
        implementado a lo largo de mi trayectoria.
      </Typography>

      {/* Navegación por Pestañas */}
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="Filtro de habilidades técnicas"
          textColor="primary"
          indicatorColor="primary"
        >
          {skillsData.map((category, index) => (
            <Tab
              key={index}
              label={category.label}
              icon={category.icon}
              iconPosition="start"
              sx={{ minHeight: "48px", textTransform: "none", fontWeight: 600 }}
            />
          ))}
        </Tabs>
      </Box>

      {/* Contenido Dinámico de la Pestaña Activa */}
      <Grid container>
        <Grid item xs={12}>
          <Card
            sx={{ bgcolor: "background.paper", border: "1px solid #334155" }}
          >
            <CardContent sx={{ p: 3 }}>
              <Typography
                variant="subtitle1"
                color="secondary"
                gutterBottom
                sx={{ fontWeight: 500 }}
              >
                {skillsData[activeTab].description}
              </Typography>

              <Stack
                direction="row"
                spacing={1.5}
                flexWrap="wrap"
                useFlexGap
                sx={{ mt: 3 }}
              >
                {skillsData[activeTab].skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    color="primary"
                    variant="outlined"
                    sx={{
                      px: 1,
                      py: 2,
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      backgroundColor: "rgba(97, 218, 251, 0.04)", // Sutil fondo azul React
                      "&:hover": {
                        backgroundColor: "rgba(97, 218, 251, 0.15)",
                        borderColor: "primary.main",
                      },
                    }}
                  />
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
