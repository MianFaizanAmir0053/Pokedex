import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const AllPokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [data, setData] = useState(null);
  const [page, setPage] = useState(0);
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=16&offset=0"
  );

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
        setData(data);
      });
  }, [url]);

  const handleNextClick = () => {
    setPage((prev) => prev + 1);
    setUrl(data.next);
  };

  const handlePreviousClick = () => {
    if (data.previous) setUrl(data.previous);
    setPage((prev) => prev - 1);
  };

  return (
    <>
      <div className=" flex justify-center">
        {data?.previous && (
          <button className="previous">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-slate-400 hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={handlePreviousClick}
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        <button className="next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-slate-400 hover:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleNextClick}
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-2 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemons.map((pokemon, i) => (
          <Link
            to={`/pokemon/${pokemon.name}&${i + 1 + 16 * page}`}
            className="w-full textalign"
          >
            <div
              key={pokemon.name}
              className="bg-center max-w-[15rem] bg min-h-[15rem] sm:h-[18rem]  w-[100%] rounded-md shadow-md text-white font-bold text-center"
              style={{
                backgroundImage: "url('https://sg.portal-pokemon.com/play/resources/pokedex/img/list_pokemon_bg.png')",
              }}
            >
              <div className="textalign">
                <img
                  className="w-[7rem] h-[7rem] sm:w-[9rem] sm:h-[9rem]"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                    i + 1 + 16 * page
                  }.png`}
                  alt=""
                />
              </div>
              <div className="p-8">{pokemon.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default AllPokemons;
