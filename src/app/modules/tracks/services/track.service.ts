import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  public dataTracksTrending$: Observable<TrackModel[]> = of([]);

  constructor() { 
    const { data }: any = ( dataRaw as any).default;
    this.dataTracksTrending$ = of(data);
  }
}
