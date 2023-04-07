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
  }

  ask(message: string) {
    return this.http.post(`${this.url}/chat`, { message });
  }

  putToken(token: string): Observable<IChatToken> {
    return this.http.put<IChatToken>(`${this.url}/token`, { token });
  }

}
