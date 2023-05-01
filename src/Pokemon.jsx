import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Abilities from "./Abilities";
import Stats from "./Stats";

function Pokemon() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [abilities, setAbilities] = useState(null);
  const [stats, setStats] = useState(null);

  let Id = id.split("&")[1];
  let name = id.split("&")[0];
  useEffect(() => {
    fetch(`${url}${name}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon((prev) => data);
        setAbilities((prev) => data.abilities);
        setStats((prev) => data.stats);
      });
  }, [url]);

  return (
    <div>
      {pokemon && (
        <div>
          <div className="backicon">
            <button
              onClick={() => {
                window.history.back();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-slate-600 hover:text-slate-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="bg-center pt-8 pb-8 w-[100%] rounded-b-3xl h-[100%] shadow-md text-slate-600 text-3xl bg-orange-400 font-bold text-center">
            <div className="p-8">{name}</div>
            <div className="textalign">
              <img
                className="w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem]"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Id}.png`}
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-evenly">
            <Abilities pokemon={pokemon} abilities={abilities} />
            <Stats stats={stats} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Pokemon;
