import { Component, inject, OnInit } from '@angular/core';
import { AlbumService } from '../../../album/services/album-service';
import { TrackService } from '../../../tracks/services/track-service';
import { ArtistService } from '../../../artist/services/artist-service';
import { chartTrackResponse } from '../../../../shared/models/chartTrackResponse.interface';
import { chartAlbumResponse } from '../../../../shared/models/chartAlbumResponse.interface';
import { chartArtistResponse } from '../../../../shared/models/chartArtistResponse.interface';

@Component({
  selector: 'app-chart',
  imports: [],
  templateUrl: './chart.html',
  styleUrl: './chart.css',
})
export class Chart implements OnInit{
  
  ngOnInit(): void {
    this.getTracks();
    this.getAlbums();
    this.getArtist();
  }


  albumService = inject(AlbumService);
  trackService = inject(TrackService);
  artistService = inject(ArtistService);

  chartTrackResponse : chartTrackResponse | null = null; 
  chartAlbumResponse : chartAlbumResponse | null = null;
  chartArtistResponse : chartArtistResponse | null = null;
  

  getTracks(){
    this.trackService.getChartTracks().subscribe({
      next : (res : chartTrackResponse)=>{
        this.chartTrackResponse = res;
        console.log(this.chartTrackResponse.data)
      },
      error : (e : Error)=>{
        console.log(e.message)
      }
    })

  }

  getAlbums(){
    this.albumService.getChartAlbums().subscribe({
      next : (res : chartAlbumResponse)=>{
        this.chartAlbumResponse = res;
        console.log("Miramos albums");
        console.log(this.chartAlbumResponse);
      },
      error : (e : Error)=>{
        console.log(e.message)
      }
    })
  }

  getArtist(){
    this.artistService.getChartArtist().subscribe({
      next : (res : chartArtistResponse)=>{
        this.chartArtistResponse = res;
        console.log(this.chartArtistResponse)
      },
      error : (e : Error)=>{
        console.log(e.message);
      }
    })
  }
  }
  
