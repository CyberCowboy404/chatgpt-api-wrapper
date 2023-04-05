import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChatService } from 'services/chat.service';
import { StorageService } from 'services/storage.service';

@Component({
  selector: 'app-chat-api',
  templateUrl: './chat-api.component.html',
  styleUrls: ['./chat-api.component.scss']
})
export class ChatApiComponent {
  constructor(private storage: StorageService, private chatService: ChatService) { }
  form = new FormGroup({
    chatKey: new FormControl(''),
  });

  onSubmit() {
    const value = this.form.get('chatKey')?.value || '';
    if (value) {
      this.chatService.putToken(value).subscribe(({ token }) => {
        this.storage.saveData('ChatApi', token);
      });
    }
  }
}
