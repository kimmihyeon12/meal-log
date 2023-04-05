import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabaseUrl = "https://fgdmshukfwsazghagfcy.supabase.co";
  private supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZG1zaHVrZndzYXpnaGFnZmN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA0OTYxMDEsImV4cCI6MTk5NjA3MjEwMX0.YIPa5t5wHIZyjXEKo4g3g3ezsabN6N-IsVjYNgfJBCY";

  private supabase = createClient(this.supabaseUrl, this.supabaseKey);

  constructor() { }

  public getSupabase() {
    return this.supabase;
  }


}