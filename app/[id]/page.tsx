import { Character, Main } from "@/types/character.types";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  const characters: Main = await response.json();

  return characters.results.map((character) => ({
    id: character.id.toString(),
  }));
};

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const ch: Character = await response.json();

  return {
    title: ch.name,
    description: "GOOOOOOOOOOD",
    alternates: {
      canonical: `/${id}`,
    },
  };
}

async function DetailsPage({ params: { id } }: { params: { id: string } }) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const ch: Character = await response.json();

  console.log("CALLED: ", ch?.id);

  if (!ch?.id) {
    return notFound();
  }

  return (
    <div>
      {ch.image && (
        <Image src={ch.image} alt={ch.name} width={200} height={150} />
      )}

      <h1>{ch.name}</h1>
    </div>
  );
}

export default DetailsPage;
