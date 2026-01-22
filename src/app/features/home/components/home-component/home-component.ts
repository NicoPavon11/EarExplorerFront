import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlbumService } from '../../../album/services/album-service';
import { TrackService } from '../../../tracks/services/track-service';
import { ArtistService } from '../../../artist/services/artist-service';
import { chartTrackResponse } from '../../../../shared/models/chartTrackResponse.interface';
import { chartAlbumResponse } from '../../../../shared/models/chartAlbumResponse.interface';
import { chartArtistResponse } from '../../../../shared/models/chartArtistResponse.interface';
import { createLinkedSignal } from '@angular/core/primitives/signals';
import { Observable,map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { GenreService } from '../../../genre/services/genre-service';
import { GenreInt } from '../../../../shared/models/genre.interface';

@Component({
  selector: 'app-home-component',
  imports: [FormsModule, AsyncPipe],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent implements OnInit {
  searchTerm = '';

  constructor(private router: Router) {}
  random = 0;
  ngOnInit(): void {
    this.random = Math.floor(Math.random() * 3) + 1;
    this.carrouselData();
    this.getGenres();
  }

  onSearch() {
    if (!this.searchTerm.trim()) return;

    this.router.navigate(['/search'], {
      queryParams: {
        q: this.searchTerm,
      },
    });
  }

  albumService = inject(AlbumService);
  trackService = inject(TrackService);
  artistService = inject(ArtistService);
  genreService = inject(GenreService);

  chartTrackResponse$!: Observable<chartTrackResponse>;
  chartAlbumResponse$!: Observable<chartAlbumResponse>;
  chartArtistResponse$!: Observable<chartArtistResponse>;
  gen$!: Observable<GenreInt[]>;

  carrouselData() {
    if (this.random === 1) {
      console.log('1');
      this.getArtist();
    } else if (this.random === 2) {
      console.log('2');
      this.getAlbums();
    } else {
      console.log('3');
      this.getTracks();
    }
  }

  getGenres() {
    this.gen$ = this.genreService.getAll().pipe(map((response) => response.data));
  }

  getTracks() {
    // this.trackService.getChartTracks().subscribe({
    //   next : (res : chartTrackResponse)=>{
    //     this.chartTrackResponse = res;
    //     console.log(this.chartTrackResponse.data)
    //   },
    //   error : (e : Error)=>{
    //     console.log(e.message)
    //   }
    // })
    this.chartTrackResponse$ = this.trackService.getChartTracks();
  }

  getAlbums() {
    // this.albumService.getChartAlbums().subscribe({
    //   next : (res : chartAlbumResponse)=>{
    //     this.chartAlbumResponse = res;
    //     console.log("Miramos albums");
    //     console.log(this.chartAlbumResponse);
    //   },
    //   error : (e : Error)=>{
    //     console.log(e.message)
    //   }
    // })
    this.chartAlbumResponse$ = this.albumService.getChartAlbums();
  }

  getArtist() {
    // this.artistService.getChartArtist().subscribe({
    //   next : (res : chartArtistResponse)=>{
    //     this.chartArtistResponse = res;
    //     console.log(this.chartArtistResponse)
    //   },
    //   error : (e : Error)=>{
    //     console.log(e.message);
    //   }
    // })
    this.chartArtistResponse$ = this.artistService.getChartArtist();
  }
}
