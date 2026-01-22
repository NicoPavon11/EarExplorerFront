import { Component, inject, OnInit } from '@angular/core';
import { Observable ,map,switchMap,filter} from 'rxjs';
import { GenreService } from '../../services/genre-service';
import { ActivatedRoute } from '@angular/router';
import { GenreInt } from '../../../../shared/models/genre.interface';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-genre',
  imports: [AsyncPipe],
  templateUrl: './genre.html',
  styleUrl: './genre.css',
})
export class Genre {
  gen$!: Observable<GenreInt>;
  genreId : string | null ='';

  genreService = inject(GenreService);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    console.log('Holis');

    this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        this.genreId = params.get('id');
        if (this.genreId) {
          console.log('Holis Entro');
          this.gen$ = this.genreService.getGenre(this.genreId);
        } else {
          console.log('chahsfhwkjver');
        }
      },
    });

    // this.gen$ = this.activatedRoute.paramMap.pipe(
    //   map((params) => params.get('id')),
    //   filter((id): id is string => id !== null),
    //   switchMap((id) => this.genreService.getGenre(id))
    // );
  }
}
