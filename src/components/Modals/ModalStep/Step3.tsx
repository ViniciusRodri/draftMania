import React, { ReactNode } from "react";
import Image from "next/image";
import { MainInput } from "@/components/Inputs/MainInput";

type StepProps = {};

export const Step3: React.FC<StepProps> = ({}) => {
  return (
    <>
      <h1 className="text-gray font-semibold text-lg text-center">Escolha um nome e um escudo para o seu clube do Draft:</h1>
      <div className="flex flex-col gap-5">
      <Image
          src="https://s.sde.globo.com/media/organizations/2018/03/11/sao-paulo.svg" 
          alt="São Paulo"
          objectFit="cover"
          objectPosition="center"
          width={150}        
          height={150}
          className="m-auto py-5"     
        />

        <MainInput name="name"  placeholder="Nome do clube..." />
      </div>
    </>
  );
};
