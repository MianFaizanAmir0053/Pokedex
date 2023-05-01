import "./App.css";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Pokemon from "./Pokemon";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:id" element={<Pokemon />} />
    </Routes>
  );
}

export default App;
