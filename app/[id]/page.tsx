import { Character } from "@/types/character.types";
import { notFound } from "next/navigation";

async function DetailsPage({ params: { id } }: { params: { id: string } }) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const ch: Character = await response.json();

  console.log(ch);

  if (!ch?.id) {
    return notFound();
  }

  return (
    <div>
      {ch.image && (
        <img src={ch.image} alt={ch.name} width={200} height={150} />
      )}

      <h1>{ch.name}</h1>
    </div>
  );
}

export default DetailsPage;
