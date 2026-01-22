import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Track } from '../../../shared/models/Track/track.interface';
import { Observable } from 'rxjs';
import { TracksResponse } from '../../../shared/models/Track/trackResponse.interface';
import { chartTrackResponse } from '../../../shared/models/chartTrackResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
    constructor(private http : HttpClient){}
  baseUrl :string = 'http://localhost:3000'

  getTrack(id : string) : Observable<Track>{
    return this.http.get<Track>(`${this.baseUrl}/track/${id}`)
  }

  getArtistTopTracks (id : string) :Observable<TracksResponse>{
    return this.http.get<TracksResponse>(`${this.baseUrl}/artist/${id}/top`);
  }

  getChartTracks () :Observable<chartTrackResponse>{
    return this.http.get<chartTrackResponse>(`${this.baseUrl}/chart/tracks`);
  }

}
