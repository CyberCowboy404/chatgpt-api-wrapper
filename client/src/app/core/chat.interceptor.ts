import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '@core/storage.service';
import { environment } from '@environments/environment';

@Injectable()
export class ChatInterceptor implements HttpInterceptor {

  constructor(private storage: StorageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("🚀 ~ file: chat.interceptor.ts:18 ~ ChatInterceptor ~ intercept ~ request:", request)
    if (request.url.includes('/chat')) {
      // Clone the request and attach the specific data
      const authReq = request.clone({
        setHeaders: {
          [environment.chatApiKey]: `${this.storage.getData(environment.chatApiKey)}`,
        },
      });
      return next.handle(authReq);
    }
    return next.handle(request);
  }
}
