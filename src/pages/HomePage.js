import React, { useState, useEffect } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import AlpacaCard from "../components/AlpacaCard";
import { getAlpacas } from "../services/api";
import {
  Container,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Box,
  Button,
  ButtonGroup,
  Link,
} from "@mui/material";
import useFilteredAlpacas from "../hooks/useFilteredAlpacas";
import bannerImage from "../assets/banner.jpg";

const HomePage = () => {
  const [alpacas, setAlpacas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchField, setSearchField] = useState("nro_arete");
  const [genderFilter, setGenderFilter] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getAlpacas().then((data) => {
      setAlpacas(data);
    });
  }, []);

  const sortedFilteredAlpacas = useFilteredAlpacas(
    alpacas,
    searchTerm,
    searchField,
    genderFilter
  );

  return (
    <Container
      sx={{
        backgroundColor: "#f5f5dc",
        minHeight: "100vh",
        padding: 0,
        color: "#333",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          position: "relative",
          width: "100%",
          height: "50vh",
          borderRadius: "16px",
          overflow: "hidden",
          mb: 4,
        }}
      >
        <img
          src={bannerImage}
          alt="Banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "16px",
            display: "block",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            textAlign: "center",
            padding: 2,
            borderRadius: "16px",
          }}
        >
          <Typography
            variant="h2"
            component="div"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              marginBottom: 2,
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              fontSize: { xs: "4rem", sm: "3.5rem", md: "4rem" },
            }}
          >
            ALPACAPP
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/stats")}
            sx={{ marginTop: 2 }}
          >
            Ver Estadísticas
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          mb: 4,
        }}
      >
        <Typography
          variant="h3"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "#1976d2",
            marginBottom: 2,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            fontSize: { xs: "4rem", sm: "2.5rem" },
          }}
        >
          Lista de Alpacas
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/stats")}
          sx={{ marginTop: 2 }}
        >
          Ver Estadísticas
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          gap: 2,
          marginBottom: 4,
          width: "100%",
        }}
      >
        <TextField
          label="Buscar"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            width: { xs: "100%", sm: "50%" },
          }}
        />
        <TextField
          select
          label="Buscar por"
          variant="outlined"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
          sx={{
            width: { xs: "100%", sm: "25%" },
          }}
        >
          <MenuItem value="nro_arete">Nro Arete</MenuItem>
          <MenuItem value="edad">Edad</MenuItem>
          <MenuItem value="peso">Peso</MenuItem>
          <MenuItem value="condicion_corporal">Condición Corporal</MenuItem>
          <MenuItem value="raza">Raza</MenuItem>
        </TextField>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 4 }}>
        <ButtonGroup
          variant="contained"
          aria-label="gender filter button group"
        >
          <Button
            onClick={() => setGenderFilter("")}
            sx={{ backgroundColor: genderFilter === "" ? "#1976d2" : "#ccc" }}
          >
            Todos
          </Button>
          <Button
            onClick={() => setGenderFilter("hembra")}
            sx={{
              backgroundColor: genderFilter === "hembra" ? "#1976d2" : "#ccc",
            }}
          >
            Hembra
          </Button>
          <Button
            onClick={() => setGenderFilter("macho")}
            sx={{
              backgroundColor: genderFilter === "macho" ? "#1976d2" : "#ccc",
            }}
          >
            Macho
          </Button>
        </ButtonGroup>
      </Box>

      <Grid container spacing={4}>
        {sortedFilteredAlpacas.map((alpaca) => (
          <Grid item key={alpaca.id} xs={12} sm={6} md={4}>
            <AlpacaCard alpaca={alpaca} />
          </Grid>
        ))}
      </Grid>
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
          <Link component={RouterLink} to="/about" color="inherit">
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

export default HomePage;
