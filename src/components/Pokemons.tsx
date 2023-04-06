import { useQuery } from "react-query";

export const Pokemons = () => {
  const { isLoading, data, error } = useQuery("pokemons", () =>
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>;
  }

  return (
    <div>
      {data.results.map((pokemon: any) => (
        <div key={pokemon.name}>{pokemon.name}</div>
      ))}
    </div>
  );
};
