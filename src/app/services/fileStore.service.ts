import { Injectable } from "@angular/core";
import { SupabaseService } from "./supabase.service";

@Injectable({
  providedIn: 'root'
})
export class FileStoreService {
  constructor(private supabaseService: SupabaseService) { }

  async upload(file: string) {
    console.log(file)
    const { data, error } = await this.supabaseService.getSupabase().storage.from('photos').upload('image.png', file, { contentType: 'image/png' });

    if (error) {
      console.log(error)
    } else {
      console.log('File uploaded successfully!')
    }
  }

  async getBucket() {
    return await this.supabaseService.getSupabase().storage.getBucket('photos');

  }

}