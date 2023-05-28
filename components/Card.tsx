import { Character } from "@/types/character.types";
import Link from "next/link";

function Card(props: { character: Character }) {
  const { image, name, location, id } = props.character;
  console.log("BBB", props.character);
  return (
    <div>
      <Link href={`/${id}`}>
        <img src={image} alt={name} className="w-full rounded" />
      </Link>

      <h1>{name}</h1>
    </div>
  );
}

export default Card;
