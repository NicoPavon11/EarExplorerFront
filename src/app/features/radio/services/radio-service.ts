import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RadioDataResponse, RadioResponse } from '../../../shared/models/radioResponse.interface';
import { Radio } from '../../../shared/models/radios.interface';

@Injectable({
  providedIn: 'root',
})
export class RadioService {
     constructor(private http : HttpClient){}
    baseUrl :string = 'http://localhost:3000'

    getGenreRadios(id : string) : Observable<RadioDataResponse>{
      return this.http.get<RadioDataResponse>(`${this.baseUrl}/genre/${id}`);
    }

    getRadio(id:string): Observable<Radio>{
      return this.http.get<Radio>(`${this.baseUrl}/radio/${id}`);
    }

    getRadioTracks(id:string) : Observable<RadioResponse>{
      return this.http.get<RadioResponse>(`${this.baseUrl}/radio/${id}/tracks`);
    }
}
