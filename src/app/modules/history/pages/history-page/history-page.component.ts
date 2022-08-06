import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {

  public listResult$: Observable<any> = of([]);

  constructor(private _searchService: SearchService) { }

  ngOnInit(): void {}

  resiveData(event: string): void{
    // auto suscribe and unsuscribe async
    this.listResult$ = this._searchService.searchTracks$(event);
  }

}
