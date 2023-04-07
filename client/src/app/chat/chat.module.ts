import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ChatPageComponent } from './chat-page/chat-page.component';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatApiComponent } from 'chat/chat-api/chat-api.component';
import { ChatInterceptor } from './services/chat.interceptor';


@NgModule({
  declarations: [
    ChatPageComponent,
    ChatApiComponent,

  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ChatInterceptor,
      multi: true
    }
  ]
})
export class ChatModule { }
