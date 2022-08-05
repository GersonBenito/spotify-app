import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
import * as dataRaw from '../../../../data/tracks.json';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.scss']
})
export class TracksPageComponent implements OnInit, OnDestroy {

  public trackTrending: Array<TrackModel> =  [];
  public trackRandom: Array<TrackModel> = [];
  public listObservers$: Array<Subscription> = [];

  constructor(private _trackService: TrackService) { }

  ngOnInit(): void {
    const trendingTracks$: Subscription = this._trackService.dataTracksTrending$.subscribe({
      next: response =>{
        console.log('trending tracks', response);
        this.trackTrending = response;
      },
      error: error =>{
        console.log(error);
      }
    });

    const randomTracks$: Subscription = this._trackService.dataTracksTrending$.subscribe({
      next: response =>{
        this.trackRandom = response;
      },
      error: error =>{
        console.log(error);
        
      }
    });

    this.listObservers$ = [ trendingTracks$, randomTracks$ ];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach( u => u.unsubscribe());
  }

}
