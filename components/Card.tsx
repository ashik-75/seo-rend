import { Character } from "@/types/character.types";
import Image from "next/image";
import Link from "next/link";

function Card(props: { character: Character }) {
  const { image, name, id } = props.character;

  return (
    <div>
      <div className="relative h-[200px]">
        <Link href={`/${id}`}>
          <Image
            src={image}
            alt={name}
            fill
            className="w-full h-full object-cover absolute rounded"
          />
        </Link>
      </div>

      <h1>{name}</h1>
    </div>
  );
}

export default Card;
