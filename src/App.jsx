import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Pokemon from "./views/Pokemons";
import Cartapoke from "./components/Cartapoke";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState("");

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Pokemon"
          element={
            <Pokemon
              setSelectedPokemon={setSelectedPokemon}
              selectedPokemon={selectedPokemon}
            />
          }
        />
        <Route path="/Pokemon/:PokemonID" element={<Cartapoke />} />
      </Routes>
    </div>
  );
}

export default App;
