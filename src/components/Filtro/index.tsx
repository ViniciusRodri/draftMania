import React from "react";
import Image from "next/image";
import { SearchInput } from "../Inputs/SearchInput";
import { Players } from "../Players";

type FiltroProps = {};

export const Filtro: React.FC<FiltroProps> = ({}) => {
  return (
    <div className="bg-white w-[88%]">
      <div className="flex flex-col gap-3 p-10">
      <h3 className="text-black font-semibold text-lg">Overview</h3>
        <SearchInput />
      </div>
      <div>
        <Players />
      </div>
      <footer className="flex items-center justify-center">
        <p className="text-gray font-semibold">VERSÃO BETA</p>
      </footer>
    </div>
  );
};
