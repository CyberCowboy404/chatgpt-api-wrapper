import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { NbDialogService } from '@nebular/theme';
import { SettingsComponent } from './settings/settings.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private dialogService: NbDialogService) { }
  items: NbMenuItem[] = [
    {
      title: 'Home',
      link: '/home',
    },
    {
      title: 'Chat',
      link: '/chat',
    },
  ];

  protected openSettings(closeOnBackdropClick?: boolean) {
    console.log('open settings');
    this.dialogService.open(SettingsComponent, { closeOnBackdropClick });
  }
}
