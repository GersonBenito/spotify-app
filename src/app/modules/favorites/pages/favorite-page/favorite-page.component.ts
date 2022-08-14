import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { FavoritesService } from '@modules/favorites/services/favorites.service';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss']
})
export class FavoritePageComponent implements OnInit {

  public tracksFavorites: Array<TrackModel> = [];

  constructor(private _favoritesServices: FavoritesService) { }

  ngOnInit(): void {
    this.getAllTracksFavorite();
  }

  getAllTracksFavorite(): void {
    this._favoritesServices.getAllTracksFavorites$().subscribe({
      next: (response: TrackModel[]) =>{
        this.tracksFavorites = response;
      }
    })
  }

}
