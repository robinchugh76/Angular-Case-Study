import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectSibling1Component } from './subject-sibling1.component';

describe('SubjectSibling1Component', () => {
  let component: SubjectSibling1Component;
  let fixture: ComponentFixture<SubjectSibling1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectSibling1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectSibling1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
