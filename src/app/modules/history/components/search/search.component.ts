import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() public callbackData: EventEmitter<any> = new EventEmitter();
  public src: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  callSearch(term: string): void {
    if(term.length >= 3){
      console.log(term);
      this.callbackData.emit(term);
    }
  }

}
