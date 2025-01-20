// pages/index.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardPlayer } from "../Cards/CardPlayer";
import { players } from "@/mocks/players";

type Player = {
  id: number;
  name: string;
  team: string;
  photo: string;
};

export const Players: React.FC = ({}) => {
  // const [players, setPlayers] = useState<Player[]>([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchPlayers = async () => {
  //     try {
  //       const response = await axios.get("/api/players");
  //       setPlayers(response.data);
  //     } catch (error) {
  //       console.error("Erro ao buscar jogadores:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchPlayers();
  // }, []);

  // if (loading) {
  //   return <p>Carregando jogadores...</p>;
  // }

  return (
    <div className="p-10 grid grid-cols-4 gap-6 overflow-hidden">
      {players.map((player) => (
        <CardPlayer
          key={player.id}
          name={player.name}
          image={player.photo}
          team={player.team}
        />
      ))}
    </div>
  );
}
