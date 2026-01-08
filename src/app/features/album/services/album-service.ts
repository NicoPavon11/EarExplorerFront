import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../../../shared/models/album.interface';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:3000'

  getArtistAlbums(artistId : string) : Observable<Album[]>{
    return this.http.get<Album[]>(`${this.baseUrl}/${artistId}/albums`);
  }

  ///Hacer el backend de album je
  getAlbum(albumId : string) : Observable<Album>{
    return this.http.get<Album>(`${this.baseUrl}/album/${albumId}`)
  }

  getChartAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>(`${this.baseUrl}/chart/albums`);
  }
}