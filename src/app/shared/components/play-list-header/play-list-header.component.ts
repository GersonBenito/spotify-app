import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-list-header',
  templateUrl: './play-list-header.component.html',
  styleUrls: ['./play-list-header.component.scss']
})
export class PlayListHeaderComponent implements OnInit {

  @Input() public name: string = '';
  @Input() public amountTracks: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
