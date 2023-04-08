import { Component } from '@angular/core';
import { ChatService } from 'chat/chat.service';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.scss']
})
export class ChatContentComponent {

  messages: any[];

  constructor(private chatService: ChatService) {
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

  sendMessage({ message, files }: { message: string, files: any[] }) {
    this.messages.push({
      text: message,
      date: new Date(),
      reply: true,
      type: 'text',
      user: {
        name: 'You',
      },
    });

    this.chatService.completion(message).subscribe((res: any) => {
      const { data } = res;
      console.log("🚀 ~ file: chat-content.component.ts:41 ~ ChatContentComponent ~ this.chatService.completion ~ data:", data)
      this.messages.push({
        text: data.choices[0].message.content,
        date: new Date(),
        reply: false,
        type: 'text',
        user: {
          name: 'Chat GPT',
        },
      });
    });

    // const files = !event.files ? [] : event.files.map((file: any) => {
    //   return {
    //     url: file.src,
    //     type: file.type,
    //     icon: 'file-text-outline',
    //   };
    // });

    // this.messages.push({
    //   text: event.message,
    //   date: new Date(),
    //   reply: true,
    //   type: files.length ? 'file' : 'text',
    //   files: files,
    //   user: {
    //     name: 'Jonh Doe',
    //     avatar: 'https://i.gifer.com/no.gif',
    //   },
    // });

  }
}
