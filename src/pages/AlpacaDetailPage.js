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
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: 1 }}
          >
            <strong>Edad:</strong> {alpaca.edad}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: 1 }}
          >
            <strong>Peso:</strong> {alpaca.peso}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: 1 }}
          >
            <strong>Condición Corporal:</strong> {alpaca.condicion_corporal}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: 1 }}
          >
            <strong>Raza:</strong> {alpaca.raza}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: 1 }}
          >
            <strong>Altura Cruz:</strong> {alpaca.altura_cruz}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: 1 }}
          >
            <strong>Altura Grupa:</strong> {alpaca.altura_grupa}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: 1 }}
          >
            <strong>Longitud del Cuerpo:</strong> {alpaca.long_cuerpo}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: 1 }}
          >
            <strong>Ancho de Grupa:</strong> {alpaca.ancho_grupa}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: 1 }}
          >
            <strong>Perímetro Torácico:</strong> {alpaca.perimetro_toracico}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: 1 }}
          >
            <strong>Ancho de Cabeza:</strong> {alpaca.ancho_cabeza}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: 1 }}
          >
            <strong>Largo de Cabeza:</strong> {alpaca.largo_cabeza}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: 1 }}
          >
            <strong>Isquiones:</strong> {alpaca.isquiones}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: 1 }}
          >
            <strong>Orejas:</strong> {alpaca.orejas}
          </Typography>
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
