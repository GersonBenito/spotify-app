import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  public mockCover: TrackModel = {
    cover: 'https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc',
    name: 'BEBE (Official Video)',
    album: 'Giolì & Assia',
    url: 'localhost://track.mp3',
    _id: 1,
  }

  public listObservers$: Array<Subscription> = [];

  constructor(private _multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const trackObserver$: Subscription = this._multimediaService.callback.subscribe(
      (result: TrackModel) =>{
        console.log('recibiendo cancion .....', result);
        
      }
    );
    
    this.listObservers$ = [ trackObserver$ ];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
    console.log('on destroy');
  }

}
