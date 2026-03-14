import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';

// Create a dummy client if credentials are missing — pages will show empty
// states gracefully instead of crashing the entire app.
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createClient('https://placeholder.supabase.co', 'placeholder-key');

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: number;
  created_at: string;
}

export interface News {
  id: string;
  title: string;
  content: string;
  published_date: string;
  created_at: string;
}
