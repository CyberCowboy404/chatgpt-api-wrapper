import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.scss']
})
export class ChatContentComponent {

  messages: any[];

  constructor() {
    this.messages = [
      {
        text: "Hello ",
        date: new Date(),
        reply: true,
        type: 'text',
        user: {
          name: 'Jonh Doe',
          avatar: 'https://i.gifer.com/no.gif',
        },
      }
    ]
  }

  sendMessage(event: any) {
    const files = !event.files ? [] : event.files.map((file: any) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: 'Jonh Doe',
        avatar: 'https://i.gifer.com/no.gif',
      },
    });
    
  }
}
