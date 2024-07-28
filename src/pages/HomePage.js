import React, { useState, useEffect } from "react";
import AlpacaCard from "../components/AlpacaCard";
import { getAlpacas } from "../services/api";
import {
  Container,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Box,
} from "@mui/material";

const HomePage = () => {
  const [alpacas, setAlpacas] = useState([]);
  const [filteredAlpacas, setFilteredAlpacas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchField, setSearchField] = useState("nro_arete");

  useEffect(() => {
    getAlpacas().then((data) => {
      setAlpacas(data);
      setFilteredAlpacas(data);
    });
  }, []);

  useEffect(() => {
    const filtered = alpacas.filter((alpaca) => {
      return alpaca[searchField]
        .toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
    setFilteredAlpacas(filtered);
  }, [searchTerm, searchField, alpacas]);

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
        </TextField>
      </Box>
      <Grid container spacing={4}>
        {filteredAlpacas.map((alpaca) => (
          <Grid item key={alpaca.id} xs={12} sm={6} md={4}>
            <AlpacaCard alpaca={alpaca} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
