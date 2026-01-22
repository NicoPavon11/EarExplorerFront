import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResponse } from '../../../shared/models/searchResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http : HttpClient){}
  baseUrl :string = 'http://localhost:3000'

  searchWithoutFilter(search : string) : Observable<SearchResponse>{
    return this.http.get<SearchResponse>(`${this.baseUrl}/search?q=${search}`);
  }

  searchWith(search : string, filter : string) : Observable<SearchResponse>{
    return this.http.get<SearchResponse>(`${this.baseUrl}/search?q=${search}&type=${filter}`);
  }

}
