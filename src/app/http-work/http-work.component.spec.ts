import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpWorkComponent } from './http-work.component';

describe('HttpWorkComponent', () => {
  let component: HttpWorkComponent;
  let fixture: ComponentFixture<HttpWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
