import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './services/storage.service';

@Injectable()
export class ChatInterceptor implements HttpInterceptor {

  constructor(private storage: StorageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes('/my/specific/path')) {
      // Clone the request and attach the specific data
      const authReq = request.clone({
        setHeaders: {
          'ChatApi': `${this.storage.getData('chatKey')}`,
        },
      });
      return next.handle(authReq);
    }
    return next.handle(request);
  }
}
