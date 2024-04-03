import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/Cartapoke.css";

const Cartapoke = () => {
  const { PokemonID } = useParams();
  const [pokeData, setpokeData] = useState(null);
  const [error, setError] = useState(null);

  console.log("PokemonID..:", PokemonID);

  useEffect(() => {
    const fetchpokeData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${PokemonID}`
        );
        if (!response.ok) {
          throw new Error("not found");
        }
        const data = await response.json();
        setpokeData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchpokeData();
  }, [PokemonID]);

  if (error) {
    return <div>Error Poke data: {error}</div>;
  }

  if (!pokeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Container">
      <div className="card">
        <h2 className="titulo">{pokeData.name}</h2>
        <img
          className="avatar"
          src={pokeData.sprites.front_default}
          alt={pokeData.name}
        />
      </div>
      <h3 className="titulo">Habilidad:</h3>
      <ul>
        {pokeData.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cartapoke;
