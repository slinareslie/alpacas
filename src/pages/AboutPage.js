import React from "react";
import { Container, Typography, Box, Grid, Link, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate("/");
  };

  return (
    <Container
      sx={{
        padding: 4,
        backgroundColor: "#f5f5f5",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ fontWeight: "bold", marginBottom: 4 }}
      >
        Acerca de Nosotros
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={3}>
          <Box
            sx={{
              padding: 2,
              textAlign: "center",
              backgroundColor: "white",
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Milene Dariela Veliz Cosi
            </Typography>
            <Typography variant="body1" gutterBottom>
              Estudiante de Medicina Veterinaria
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Link href="mailto:mvelizc@unjbg.edu.pe">
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
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box
            sx={{
              padding: 2,
              textAlign: "center",
              backgroundColor: "white",
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Guini Doaiva Lopez Velarde
            </Typography>
            <Typography variant="body1" gutterBottom>
              Estudiante de Medicina Veterinaria
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Link href="mailto:gdlopezv@unjbg.edu.pe">
                gdlopezv@unjbg.edu.pe
              </Link>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box
            sx={{
              padding: 2,
              textAlign: "center",
              backgroundColor: "white",
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Massiel Tamara Choquecota Mamani
            </Typography>
            <Typography variant="body1" gutterBottom>
              Estudiante de Medicina Veterinaria
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Link href="mailto:mchoquecotam@unjbg.edu.pe">
                mchoquecotam@unjbg.edu.pe
              </Link>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box
            sx={{
              padding: 2,
              textAlign: "center",
              backgroundColor: "white",
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Claudia Rocio Llangato Rosas
            </Typography>
            <Typography variant="body1" gutterBottom>
              Estudiante de Medicina Veterinaria
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Link href="mailto:crllangator@unjbg.edu.pe">
                crllangator@unjbg.edu.pe
              </Link>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box
            sx={{
              padding: 2,
              textAlign: "center",
              backgroundColor: "white",
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Sebastian Tomas Linares Liendo
            </Typography>
            <Typography variant="body1" gutterBottom>
              Asesor de Desarrollo Web
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Link href="mailto:sebastianlinares2409@gmail.com">
                sebastianlinares2409@gmail.com
              </Link>
            </Typography>
            <Link
              href="https://www.linkedin.com/in/sebastian-linares24"
              color="inherit"
            >
              LinkedIn
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
        <Button variant="contained" color="primary" onClick={handleHomePage}>
          Volver a la Página Principal
        </Button>
      </Box>
    </Container>
  );
};

export default AboutPage;
