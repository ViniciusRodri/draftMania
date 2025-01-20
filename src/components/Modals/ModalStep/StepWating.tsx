import React from "react";
import Image from "next/image";

type StepProps = {};

export const StepWating: React.FC<StepProps> = ({}) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-gray font-semibold text-lg text-center">
        Esperando jogadores...
      </h1>
      <div
        className="bg-whiteLight rounded-2xl p-5 shadow-inner"
        style={{ boxShadow: "inset 0 4px 20px rgba(0, 0, 0, 0.25)" }}>
        <div className="flex items-center justify-start gap-2 p-4">
          <Image
            src="https://s.sde.globo.com/media/organizations/2018/03/11/sao-paulo.svg"
            alt="São Paulo"
            objectFit="cover"
            objectPosition="center"
            width={40}
            height={40}
          />

          <p className="text-lg text-black">Jogador 2</p>
        </div>

        <div className="flex items-center justify-start gap-2 p-4">
          <Image
            src="https://s.sde.globo.com/media/organizations/2018/03/11/sao-paulo.svg"
            alt="São Paulo"
            objectFit="cover"
            objectPosition="center"
            width={40}
            height={40}
          />

          <p className="text-lg text-black">Jogador 2</p>
        </div>
      </div>
    </div>
  );
};
