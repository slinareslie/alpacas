import React from "react";
import { Container, Typography, Box, Button, Grid } from "@mui/material";
import { Bar, Scatter, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useNavigate } from "react-router-dom";
import useAlpacaStats from "../hooks/useAlpacaStats";

Chart.register(...registerables);

const StatsPage = () => {
  const {
    edadData,
    pesoData,
    condicionCorporalVsPesoData,
    alturaCruzVsAlturaGrupaData,
    razaData,
    sexoData,
    pesoEdadData,
  } = useAlpacaStats();

  const navigate = useNavigate();

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
            Peso vs Edad
          </Typography>
          <Box sx={chartBoxStyle}>
            {pesoEdadData && <Scatter data={pesoEdadData} />}
          </Box>
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
            Distribución de Edad
          </Typography>
          <Box sx={chartBoxStyle}>{edadData && <Bar data={edadData} />}</Box>
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
      </Grid>
    </Container>
  );
};

export default StatsPage;
