"use strict";
//import { createClient } from '@supabase/supabase-js'
//const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlcXB2YW9keXlobmlseWJ1ZWZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1NDY4NjYsImV4cCI6MjAzODEyMjg2Nn0.6ugCh8P9Lr3uYhlgbmfmLK2EOwORwCHeHJTCzpQtonU
//const supabaseKey = process.env.SUPABASE_KEY || SUPABASE_KEY
//const supabase = createClient(supabaseUrl, supabaseKey)

/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

let db;

if (process.env.NODE_ENV === "production") {
  db = new Client({
    connectionString: getDatabaseUri(),
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  db = new Client({
    connectionString: getDatabaseUri(),
  });
}

db.connect();

module.exports = db;
