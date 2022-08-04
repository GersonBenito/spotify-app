import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.model';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.scss']
})
export class CardPlayerComponent implements OnInit {

  @Input() public mode: 'small' | 'big' = 'small';
  @Input() public track: TrackModel = {
    _id: 0,
    name: '',
    cover: '',
    album: '',
    url: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
