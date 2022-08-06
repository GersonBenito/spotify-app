import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { tap, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL: string = env.api;

  constructor(private httpClient: HttpClient, private cookie: CookieService) { }

  sendCredentials$(name: string, password: string): Observable<any> {
    const body = { name, password };
    return this.httpClient.post<any>(`${this.URL}/auth/login`, body)
          .pipe(
            tap(({ tokenSession }) => {
              this.cookie.set('token', tokenSession, env.expiredToken, '/');
            })
          );
  }
}
