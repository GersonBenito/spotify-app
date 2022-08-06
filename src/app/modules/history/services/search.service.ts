import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly URL: string = env.api;

  constructor(private httpClient: HttpClient) { }

  /**
   * 
   * @param term param of search
   * @returns list of tracks
   */
  searchTracks$(term: string): Observable<any>{
    return this.httpClient.get<any>(`${this.URL}/tracks?src=${term}`)
          .pipe(
            map(({ data }) => data)
          );
  }
  
}
