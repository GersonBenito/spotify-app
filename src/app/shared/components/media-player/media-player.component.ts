import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit {

  public mockCover: TrackModel = {
    cover: 'https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc',
    name: 'BEBE (Official Video)',
    album: 'Giolì & Assia',
    url: 'localhost://track.mp3',
    _id: 1,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
