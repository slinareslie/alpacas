import { useState, useEffect, useMemo } from "react";
import { getAlpacas } from "../services/api";
import { transformAlpacaData } from "../utils";

const useAlpacaStats = () => {
  const [alpacas, setAlpacas] = useState([]);

  useEffect(() => {
    getAlpacas().then(setAlpacas);
  }, []);

  const transformedData = useMemo(() => {
    return transformAlpacaData(alpacas);
  }, [alpacas]);

  return transformedData;
};

export default useAlpacaStats;
