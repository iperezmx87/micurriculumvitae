import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";

export default function Projects() {
  return (
    <Box id="projects" component="section">
      <Typography variant="h2" color="text.primary">
        Proyectos Destacados
      </Typography>
      <Card sx={{ bgcolor: "background.paper", border: "1px solid #334155" }}>
        <CardContent>
          <Typography variant="h5" color="primary" gutterBottom>
            Ecosistema de Microservicios Bancarios
          </Typography>
          <Typography variant="subtitle2" color="secondary" sx={{ mb: 2 }}>
            Event Sourcing & CQRS (Referencia Técnica Personal)
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Diseño y construcción de una arquitectura distribuida de alto
            rendimiento utilizando .NET 10 y C#. Implementación de patrones
            Event Sourcing con MongoDB como Event Store y CQRS. Garantía de
            consistencia atómica mediante el patrón Transactional Outbox y
            Apache Kafka como Message Broker.
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            useFlexGap
            sx={{ mt: 2 }}
          >
            {[".NET 10", "C#", "Kafka", "MongoDB", "CQRS", "React"].map(
              (tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  color="secondary"
                  variant="outlined"
                />
              ),
            )}
          </Stack>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            startIcon={<CodeIcon />}
            href="https://github.com/iperezmx87/DemoMicroservicios"
            target="_blank"
          >
            Ver Código en GitHub
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
