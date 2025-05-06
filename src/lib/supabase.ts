
import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ukjjoabfxbpcrujgwcds.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrampvYWJmeGJwY3J1amd3Y2RzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MjE1OTUsImV4cCI6MjA2MjA5NzU5NX0.2MDc41sVjPCyQ0Wb9GwDeTdNU9bp8TG7z7b-BYHS-LE';

// Check if the environment variables are set
if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.warn('Using placeholder Supabase credentials. For production, make sure to set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.');
}

// Initialize the client with default values if environment variables aren't set
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase };
