import { clubShields } from "@/mocks/clubs";
import React from "react";
import Image from "next/image";
import { insertShield } from "@/lib/queries"; // Função para salvar no Supabase

type StepProps = {
  setSelectedShield: (shield: string) => void;
  selectedShield: string | null;
};

export const Step2: React.FC<StepProps> = ({ setSelectedShield, selectedShield }) => {
  const handleShieldSelect = async (shield: string) => {
    setSelectedShield(shield);
    await insertShield(shield); // Salva no Supabase
  };

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-gray font-semibold text-lg text-center">
        Selecione um escudo para seu clube do Draft
      </h1>
      <div className="bg-whiteLight rounded-2xl p-5 shadow-inner" style={{ boxShadow: "inset 0 4px 20px rgba(0, 0, 0, 0.25)" }}>
        <div className="p-4 grid grid-cols-5 gap-7">
          {clubShields.map((item) => (
            <button
              key={item.name}
              onClick={() => handleShieldSelect(item.shield)}
              className={`border-2 rounded-full ${
                selectedShield === item.shield ? "hover:scale-125 transition-all duration-500 cursor-pointer" : ""
              }`}
            >
              <Image
                src={item.shield}
                alt={item.name}
                objectFit="cover"
                objectPosition="center"
                width={50}
                height={50}
                className="m-auto"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
