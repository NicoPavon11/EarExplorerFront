import { Component, Inject, inject, OnInit } from '@angular/core';
import { Observable, filter, map, switchMap, shareReplay } from 'rxjs';
import { RadioResponse } from '../../../../shared/models/radioResponse.interface';
import { RadioService } from '../../services/radio-service';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Radio } from '../../../../shared/models/radios.interface';
import { HttpClient } from '@angular/common/http';
import { RadioTrack } from '../../../../shared/models/radioTrack.interface';

@Component({
  selector: 'app-radio-component',
  imports: [AsyncPipe],
  templateUrl: './radio-component.html',
  styleUrl: './radio-component.css',
})
export class RadioComponent implements OnInit {
  radio$!: Observable<Radio>;
  radioTracks$!: Observable<RadioResponse>;
  radioService = inject(RadioService);
  activatedRoute = inject(ActivatedRoute);
  radioTracksList$ = Observable<RadioTrack>;

  ngOnInit(): void {
    this.radio$ = this.activatedRoute.paramMap.pipe(
      map((params) => params.get('id')),
      filter((id): id is string => id !== null),
      switchMap((id) => this.radioService.getRadio(id)),
      shareReplay(1)
    );

    this.radioTracks$ = this.activatedRoute.paramMap.pipe(
      map((params)=>params.get('id')),
      filter((id): id is string => id !== null),
      switchMap((id) => this.radioService.getRadioTracks(id))
    )

  }
}
