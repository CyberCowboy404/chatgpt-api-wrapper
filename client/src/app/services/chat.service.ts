import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  url = environment.apiUrl + '/chat/';
  constructor(private http: HttpClient) {
    console.log('environment.mode', environment.production);
    console.log('environment.apiUrl', environment);
  }

  ask() {
    console.log('ask');
    this.http.get(`${this.url}/ask`).subscribe((data) => {
      console.log('data', data);
    });
  }

}
