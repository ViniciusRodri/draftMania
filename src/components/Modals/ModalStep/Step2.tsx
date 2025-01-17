import { clubShields } from "@/mocks/clubs";
import React, { ReactNode } from "react";
import Image from "next/image";

type StepProps = {};

export const Step2: React.FC<StepProps> = ({}) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-gray font-semibold text-lg text-center">
        Selecione um escudo para seu clube do Draft
      </h1>
      <div className="bg-whiteLight rounded-2xl p-5 shadow-inner" style={{ boxShadow: "inset 0 4px 20px rgba(0, 0, 0, 0.25)" }}>
        <div className="p-4 grid grid-cols-5 gap-7">
        {clubShields.map((item) => (
          <Image
          src={item.shield} 
          alt={item.name}
          objectFit="cover"
          objectPosition="center"
          width={50}        
          height={50}
          className="m-auto"     
        />
        ))}
        </div>
      </div>
    </div>
  );
};
