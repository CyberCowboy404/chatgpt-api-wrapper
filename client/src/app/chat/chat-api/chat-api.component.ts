import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChatService } from '../chat.service';
import { StorageService } from '@core/storage.service';

import { environment } from '@environments/environment';

@Component({
  selector: 'app-chat-api',
  templateUrl: './chat-api.component.html',
  styleUrls: ['./chat-api.component.scss']
})
export class ChatApiComponent {
  form = new FormGroup({
    chatKey: new FormControl(''),
  });

  tokenExists = false;

  constructor(private storage: StorageService, private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.ping().subscribe(({ tokenExists }) => {
      this.tokenExists = tokenExists;
    });
  }

  onSubmit() {
    const value = this.form.get('chatKey')?.value || '';
    if (value) {
      this.chatService.putToken(value).subscribe(({ token }) => {
        this.storage.saveData(environment.chatApiKey, token);
      });
    }
  }
}
