import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  sendCredentials(name: string, password: string): void {
    console.log(name, password);
    
  }
}
