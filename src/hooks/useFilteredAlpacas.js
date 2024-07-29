import { useState, useEffect, useMemo } from "react";

const useFilteredAlpacas = (alpacas, searchTerm, searchField, genderFilter) => {
  const [filteredAlpacas, setFilteredAlpacas] = useState([]);

  useEffect(() => {
    let filtered = alpacas.filter((alpaca) => {
      return alpaca[searchField]
        .toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });

    if (genderFilter) {
      filtered = filtered.filter((alpaca) => alpaca.sexo === genderFilter);
    }

    setFilteredAlpacas(filtered);
  }, [alpacas, searchTerm, searchField, genderFilter]);

  const sortedAlpacas = useMemo(() => {
    return filteredAlpacas.sort((a, b) =>
      a.nro_arete.localeCompare(b.nro_arete)
    );
  }, [filteredAlpacas]);

  return sortedAlpacas;
};

export default useFilteredAlpacas;
