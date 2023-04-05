import { Component } from '@angular/core';
import { ChatService } from 'services/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private chatService: ChatService) {
    
  }

  ngOnInit(): void {

  }

  chat() {
    this.chatService.ask('What is the distance from the moon to the earth?').subscribe((res) => {
      console.log(res);
    });
  }
}
