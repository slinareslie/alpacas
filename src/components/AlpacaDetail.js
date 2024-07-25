import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getAlpacaById } from "../services/api";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
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

  let imagePath;
  try {
    imagePath = require(`../assets/${alpaca.image}`);
    alert(`Imagen cargada: ${imagePath.default}`);
  } catch (error) {
    alert(
      `Error cargando la imagen en la ruta ../assets/${alpaca.image} - ${error}`
    );
  }

  return (
    <Container sx={{ marginTop: 4 }}>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={imagePath?.default}
          alt={alpaca.name}
        />
        <CardContent>
          <Typography variant="h4" component="div">
            {alpaca.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Peso: {alpaca.weight}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Talla: {alpaca.height}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Edad: {alpaca.age}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Color: {alpaca.color}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Descripción: {alpaca.description}
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/"
            sx={{ marginTop: 2 }}
          >
            Volver
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AlpacaDetailPage;
