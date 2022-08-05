import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/track.model';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  public callback: EventEmitter<TrackModel> = new EventEmitter<TrackModel>();

  constructor() { }
  
}
