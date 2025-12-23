const SUPABASE_URL = "https://mzlvftetsjnpbnqncwzg.supabase.co";
const SUPABASE_KEY = "sb_publishable_6JUFHg9mRZHA0iOiDqI0vA_YaF4dvaY";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
