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
  const [imagePath, setImagePath] = useState(null);

  useEffect(() => {
    getAlpacaById(id).then((data) => setAlpaca(data));
  }, [id]);

  useEffect(() => {
    if (alpaca) {
      import(`../assets/${alpaca.image}`)
        .then((image) => {
          setImagePath(image.default);
        })
        .catch((error) => {
          console.error(
            `Error cargando la imagen desde la ruta: ../assets/${alpaca.image} - ${error.message}`
          );
        });
    }
  }, [alpaca]);

  if (!alpaca) {
    return <div>Cargando...</div>;
  }

  return (
    <Container sx={{ marginTop: 4 }}>
      <Card>
        {imagePath && (
          <CardMedia
            component="img"
            height="300"
            image={imagePath}
            alt={alpaca.name}
            sx={{ objectFit: "contain" }}
          />
        )}
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
            Isquion: {alpaca.isquion}
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