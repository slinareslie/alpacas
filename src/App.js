import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AlpacaDetailPage from "./pages/AlpacaDetailPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/alpacas/:id" element={<AlpacaDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
