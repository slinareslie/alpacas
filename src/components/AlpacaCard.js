import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";

const AlpacaCard = ({ alpaca }) => {
  const [imagePath, setImagePath] = useState(null);

  useEffect(() => {
    import(`../assets/${alpaca.image}`)
      .then((image) => {
        setImagePath(image.default);
      })
      .catch((error) => {
        console.error(
          `Error cargando la imagen desde la ruta: ../assets/${alpaca.image} - ${error.message}`
        );
      });
  }, [alpaca.image]);

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      {imagePath && (
        <CardMedia
          component="img"
          height="140"
          image={imagePath}
          alt={alpaca.name}
          sx={{ objectFit: "contain" }}
        />
      )}
      <CardContent>
        <Typography variant="h5" component="div">
          {alpaca.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Peso: {alpaca.weight}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Talla: {alpaca.height}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Isquion: {alpaca.isquion}
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to={`/alpacas/${alpaca.id}`}
          sx={{ marginTop: 2 }}
        >
          Ver detalles
        </Button>
      </CardContent>
    </Card>
  );
};

export default AlpacaCard;
