import React from "react";
import { CardIcon } from "@/components/Cards/CardIcon";


type StepProps = {};

export const Step5: React.FC<StepProps> = ({}) => {
  return (
    <>
      <h1 className="text-gray font-semibold text-lg text-center">Selecione o modo de jogo:</h1>
      <div className="flex items-center justify-center gap-10 p-8">
      <CardIcon icon="/icons/single.png" text="Um jogador" widthIcon={50} heightIcon={50}/>   
      <CardIcon icon="/icons/group.png" text="Multiplayer" widthIcon={102} heightIcon={55}/>   
      </div>
    </>
  );
};
