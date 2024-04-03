import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Pokemons.css";

const Pokemon = ({ setSelectedPokemon, selectedPokemon }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        if (!response.ok) {
          throw new Error("Failed to fetch Pokemon data");
        }
        const data = await response.json();
        setData(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonData();
  }, []);

  const handleChange = (event) => {
    setSelectedPokemon(event.target.value);
  };

  const handleClick = () => {
    navigate(`/Pokemon/${selectedPokemon}`);
  };

  return (
    <div className="container">
      <h3>Selecciona un Pokémon</h3>
      <select onChange={handleChange}>
        <option value="">Pokemones</option>
        {data.map((pokemon, index) => (
          <option key={index} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <button onClick={handleClick}>Ver detalle</button>
    </div>
  );
};

export default Pokemon;
