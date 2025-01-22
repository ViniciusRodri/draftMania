import React, { useState } from "react";
import Image from "next/image";

type CardProps = {
  name: string;
  image: string;
  team: string;
  position: string;
  onclick: () => void;
};

export const CardPlayer: React.FC<CardProps> = ({
  name,
  image,
  team,
  position,
  onclick,
}) => {
  return (
    <div
      onClick={onclick}
      className={`relative w-[300px] h-[300px] flex flex-col items-center justify-center m-auto rounded-2xl overflow-hidden`}>
      <Image
        src={image}
        alt={name}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute inset-0 z-0 rounded-2xl"
      />

      <div className="absolute inset-0 bg-black opacity-30 z-5 rounded-2xl"></div>

      <div className="absolute text-center z-10">
        <h2 className="text-lg text-white font-bold">
          {name.toLocaleUpperCase()}
        </h2>
        <p className="text-base text-white font-semibold">{position}</p>
        <p className="text-base text-white font-regular">{team}</p>
      </div>
    </div>
  );
};
