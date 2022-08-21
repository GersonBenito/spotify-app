import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.scss']
})
export class PlayListBodyComponent implements OnInit {

  @Input() public tracks: TrackModel[] = [];
  public optionSort: {
    property: string | null,
    order: 'asc' | 'desc',
  } = { property: null, order: 'asc' };

  constructor(private _multimediaService: MultimediaService) { }

  ngOnInit(): void {
    
  }

  changeSort(property: string): void{
    const { order } = this.optionSort;
    this.optionSort = {
      property,
      order: order === 'asc'? 'desc' : 'asc',
    }
  }

  sendPlayer(track: TrackModel): void{
    console.log(track);
    this._multimediaService.trackInfo$.next(track);
  }

}
