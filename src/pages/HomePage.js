// src/pages/HomePage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
} from "@mui/material";
import useFilteredAlpacas from "../hooks/useFilteredAlpacas";

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
          justifyContent: "center",
          gap: 2,
          marginBottom: 4,
        }}
      >
        <TextField
          label="Buscar"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: "50%" }}
        />
        <TextField
          select
          label="Buscar por"
          variant="outlined"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
          sx={{ width: "25%" }}
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
    </Container>
  );
};

export default HomePage;
