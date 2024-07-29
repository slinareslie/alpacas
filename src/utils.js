const extractYearsFromAge = (ageString) => {
  const ageInYears = ageString.match(/\d+/);
  return ageInYears ? parseInt(ageInYears[0], 10) : null;
};

const createHistogramData = (data, binSize) => {
  const bins = {};
  data.forEach((value) => {
    const bin = Math.floor(value / binSize) * binSize;
    if (!bins[bin]) {
      bins[bin] = 0;
    }
    bins[bin] += 1;
  });
  return bins;
};

export const transformAlpacaData = (alpacas) => {
  const edadCounts = {};
  const sexoCounts = { hembra: 0, macho: 0 };
  const pesoPorSexo = { hembra: [], macho: [] };

  const scatterData = {
    hembra: [],
    macho: [],
  };

  alpacas.forEach((alpaca) => {
    const ageInYears = extractYearsFromAge(alpaca.edad);
    if (ageInYears !== null) {
      if (!edadCounts[ageInYears]) {
        edadCounts[ageInYears] = 0;
      }
      edadCounts[ageInYears] += 1;
    }

    if (alpaca.sexo && sexoCounts.hasOwnProperty(alpaca.sexo)) {
      sexoCounts[alpaca.sexo] += 1;
      pesoPorSexo[alpaca.sexo].push(alpaca.peso);
      scatterData[alpaca.sexo].push({ x: ageInYears, y: alpaca.peso });
    }
  });

  const edadData = {
    labels: Object.keys(edadCounts),
    datasets: [
      {
        label: "Cantidad de Alpacas",
        data: Object.values(edadCounts),
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const pesoValues = alpacas.map((alpaca) => alpaca.peso);
  const pesoHistogram = createHistogramData(pesoValues, 5);

  const pesoData = {
    labels: Object.keys(pesoHistogram),
    datasets: [
      {
        label: "Distribución de Peso",
        data: Object.values(pesoHistogram),
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const condicionCorporalVsPesoData = {
    labels: ["Condición Corporal", "Peso"],
    datasets: [
      {
        label: "Condición Corporal vs Peso",
        data: alpacas.map((alpaca) => ({
          x: alpaca.condicion_corporal,
          y: alpaca.peso,
        })),
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const alturaCruzVsAlturaGrupaData = {
    labels: ["Altura Cruz", "Altura Grupa"],
    datasets: [
      {
        label: "Altura Cruz vs Altura Grupa",
        data: alpacas.map((alpaca) => ({
          x: alpaca.altura_cruz,
          y: alpaca.altura_grupa,
        })),
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const razaCounts = {};

  alpacas.forEach((alpaca) => {
    if (!razaCounts[alpaca.raza]) {
      razaCounts[alpaca.raza] = 0;
    }
    razaCounts[alpaca.raza] += 1;
  });

  const razaData = {
    labels: Object.keys(razaCounts),
    datasets: [
      {
        label: "Raza",
        data: Object.values(razaCounts),
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const sexoData = {
    labels: Object.keys(sexoCounts),
    datasets: [
      {
        label: "Distribución por Sexo",
        data: Object.values(sexoCounts),
        backgroundColor: ["rgba(75,192,192,0.4)", "rgba(192,75,75,0.4)"],
        borderColor: ["rgba(75,192,192,1)", "rgba(192,75,75,1)"],
        borderWidth: 1,
      },
    ],
  };

  const pesoEdadData = {
    datasets: [
      {
        label: "Hembras",
        data: scatterData.hembra,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        pointBackgroundColor: "rgba(75,192,192,0.4)", // Azul
      },
      {
        label: "Machos",
        data: scatterData.macho,
        backgroundColor: "rgba(192,75,75,0.4)",
        borderColor: "rgba(192,75,75,1)",
        borderWidth: 1,
        pointBackgroundColor: "rgba(192,75,75,0.4)", // Rojo
      },
    ],
  };

  return {
    edadData,
    pesoData,
    condicionCorporalVsPesoData,
    alturaCruzVsAlturaGrupaData,
    razaData,
    sexoData,
    pesoEdadData,
  };
};
