import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ChatPageComponent } from './chat-page/chat-page.component';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatApiComponent } from 'chat/chat-api/chat-api.component';
import { ChatInterceptor } from '../core/chat.interceptor';
import { ChatSidebarLeftComponent } from './chat-sidebar-left/chat-sidebar-left.component';
import { ChatSidebarRightComponent } from './chat-sidebar-right/chat-sidebar-right.component';
import { ChatContentComponent } from './chat-content/chat-content.component';


@NgModule({
  declarations: [
    ChatPageComponent,
    ChatApiComponent,
    ChatSidebarLeftComponent,
    ChatSidebarRightComponent,
    ChatContentComponent,

  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ChatModule { }
