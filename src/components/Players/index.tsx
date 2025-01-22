import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardPlayer } from "../Cards/CardPlayer";
import { players } from "@/mocks/players";
import { ModalPlayers } from "../Modals/ModalPlayers";

export type Player = {
  id: number;
  name: string;
  team: string;
  photo: string;
  position: string;
};

export const Players: React.FC = ({}) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const handleCardClick = (player: Player) => {
    setOpenModal(true);
    setSelectedPlayer(player);
  };

  return (
    <>
      <div className="m-4 h-[750px] rounded-lg grid grid-cols-4 wrap gap-2 overflow-auto">
        {players.map((player) => (
          <CardPlayer
            key={player.id}
            name={player.name}
            image={player.photo}
            team={player.team}
            position={player.position}
            onclick={() => handleCardClick(player)}
          />
        ))}
      </div>
      {openModal && selectedPlayer && (
        <ModalPlayers
          closeModal={() => setOpenModal(false)}
          player={selectedPlayer} // Passa o jogador selecionado para o modal
        />
      )}
    </>
  );
};
