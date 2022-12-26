import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentdispComponent } from './commentdisp.component';

describe('CommentdispComponent', () => {
  let component: CommentdispComponent;
  let fixture: ComponentFixture<CommentdispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentdispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentdispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
