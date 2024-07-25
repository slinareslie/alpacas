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
  Box,
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
        <Box sx={{ textAlign: "center", padding: 2 }}>
          <Typography
            variant="h3"
            component="div"
            sx={{
              fontWeight: "bold",
              color: "#1976d2",
              marginBottom: 2,
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
            }}
          >
            {alpaca.name}
          </Typography>
        </Box>
        {imagePath && (
          <CardMedia
            component="img"
            height="300"
            image={imagePath}
            alt={alpaca.name}
            sx={{ objectFit: "contain", margin: "auto", padding: 2 }}
          />
        )}
        <CardContent>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: 1 }}
          >
            <strong>Peso:</strong> {alpaca.weight}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: 1 }}
          >
            <strong>Talla:</strong> {alpaca.height}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: 1 }}
          >
            <strong>Isquion:</strong> {alpaca.isquion}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: 1 }}
          >
            <strong>Edad:</strong> {alpaca.age}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: 1 }}
          >
            <strong>Color:</strong> {alpaca.color}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: 2 }}
          >
            <strong>Descripción:</strong> {alpaca.description}
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              component={Link}
              to="/"
              sx={{ marginTop: 2 }}
            >
              Volver
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AlpacaDetailPage;
