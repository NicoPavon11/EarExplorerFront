import { Component, inject, OnInit } from '@angular/core';
import { GenreInt } from '../../../../shared/models/genre.interface';
import { GenreService } from '../../services/genre-service';
import { AsyncPipe } from '@angular/common';
import { map, Observable } from 'rxjs';
import { genreResponse } from '../../../../shared/models/genreResponse.interface';

@Component({
  selector: 'app-all-genres',
  imports: [AsyncPipe],
  templateUrl: './all-genres.html',
  styleUrl: './all-genres.css',
})
export class AllGenres implements OnInit {

  gen$ !: Observable<GenreInt[]>
  
  ngOnInit(): void {
    this.gen$ = this.genreService.getAll().pipe(
      map(response => response.data)
    );
  }



  genreService = inject(GenreService);
  genres : genreResponse | null = null;
  

  // getAllGenres(){
  //   this.gen$ = this.genreService.getAll();
  // }

}
