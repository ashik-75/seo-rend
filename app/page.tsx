import Card from "@/components/Card";
import { Main } from "@/types/character.types";

async function Homepage() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data: Main = await response.json();

  console.log({ data });
  return (
    <div>
      <h1>Page - {data.info.count}</h1>

      <div>
        {data?.results?.map((character) => (
          <Card character={character} key={character.id} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
