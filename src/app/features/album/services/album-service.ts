import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album, AlbumComplete } from '../../../shared/models/Album/album.interface';
import { chartAlbumResponse } from '../../../shared/models/chartAlbumResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private http: HttpClient) {}
  baseUrl :string = 'http://localhost:3000'

  getArtistAlbums(artistId : string) : Observable<Album[]>{
    return this.http.get<Album[]>(`${this.baseUrl}/${artistId}/albums`);
  }

  ///Hacer el backend de album je
  getAlbum(albumId : string) : Observable<AlbumComplete>{
    return this.http.get<AlbumComplete>(`${this.baseUrl}/album/${albumId}`)
  }

  getChartAlbums(): Observable<chartAlbumResponse>{
    return this.http.get<chartAlbumResponse>(`${this.baseUrl}/chart/albums`);
  }
}