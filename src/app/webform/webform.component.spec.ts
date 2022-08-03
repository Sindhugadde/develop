import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebformComponent } from './webform.component';

describe('WebformComponent', () => {
  let component: WebformComponent;
  let fixture: ComponentFixture<WebformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
