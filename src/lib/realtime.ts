// lib/realtime.ts
import { supabase } from '@/lib/supabase';

export const subscribeToRoomUpdates = (roomId: string, callback: (payload: any) => void) => {
  const channel = supabase
    .channel('rooms-changes')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'rooms', filter: `id=eq.${roomId}` }, callback)
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
};
