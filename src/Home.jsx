import AllPokemons from "./AllPokemons";

function Home() {
  return (
    <div className="py-4 bg-slate-800">
      <div className="relative">
        <img
          className="w-full min-h-[4rem]"
          src="https://sg.portal-pokemon.com/play/resources/pokedex/img/pokedex_bg.png"
          alt="Pokedex background"
        />
        <h1 className="absolute md:text-3xl md:spacing top-0 left-0 right-0 bottom-0 flex justify-center items-center text-slate-700 ">
          Pokédex
        </h1>
      </div>
      <AllPokemons />
    </div>
  );
}

export default Home;
