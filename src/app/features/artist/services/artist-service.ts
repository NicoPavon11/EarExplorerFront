import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../../../shared/models/album.interface';
import { Artist } from '../../../shared/models/artist.interface';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  constructor(private http : HttpClient){}
  baseUrl :string = 'http://localhost:3000'

  getArtist( id :string) : Observable<Artist>{
    return this.http.get<Artist>(`${this.baseUrl}/artist/${id}`);
  }

  getRelated(id : string) : Observable<Artist[]>{
    return this.http.get<Artist[]>(`${this.baseUrl}/artist/${id}/related`)
  }

  getChartArtist() : Observable<Artist[]>{
    return this.http.get<Artist[]>(`${this.baseUrl}/chart/artists`)
  }

  getGenreArtists(id : string) : Observable<Artist[]>{
    return this.http.get<Artist[]>(`${this.baseUrl}/genre/${id}/artists`)
  }

  

}
