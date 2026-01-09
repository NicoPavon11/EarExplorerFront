import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../../../shared/models/genre.interface';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
    constructor(private http : HttpClient){}
    baseUrl :string = 'http://localhost:3000'

  getAll() : Observable<Genre[]>{
    return this.http.get<Genre[]>(`${this.baseUrl}/genre`)
  }

  
  getGenre( id : string) : Observable<Genre>{
    return this.http.get<Genre>(`${this.baseUrl}/genre`)
  }

    

}
