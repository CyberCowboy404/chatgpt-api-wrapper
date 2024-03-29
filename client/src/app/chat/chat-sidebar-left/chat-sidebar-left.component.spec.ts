import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSidebarLeftComponent } from './chat-sidebar-left.component';

describe('ChatSidebarLeftComponent', () => {
  let component: ChatSidebarLeftComponent;
  let fixture: ComponentFixture<ChatSidebarLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatSidebarLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatSidebarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
