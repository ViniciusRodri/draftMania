// pages/api/players.ts
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Player = {
  id: number;
  name: string;
  team: string;
  photo: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Player[] | { error: string }>
) {
  try {
    const response = await axios.get(
      "https://api-football-v1.p.rapidapi.com/v3/players",
      {
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
          "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
        },
        params: {
          league: 71,
          season: 2025,
        },
      }
    );

    const players = response.data.response.map((player: any) => ({
      id: player.player.id,
      name: player.player.name,
      team: player.statistics[0].team.name,
      photo: player.player.photo,
    }));

    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar jogadores" });
  }
}
