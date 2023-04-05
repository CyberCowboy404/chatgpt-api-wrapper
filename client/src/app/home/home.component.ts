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
}
