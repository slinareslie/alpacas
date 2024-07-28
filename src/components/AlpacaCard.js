import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";

const AlpacaCard = ({ alpaca }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {alpaca.nro_arete}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Edad: {alpaca.edad}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Peso: {alpaca.peso}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Condición Corporal: {alpaca.condicion_corporal}
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
