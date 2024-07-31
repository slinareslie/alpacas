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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery,
} from "@mui/material";

const AlpacaDetailPage = () => {
  const { id } = useParams();
  const [alpaca, setAlpaca] = useState(null);
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    getAlpacaById(id).then((data) => setAlpaca(data));
  }, [id]);

  if (!alpaca) {
    return <div>Cargando...</div>;
  }

  const datosCorporales = [
    { label: "Edad", value: alpaca.edad },
    { label: "Peso", value: alpaca.peso, unit: "kg" },
    { label: "Condición Corporal", value: alpaca.condicion_corporal },
    { label: "Raza", value: alpaca.raza },
    { label: "Altura Cruz", value: alpaca.altura_cruz, unit: "cm" },
    { label: "Altura Grupa", value: alpaca.altura_grupa, unit: "cm" },
    { label: "Longitud del Cuerpo", value: alpaca.long_cuerpo, unit: "cm" },
    { label: "Ancho de Grupa", value: alpaca.ancho_grupa, unit: "cm" },
    {
      label: "Perímetro Torácico",
      value: alpaca.perimetro_toracico,
      unit: "cm",
    },
    { label: "Ancho de Cabeza", value: alpaca.ancho_cabeza, unit: "cm" },
    { label: "Largo de Cabeza", value: alpaca.largo_cabeza, unit: "cm" },
    { label: "Orejas", value: alpaca.orejas, unit: "cm" },
    { label: "Largo de Cuello", value: alpaca.largo_cuello, unit: "cm" },
    { label: "Amplitud de Pecho", value: alpaca.amplitud_pecho, unit: "cm" },
    { label: "Aplomo Anterior", value: alpaca.aplomo_anterior},
    { label: "Aplomo Posterior", value: alpaca.aplomo_posterior},
    { label: "Sexo", value: alpaca.sexo },
  ];

  const valorNutricional = [
    { label: "Estado Fisiológico", value: alpaca.estado_fisiologico },
    { label: "Materia Seca", value: alpaca.materia_seca, unit: "kg/día" },
    { label: "Proteína Cruda", value: alpaca.proteina_cruda, unit: "%" },
    { label: "Energía", value: alpaca.energia, unit: "Mcal/día" },
    { label: "Calcio", value: alpaca.calcio, unit: "g/día" },
    { label: "Fósforo", value: alpaca.fosforo, unit: "g/día" },
    { label: "Selenio", value: alpaca.selenio, unit: "mg/día" },
    { label: "Agua", value: alpaca.agua, unit: "litros/día" },
  ];

  const renderTable = (title, attributes) => (
    <TableContainer component={Paper} sx={{ marginBottom: 4 }}>
      <Typography variant="h6" sx={{ padding: 2 }}>
        {title}
      </Typography>
      <Table aria-label={`${title} table`}>
        <TableHead>
          <TableRow>
            <TableCell>Atributo</TableCell>
            <TableCell align="right">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {attributes
            .filter((attr) => attr.value !== null && attr.value !== undefined)
            .map((attr) => (
              <TableRow key={attr.label}>
                <TableCell component="th" scope="row">
                  <Typography variant="body1" color="text.secondary">
                    <strong>{attr.label}</strong>
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body1" color="text.secondary">
                    {`${attr.value} ${attr.unit || ""}`.trim()}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  const renderAttributesForMobile = (title, attributes) => (
    <Box sx={{ marginBottom: 4 }}>
      <Typography variant="h6" sx={{ padding: 2 }}>
        {title}
      </Typography>
      {attributes
        .filter((attr) => attr.value !== null && attr.value !== undefined)
        .map((attr) => (
          <Box
            key={attr.label}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: 1,
              borderBottom: "1px solid #ddd",
            }}
          >
            <Typography variant="body1" color="text.secondary">
              <strong>{attr.label}</strong>
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {`${attr.value} ${attr.unit || ""}`.trim()}
            </Typography>
          </Box>
        ))}
    </Box>
  );

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
          {isMobile ? (
            <>
              {renderAttributesForMobile("Datos Corporales", datosCorporales)}
              {renderAttributesForMobile("Valor Nutricional", valorNutricional)}
            </>
          ) : (
            <>
              {renderTable("Datos Corporales", datosCorporales)}
              {renderTable("Valor Nutricional", valorNutricional)}
            </>
          )}
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
