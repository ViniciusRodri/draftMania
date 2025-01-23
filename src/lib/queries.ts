// lib/queries.ts
import { supabase } from '@/lib/supabase';
import { Room, Player, Pick } from '@/types/supabase';

// Criar uma sala
export const createRoom = async (roomName: string, maxPlayers: number, shield: string) => {
  try {
    const { data, error } = await supabase
      .from("rooms")
      .insert([{ name: roomName, max_players: maxPlayers, shield }])
      .single();
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Erro ao criar sala:", error);
    return null;
  }
};
// Entrar em uma sala
export const joinRoom = async (roomId: string, teamName: string, playerName: string, isHost: boolean): Promise<Player | null> => {
  const { data, error } = await supabase
    .from('players')
    .insert([{ room_id: roomId, team_name: teamName, player_name: playerName, is_host: isHost }])
    .select()
    .single();
  if (error) {
    console.error(error);
    return null;
  }
  return data;
};

// Pegar picks de uma sala
export const getPicks = async (roomId: string): Promise<Pick[] | null> => {
  const { data, error } = await supabase
    .from('picks')
    .select('*')
    .eq('room_id', roomId);
  if (error) {
    console.error(error);
    return null;
  }
  return data;
};

// Salva o escudo
export const insertShield = async (shield: string) => {
  const { error } = await supabase.from("club").insert({ shield });
  if (error) throw error;
};

// Busca o escudo
export const fetchShield = async () => {
  const { data, error } = await supabase.from("club").select("shield").single();
  if (error) throw error;
  return data?.shield;
};

// Atualiza o nome do clube
export const updateClubName = async (name: string) => {
  const { error } = await supabase.from("club").update({ name });
  if (error) throw error;
};
