import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Radio } from '../../../shared/models/radios.interface';

@Injectable({
  providedIn: 'root',
})
export class RadioService {
     constructor(private http : HttpClient){}
    baseUrl :string = 'http://localhost:3000'

    getGenreRadios(id : string) : Observable<Radio[]>{
      return this.http.get<Radio[]>(`${this.baseUrl}/genre/${id}/radios`)
    }
}
