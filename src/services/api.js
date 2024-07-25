export const getAlpacas = async () => {
  return [
    {
      id: 1,
      name: "Alpaca 1",
      weight: "70kg",
      height: "1m",
      isquion: "32cm",
      age: "2 años",
      color: "Blanco",
      description: "Una alpaca muy amigable.",
      image: "alpaca1.jpg",
    },
    {
      id: 2,
      name: "Alpaca 2",
      weight: "75kg",
      height: "1.1m",
      isquion: "34cm",
      age: "3 años",
      color: "Marrón",
      description: "Le encanta correr.",
      image: "alpaca2.jpg",
    },
    {
      id: 3,
      name: "Alpaca 3",
      weight: "75kg",
      height: "1.1m",
      isquion: "34cm",
      age: "3 años",
      color: "Marrón",
      description: "Le encanta correr.",
      image: "alpaca3.jpg",
    },
    // ...otros especímenes
  ];
};

export const getAlpacaById = async (id) => {
  const alpacas = await getAlpacas();
  return alpacas.find((alpaca) => alpaca.id === parseInt(id));
};
