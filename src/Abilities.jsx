function Abilities({ abilities, pokemon }) {
  return (
    <div>
      {pokemon && (
        <div className="flex flex-col items-center justify-center">
          <div className="text-2xl mt-8">Abilities</div>
          <div className="flex flex-wrap justify-center">
            {abilities.map((ability) => (
              <div
                key={Math.random()}
                className="p-8 m-2 bg-white rounded-xl shadow-md"
              >
                Ability: {ability.ability.name}
                <div className="text-sm">
                  Type: {ability.is_hidden ? "Hidden" : "Not Hidden"}
                  <div className="text-sm">
                    Slot:
                    {ability.slot === 1
                      ? " Primary"
                      : ability.slot === 2
                      ? " Secondary"
                      : " Tertiary"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Abilities;
