import React from "react";
import Image from "next/image";


type StepProps = {};

export const Step4: React.FC<StepProps> = ({}) => {
  return (
    <>
      <h1 className="text-gray font-semibold text-lg text-center">De qual liga você quer selecionar os jogadores para o seu Draft:</h1>
      <div className="bg-whiteLight rounded-2xl p-5 shadow-inner" style={{ boxShadow: "inset 0 4px 20px rgba(0, 0, 0, 0.25)" }}>
      <Image
          src="/logos/brasileirao.png" 
          alt="São Paulo"
          objectFit="cover"
          objectPosition="center"
          width={100}        
          height={100}
          className="m-auto py-5"     
        />
        <Image
          src="/logos/premier-league.png" 
          alt="São Paulo"
          objectFit="cover"
          objectPosition="center"
          width={100}        
          height={100}
          className="m-auto py-5 opacity-50"     
        />
        <Image
          src="/logos/champions.png" 
          alt="São Paulo"
          objectFit="cover"
          objectPosition="center"
          width={100}        
          height={100}
          className="m-auto py-5 opacity-50"     
        />
      </div>
    </>
  );
};
