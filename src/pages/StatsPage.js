import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Button, Grid } from "@mui/material";
import { Bar, Scatter, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useNavigate } from "react-router-dom";
import { getAlpacas } from "../services/api";
import { transformAlpacaData } from "../utils";

Chart.register(...registerables);

const StatsPage = () => {
  const [edadData, setEdadData] = useState(null);
  const [pesoData, setPesoData] = useState(null);
  const [condicionCorporalVsPesoData, setCondicionCorporalVsPesoData] =
    useState(null);
  const [alturaCruzVsAlturaGrupaData, setAlturaCruzVsAlturaGrupaData] =
    useState(null);
  const [razaData, setRazaData] = useState(null);
  const [sexoData, setSexoData] = useState(null);
  const [pesoEdadData, setPesoEdadData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getAlpacas().then((data) => {
      const transformedData = transformAlpacaData(data);
      setEdadData(transformedData.edadData);
      setPesoData(transformedData.pesoData);
      setCondicionCorporalVsPesoData(
        transformedData.condicionCorporalVsPesoData
      );
      setAlturaCruzVsAlturaGrupaData(
        transformedData.alturaCruzVsAlturaGrupaData
      );
      setRazaData(transformedData.razaData);
      setSexoData(transformedData.sexoData);
      setPesoEdadData(transformedData.pesoEdadData);
    });
  }, []);

  const chartBoxStyle = {
    height: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Container>
      <Box sx={{ textAlign: "center", margin: 4 }}>
        <Typography
          variant="h2"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "#1976d2",
            marginBottom: 2,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Estadísticas de Alpacas
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
          sx={{ marginTop: 2 }}
        >
          Volver a Home
        </Button>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Distribución de Edad
          </Typography>
          <Box sx={chartBoxStyle}>{edadData && <Bar data={edadData} />}</Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Distribución de Peso
          </Typography>
          <Box sx={chartBoxStyle}>{pesoData && <Bar data={pesoData} />}</Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Condición Corporal vs Peso
          </Typography>
          <Box sx={chartBoxStyle}>
            {condicionCorporalVsPesoData && (
              <Scatter data={condicionCorporalVsPesoData} />
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Altura Cruz y Altura Grupa
          </Typography>
          <Box sx={chartBoxStyle}>
            {alturaCruzVsAlturaGrupaData && (
              <Scatter data={alturaCruzVsAlturaGrupaData} />
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Análisis por Raza
          </Typography>
          <Box sx={chartBoxStyle}>{razaData && <Bar data={razaData} />}</Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Distribución por Sexo
          </Typography>
          <Box sx={chartBoxStyle}>{sexoData && <Pie data={sexoData} />}</Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Peso vs Edad
          </Typography>
          <Box sx={chartBoxStyle}>
            {pesoEdadData && <Scatter data={pesoEdadData} />}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StatsPage;
