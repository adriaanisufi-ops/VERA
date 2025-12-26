// supabase.js
const SUPABASE_URL = "https://mzlvftetsjnpbnqncwzg.supabase.co";
const SUPABASE_KEY = "sb_publishable_6JUFHg9mRZHA0iOiDqI0vA_YaF4dvaY";

// Maak client en zet hem op window zodat al je pagina's hem kunnen gebruiken
window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
