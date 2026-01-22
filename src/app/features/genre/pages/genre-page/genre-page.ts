import { Component, inject, OnInit } from '@angular/core';
import { GenreInt } from '../../../../shared/models/genre.interface';
import { Observable } from 'rxjs';
import { GenreService } from '../../services/genre-service';
import { ActivatedRoute } from '@angular/router';
import { Genre } from '../../components/genre/genre';

@Component({
  selector: 'app-genre-page',
  imports: [Genre],
  templateUrl: './genre-page.html',
  styleUrl: './genre-page.css',
})
export class GenrePage{
  
}
