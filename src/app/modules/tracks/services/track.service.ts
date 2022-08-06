import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { catchError, map, mergeMap, Observable, of, tap } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL: string = env.api;
  public dataTracksTrending$: Observable<TrackModel[]> = of([]);
  public dataTracksRandom: Observable<TrackModel[]> = of([]);

  constructor(private httpClient: HttpClient) { }

  private skipById(list: TrackModel[], id: number | string): Promise<TrackModel[]>{
    return new Promise((resolve, reject) =>{
      const listTmp = list.filter(a => a._id !== id);
      resolve(listTmp);
    });
  }

  /**
   * 
   * @returns get all tracks 🤘🤘
   */
  getAllTracks$(): Observable<any>{
    return this.httpClient.get<any>(`${this.URL}/tracks`)
          .pipe(map(({ data }) => {
            return data;
          }));
  }
  
  /**
   * 
   * @returns get all tracks random🤘🤘
   */
  getAllTracksRandom$(): Observable<any>{
    return this.httpClient.get<any>(`${this.URL}/tracks`)
          .pipe(
            tap( data => console.log('data raw', data)), // show data raw
            mergeMap(({ data }) => this.skipById(data.reverse(), 1)),
            // map((dataReverse) =>{
            //   return dataReverse.filter((track: TrackModel) => track._id !== 1); // return data filter when is different of id 1
            // }),
            tap(data => console.log('data parsed🤘',data)), // show data parse an filtered out using pipe
            catchError((error) =>{
              const { name, status, statusText, url } = error;
              console.log('error⚠️⚠️', {name, status, statusText, url});
              return of([]);
            })
          );
  }

}
