import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderaftloginComponent } from './headeraftlogin.component';

describe('HeaderaftloginComponent', () => {
  let component: HeaderaftloginComponent;
  let fixture: ComponentFixture<HeaderaftloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderaftloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderaftloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
