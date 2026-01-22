import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {GenreInt } from '../../../shared/models/genre.interface';
import { genreResponse } from '../../../shared/models/genreResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
    constructor(private http : HttpClient){}
    baseUrl :string = 'http://localhost:3000'

  getAll() : Observable<genreResponse>{
    return this.http.get<genreResponse>(`${this.baseUrl}/genre`)
  }

  
  getGenre( id : string | null) : Observable<GenreInt>{
    return this.http.get<GenreInt>(`${this.baseUrl}/genre/${id}`)
  }

    

}
