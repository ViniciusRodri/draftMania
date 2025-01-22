import React, { ReactNode } from "react";
import { MainButton } from "@/components/Button/MainButton";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Player } from "@/components/Players";

type ModalProps = {
  closeModal: any;
  player: Player;
};

export const ModalPlayers: React.FC<ModalProps> = ({ closeModal, player }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <div className="bg-white rounded-2xl relative max-w-4xl h-auto border-4 border-orange">
        <button
          className="absolute top-2 right-2 text-black hover:text-white"
          onClick={closeModal}>
          ✖
        </button>

        <div className="grid grid-cols-2 gap-6 items-center">
          <Image
            src={player.photo}
            alt={player.name}
            width={900}
            height={0}
            objectFit="cover"
            objectPosition="center"
            className="rounded-2xl"
          />

          <div className="flex p-3 flex-col justify-center text-black">
            <h2 className="text-2xl font-bold mb-4">{player.name}</h2>
            <p className="mb-2">{player.team}</p>
            <p className="mb-2">{player.position}</p>
            <div className="flex justify-center items-center mt-4">
              <MainButton
                bgColor="bg-blue"
                onClick={closeModal}
                text="Escolher"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
