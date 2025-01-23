import React from "react";
import Image from "next/image";
import { SearchInput } from "../Inputs/SearchInput";
import { Players } from "../Players";
import { BadgeFiltro } from "../Badges/Filtros";

type FiltroProps = {};

export const Filtro: React.FC<FiltroProps> = ({}) => {
  const handleFilterChange = (
    filterType: string,
    selectedOptions: string[]
  ) => {
    console.log(`Filtro de ${filterType}:`, selectedOptions);
  };

  return (
    <div className="bg-white flex flex-col">
      <div className="flex flex-col gap-3 p-4">
        <h3 className="text-black font-semibold text-lg">Overview</h3>
        <SearchInput />
      </div>
      <div className="grid grid-cols-1 divide-y">
        <div className="flex items-center justify-start">
          <BadgeFiltro
            title="Filtrar por posição"
            options={[
              { label: "Goleiro", value: "goleiro" },
              { label: "Defensor", value: "defensor" },
              { label: "Meio-campo", value: "meio-campo" },
              { label: "Atacante", value: "atacante" },
            ]}
            onChange={(selected) => handleFilterChange("position", selected)}
          />
          <BadgeFiltro
            title="Filtrar por time"
            options={[
              { label: "Flamengo", value: "flamengo" },
              { label: "Palmeiras", value: "palmeiras" },
              { label: "Corinthians", value: "corinthians" },
            ]}
            onChange={(selected) => handleFilterChange("team", selected)}
          />

          <BadgeFiltro
            title="Filtrar por nacionalidade"
            options={[
              { label: "Brasil", value: "Brasil" },
              { label: "Argentina", value: "Argentina" },
              { label: "Uruguai", value: "Uruguai" },
              { label: "Colombia", value: "Colombia" },
            ]}
            onChange={(selected) => handleFilterChange("nacionality", selected)}
          />
        </div>
      </div>

      <Players />

      <footer className="flex items-center justify-center py-4">
        <p className="text-gray font-semibold italic">VERSÃO BETA</p>
      </footer>
    </div>
  );
};
