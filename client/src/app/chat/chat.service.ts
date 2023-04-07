import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

export type IChatToken = {
  token: string;
};

export type ITokenData = {
  tokenExists: boolean;
};

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  url = environment.apiUrl + '/chat';

  constructor(private http: HttpClient) {
  }

  completion(message: string) {
    return this.http.post(`${this.url}/completion`, { message });
  }

  ping() {
    return this.http.get<ITokenData>(`${this.url}/ping`);
  }

  putToken(token: string): Observable<IChatToken> {
    return this.http.put<IChatToken>(`${this.url}/token`, { token });
  }

}
