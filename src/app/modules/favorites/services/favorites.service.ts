import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private readonly URL: string = env.api;

  constructor(private httpClient: HttpClient) { }

  getAllTracksFavorites$(): Observable<any>{
    return this.httpClient.get<any>(`${this.URL}/tracks`)
          .pipe(
            map(({ data }) => data)
          );
  }
}
