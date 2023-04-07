import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSidebarRightComponent } from './chat-sidebar-right.component';

describe('ChatSidebarRightComponent', () => {
  let component: ChatSidebarRightComponent;
  let fixture: ComponentFixture<ChatSidebarRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatSidebarRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatSidebarRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
