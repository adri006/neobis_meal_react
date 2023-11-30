import React from "react";
import MainPage from "./components/MainPage";
import DetailPage from "./components/DetailPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/:id" element={<DetailPage/>}/> 
      </Routes>
    </Router>
  );
}

export default App;