import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChatPageComponent } from './chat-page/chat-page.component';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatApiComponent } from 'chat/chat-api/chat-api.component';
import { ChatSidebarLeftComponent } from './chat-sidebar-left/chat-sidebar-left.component';
import { ChatSidebarRightComponent } from './chat-sidebar-right/chat-sidebar-right.component';
import { ChatContentComponent } from './chat-content/chat-content.component';

import { NbCardModule, NbChatModule } from '@nebular/theme';


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
    NbCardModule,
    NbChatModule
  ],
})
export class ChatModule { }
