import { Character } from "@/types/character.types";
import Image from "next/image";

function Card(props: { character: Character }) {
  const { image, name, location } = props.character;
  console.log("BBB", props.character);
  return (
    <div>
      <div className="relative">
        <Image src={image} alt={name} fill className="absolute w-full h-full" />
      </div>

      <h1>{name}</h1>
    </div>
  );
}

export default Card;
