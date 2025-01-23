// types/supabase.ts
export type Room = {
  id: string;
  name: string;
  created_at: string;
  draft_started: boolean;
  draft_round: number;
  max_players: number;
  current_turn: number;
};

export type Player = {
  id: string;
  room_id: string;
  team_name: string;
  player_name: string;
  is_host: boolean;
  draft_order: number;
  created_at: string;
};

export type Pick = {
  id: string;
  player_id: string;
  room_id: string;
  player_name: string;
  position: string;
  pick_number: number;
  created_at: string;
};
