import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

export type IChatToken = {
  token: string;
};

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  url = environment.apiUrl + '/chat';

  constructor(private http: HttpClient) {
    console.log('environment.mode', environment.production);
    console.log('environment.apiUrl', environment);
  }

  ask() {
    this.http.post(`${this.url}/ask`, {}).subscribe((data) => {
      console.log('data', data);
    });
  }

  putToken(token: string): Observable<IChatToken> {
    return this.http.put<IChatToken>(`${this.url}/token`, { token });
  }

}
