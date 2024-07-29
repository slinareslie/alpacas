import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getAlpacaById } from "../services/api";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";

const AlpacaDetailPage = () => {
  const { id } = useParams();
  const [alpaca, setAlpaca] = useState(null);

  useEffect(() => {
    getAlpacaById(id).then((data) => setAlpaca(data));
  }, [id]);

  if (!alpaca) {
    return <div>Cargando...</div>;
  }

  const renderAttribute = (label, value) => {
    if (value !== null && value !== undefined) {
      return (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ marginBottom: 1 }}
        >
          <strong>{label}:</strong> {value}
        </Typography>
      );
    }
    return null;
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Card>
        <Box sx={{ textAlign: "center", padding: 2 }}>
          <Typography
            variant="h3"
            component="div"
            sx={{
              fontWeight: "bold",
              color: "#1976d2",
              marginBottom: 2,
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
            }}
          >
            {alpaca.nro_arete}
          </Typography>
        </Box>
        <CardContent>
          {renderAttribute("Edad", alpaca.edad)}
          {renderAttribute("Peso", `${alpaca.peso} kg`)}
          {renderAttribute("Condición Corporal", alpaca.condicion_corporal)}
          {renderAttribute("Raza", alpaca.raza)}
          {renderAttribute("Altura Cruz", `${alpaca.altura_cruz} cm`)}
          {renderAttribute("Altura Grupa", `${alpaca.altura_grupa} cm`)}
          {renderAttribute("Longitud del Cuerpo", `${alpaca.long_cuerpo} cm`)}
          {renderAttribute("Ancho de Grupa", `${alpaca.ancho_grupa} cm`)}
          {renderAttribute(
            "Perímetro Torácico",
            `${alpaca.perimetro_toracico} cm`
          )}
          {renderAttribute("Ancho de Cabeza", `${alpaca.ancho_cabeza} cm`)}
          {renderAttribute("Largo de Cabeza", `${alpaca.largo_cabeza} cm`)}
          {renderAttribute("Isquiones", `${alpaca.isquiones} cm`)}
          {renderAttribute("Orejas", `${alpaca.orejas} cm`)}
          {renderAttribute("Largo de Cuello", alpaca.largo_cuello)}
          {renderAttribute("Amplitud de Pecho", alpaca.amplitud_pecho)}
          {renderAttribute("Aplomo Anterior", alpaca.aplomo_anterior)}
          {renderAttribute("Aplomo Posterior", alpaca.aplomo_posterior)}
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              component={Link}
              to="/"
              sx={{ marginTop: 2 }}
            >
              Volver
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AlpacaDetailPage;
