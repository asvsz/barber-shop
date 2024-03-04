import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ziyyljybqbyevfgaxvit.supabase.co'; // Substitua pela URL da API do seu projeto
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppeXlsanlicWJ5ZXZmZ2F4dml0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0MTY5MjMsImV4cCI6MjAyNDk5MjkyM30.3u0ei2M4fYLm8P5osyVE1eCaHAGqPHDAxOHaJcstbEU'; // Substitua pela chave anônima do seu projeto

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
