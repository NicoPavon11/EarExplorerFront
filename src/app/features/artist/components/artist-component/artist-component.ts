import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../../services/artist-service';
import { Artist } from '../../../../shared/models/Artist/artist.interface';
import { CommonModule } from '@angular/common';
import { TrackService } from '../../../tracks/services/track-service';
// import { Track } from '../../../../shared/models/track.interface';
// import { TracksResponse } from '../../../../shared/models/trackResponse.interface';
import { TrackMini } from '../../../../shared/models/Track/trackMini.interface';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-artist-component',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './artist-component.html',
  styleUrl: './artist-component.css',
})
export class ArtistComponent implements OnInit{

  private activatedRoute = inject(ActivatedRoute);

  idArtista : string | null = null;

  artistService = inject(ArtistService)
  trackService = inject(TrackService)

  artista : Artist | null = null;
  tracks : TrackMini[]= [];

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (params) =>{
        this.idArtista = params.get('id');

        if(this.idArtista){

          this.getDetalles(this.idArtista)
          this.getTop(this.idArtista)
        }else{
          console.log('no hay')
        }
      },
      error : (e : Error) =>{
        console.log(e.message);
      }
      

    })
  }


  getDetalles(id : string){
    this.artistService.getArtist(id).subscribe({
      next : (art : Artist)=>{
        // console.log(art);
        this.artista=art;
        // console.log('deberia mostrar el artista')
        console.log(this.artista);
      },
      error : (e : Error) =>{
        console.log(e.message);
      }
    })
  }

  // getTop(id : string){
  //   this.trackService.getArtistTopTracks(id).subscribe({
  //     next : res => this.tracks = res.data,
  //     error : ( e : Error ) =>{
  //       console.log(e.message)
  //     }
  //     })
  //   }
  tracks$!: Observable<TrackMini[]>;
 getTop(id: string) {
  this.tracks$ = this.trackService
    .getArtistTopTracks(id)
    .pipe(map(res => res.data));

    console.log(this.tracks$)
}
  }


