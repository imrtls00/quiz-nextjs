import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mvahhnvsfrgsqjjwbsph.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12YWhobnZzZnJnc3Fqandic3BoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUxNjkwMzUsImV4cCI6MjAyMDc0NTAzNX0.YkJiaQ9aR3VMVfWi3o5cP650V4dt4vzclY5yCuROsvo'
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }