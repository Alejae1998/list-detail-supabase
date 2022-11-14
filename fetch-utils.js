const SUPABASE_URL = https://iunwdtvnyfagysjwguun.supabase.co
const SUPABASE_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1bndkdHZueWZhZ3lzandndXVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyODU4OTQsImV4cCI6MTk2Nzg2MTg5NH0.CfqXGd7NFGJGUzPx4v2oZGFHZXj4mWe7rp7FFmI2YHA

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getAllCreatures() {
    const response = await client.from('magic_creatures').select();
    return response.data;
}

export async function getCreature(id) {
    const response = await client.from('magic_creatures').select().match({ id: id }).single();

    return response.data;
}
