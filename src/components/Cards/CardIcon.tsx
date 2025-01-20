import React from "react";
import Image from "next/image";

type CardProps = {
  text: string;
  icon: string;
  widthIcon: number | undefined;
  heightIcon: number | undefined;
};

export const CardIcon: React.FC<CardProps> = ({
  text,
  icon,
  heightIcon,
  widthIcon,
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-white border-4 border-orange p-4 gap-5 shadow-md w-40 h-40">
      <Image
        src={icon}
        alt={text}
        objectFit="cover"
        objectPosition="center"
        width={widthIcon}
        height={heightIcon}
        className=""
      />
      <h2 className="text-lg text-black font-semibold">{text}</h2>
    </div>
  );
};
