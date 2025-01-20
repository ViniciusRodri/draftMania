import React, { useState } from "react";
import Image from "next/image";

type CardProps = {
  name: string;
  image: string;
  team: string;
};

export const CardPlayer: React.FC<CardProps> = ({ name, image, team }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      onClick={handleCardClick}
      className={`flex flex-col items-center justify-center rounded-xl bg-white border-4 p-4 shadow-md w-[162px] h-[125px] cursor-pointer ${
        isSelected ? "border-blue" : ""
      }`}>
      <Image
        src={image}
        alt={name}
        objectFit="cover"
        objectPosition="center"
        width={45}
        height={58}
        className="rounded-2xl"
      />
      <h2 className="text-base text-black font-semibold">{name}</h2>
      <p className="text-sm text-black font-medium">{team}</p>
    </div>
  );
};
