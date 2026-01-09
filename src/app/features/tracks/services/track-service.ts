import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Track } from '../../../shared/models/track.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
    constructor(private http : HttpClient){}
  baseUrl :string = 'http://localhost:3000'

  getTrack(id : string) : Observable<Track>{
    return this.http.get<Track>(`${this.baseUrl}/track/${id}`)
  }

  getArtistTopTracks (id : string) :Observable<Track[]>{
    return this.http.get<Track[]>(`${this.baseUrl}/artist/${id}/top`);
  }

  getChartTracks (id : string) :Observable<Track[]>{
    return this.http.get<Track[]>(`${this.baseUrl}/chart/tracks`);
  }

}
