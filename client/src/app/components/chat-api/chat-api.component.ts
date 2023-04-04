import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StorageService } from 'services/storage.service';

@Component({
  selector: 'app-chat-api',
  templateUrl: './chat-api.component.html',
  styleUrls: ['./chat-api.component.scss']
})
export class ChatApiComponent {
  constructor(private storage: StorageService) { }
  form = new FormGroup({
    chatKey: new FormControl(''),
  });

  onSubmit() {
    this.storage.saveData('ChatApi', this.form.get('chatKey')?.value || '');
    console.log(this.form.value);
  }
}
