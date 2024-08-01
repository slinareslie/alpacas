import React from "react";
import { Container, Typography, Box, Button, Grid, Link } from "@mui/material";
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
      <br></br>
      <Box
        sx={{
          marginTop: "auto",
          padding: 2,
          backgroundColor: "#1976d2",
          width: "100%",
          textAlign: "center",
          borderRadius: "16px",
          color: "#fff",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          <Link href="/about" color="inherit" underline="none">
            Acerca de Nosotros
          </Link>
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Box sx={{ flex: "1 1 45%", textAlign: "center" }}>
            <Typography variant="body1">Milene Dariela Veliz Cosi</Typography>
            <Typography variant="body1">
              <Link href="mailto:mvelizc@unjbg.edu.pe" color="inherit">
                mvelizc@unjbg.edu.pe
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link
                href="https://www.linkedin.com/in/milene-veliz-305524295/"
                color="inherit"
              >
                LinkedIn
              </Link>
            </Typography>
          </Box>

          <Box sx={{ flex: "1 1 45%", textAlign: "center" }}>
            <Typography variant="body1">Guini Doaiva Lopez Velarde</Typography>
            <Typography variant="body1">
              <Link href="mailto:gdlopezv@unjbg.edu.pe" color="inherit">
                gdlopezv@unjbg.edu.pe
              </Link>
            </Typography>
          </Box>

          <Box sx={{ flex: "1 1 45%", textAlign: "center" }}>
            <Typography variant="body1">
              Massiel Tamara Choquecota Mamani
            </Typography>
            <Typography variant="body1">
              <Link href="mailto:mchoquecotam@unjbg.edu.pe" color="inherit">
                mchoquecotam@unjbg.edu.pe
              </Link>
            </Typography>
          </Box>

          <Box sx={{ flex: "1 1 45%", textAlign: "center" }}>
            <Typography variant="body1">
              Claudia Rocio Llangato Rosas
            </Typography>
            <Typography variant="body1">
              <Link href="mailto:crllangator@unjbg.edu.pe" color="inherit">
                crllangator@unjbg.edu.pe
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default StatsPage;
