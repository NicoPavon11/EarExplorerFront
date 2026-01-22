import { Component, inject, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album-service';
import { filter, map, Observable, switchMap } from 'rxjs';
import { Album, AlbumComplete } from '../../../../shared/models/Album/album.interface';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-album-component',
  imports: [AsyncPipe],
  templateUrl: './album-component.html',
  styleUrl: './album-component.css',
})
export class AlbumComponent implements OnInit{

  ngOnInit(): void {
    this.getAlbum();
  }

  album$ !: Observable<AlbumComplete>
  albumService = inject(AlbumService)
  activatedRoute = inject(ActivatedRoute);

  getAlbum(){
    this.album$ = this.activatedRoute.paramMap.pipe(
      map((params)=> params.get('id')),
      filter((id): id is string => id !==null),
      switchMap((id)=>this.albumService.getAlbum(id))
    )
  }
// this.gen$ = this.activatedRoute.paramMap.pipe(
    //   map((params) => params.get('id')),
    //   filter((id): id is string => id !== null),
    //   switchMap((id) => this.genreService.getGenre(id))
    // );
}
