import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.scss']
})
export class SectionGenericComponent implements OnInit {

  @Input() public title: string = '';
  @Input() public mode: 'small' | 'big' = 'small';
  @Input() public dataTracks: Array<TrackModel> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
