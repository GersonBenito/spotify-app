import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import * as dataRaw from '../../../data/tracks.json';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.scss']
})
export class PlayListBodyComponent implements OnInit {

  public tracks: TrackModel[] = [];
  public optionSort: {
    property: string | null,
    order: 'asc' | 'desc',
  } = { property: null, order: 'asc' };

  constructor() { }

  ngOnInit(): void {
    const { data }: any = ( dataRaw as any ).default;
    this.tracks = data;
  }

  changeSort(property: string): void{
    const { order } = this.optionSort;
    this.optionSort = {
      property,
      order: order === 'asc'? 'desc' : 'asc',
    }
    console.log(this.optionSort);
    
  }

}
