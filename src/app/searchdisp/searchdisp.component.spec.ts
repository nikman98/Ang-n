import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdispComponent } from './searchdisp.component';

describe('SearchdispComponent', () => {
  let component: SearchdispComponent;
  let fixture: ComponentFixture<SearchdispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
