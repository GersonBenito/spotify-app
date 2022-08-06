import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

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
    this.getAllTRacks();
    this.getAllTracksRandom();
  }

  getAllTRacks(): void{
    const observerTrack$: Subscription = this._trackService.getAllTracks$().subscribe({
      next: (response: TrackModel[]) =>{
        this.trackTrending = response;
      }
    });
    this.listObservers$ = [ observerTrack$ ];
  }

  getAllTracksRandom(): void {
    const trackRandom$: Subscription = this._trackService.getAllTracksRandom$().subscribe({
      next: (response: TrackModel[]) =>{
        this.trackRandom = response;
      }
    });
    this.listObservers$ = [ ...this.listObservers$, trackRandom$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
  }
}
