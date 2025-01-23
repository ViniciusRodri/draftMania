import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MainInput } from "@/components/Inputs/MainInput";
import { fetchShield, updateClubName } from "@/lib/queries"; // Funções para Supabase

type StepProps = {
  selectedShield: string | null;
};

export const Step3: React.FC<StepProps> = ({ selectedShield }) => {
  const [shield, setShield] = useState<string | null>(selectedShield);
  const [clubName, setClubName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedShield) {
        const fetchedShield = await fetchShield();
        setShield(fetchedShield);
      }
    };
    fetchData();
  }, [selectedShield]);

  const handleSaveClubName = async () => {
    if (clubName) {
      await updateClubName(clubName); // Salva no Supabase
    }
  };

  return (
    <>
      <h1 className="text-gray font-semibold text-lg text-center">Escolha um nome e um escudo para o seu clube do Draft:</h1>
      <div className="flex flex-col gap-5">
        {shield && (
          <Image
            src={shield}
            alt="Escudo Selecionado"
            objectFit="cover"
            objectPosition="center"
            width={150}
            height={150}
            className="m-auto py-5"
          />
        )}
        <MainInput
          name="name"
          placeholder="Nome do clube..."
          value={clubName}
          onchange={(e: any) => setClubName(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={handleSaveClubName}
        >
          Salvar Nome do Clube
        </button>
      </div>
    </>
  );
};
